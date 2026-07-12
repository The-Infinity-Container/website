"use client";

import { useActionState, useState } from "react";
import PostEditor from "./PostEditor";
import { CATEGORIES, type CategoryKey } from "@/lib/categories";
import { createPost, updatePost, type PostActionState } from "@/lib/actions/posts";
import { uploadImage } from "@/lib/uploadImage";
import type { Post, PostStatus } from "@/types/post";

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const inputClass = "w-full border-2 border-black px-4 py-2 bg-white";
const labelClass = "block text-sm font-bold uppercase tracking-wide mb-1";

export default function PostForm({ post }: { post?: Post }) {
  const isEdit = !!post;

  const [title, setTitle] = useState(post?.title ?? "");
  const [slug, setSlug] = useState(post?.slug ?? "");
  const [slugTouched, setSlugTouched] = useState(isEdit);
  const [category, setCategory] = useState<CategoryKey>(post?.category ?? CATEGORIES[0].key);
  const [excerpt, setExcerpt] = useState(post?.excerpt ?? "");
  const [body, setBody] = useState(post?.body ?? "");
  const [status, setStatus] = useState<PostStatus>(post?.status ?? "draft");
  const [coverImageUrl, setCoverImageUrl] = useState<string | null>(post?.cover_image_url ?? null);
  const [images, setImages] = useState<string[]>(post?.images ?? []);
  const [uploading, setUploading] = useState(false);
  const [galleryUploading, setGalleryUploading] = useState(false);

  const [state, formAction, pending] = useActionState<PostActionState, FormData>(async () => {
    const payload = {
      title,
      slug: slug.trim() || slugify(title),
      category,
      excerpt,
      body,
      coverImageUrl,
      images,
      status,
    };
    return isEdit ? updatePost(post.id, payload) : createPost(payload);
  }, null);

  function handleTitleChange(value: string) {
    setTitle(value);
    if (!slugTouched) setSlug(slugify(value));
  }

  async function handleCoverUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const url = await uploadImage(file);
    setUploading(false);
    if (url) setCoverImageUrl(url);
  }

  async function handleGalleryUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    setGalleryUploading(true);
    const url = await uploadImage(file);
    setGalleryUploading(false);
    if (url) setImages((prev) => [...prev, url].slice(0, 5));
  }

  function removeImage(url: string) {
    setImages((prev) => prev.filter((u) => u !== url));
  }

  return (
    <form action={formAction} className="flex flex-col gap-6 max-w-2xl">
      <div>
        <label htmlFor="title" className={labelClass}>
          Title
        </label>
        <input
          id="title"
          value={title}
          onChange={(e) => handleTitleChange(e.target.value)}
          required
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="slug" className={labelClass}>
          Slug
        </label>
        <input
          id="slug"
          value={slug}
          onChange={(e) => {
            setSlugTouched(true);
            setSlug(e.target.value);
          }}
          required
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="category" className={labelClass}>
          Category
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value as CategoryKey)}
          className={inputClass}
        >
          {CATEGORIES.map((c) => (
            <option key={c.key} value={c.key}>
              {c.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="excerpt" className={labelClass}>
          Excerpt <span className="font-normal normal-case text-black/50">(optional — auto-generated from the body if left blank)</span>
        </label>
        <textarea
          id="excerpt"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          rows={3}
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>Cover image</label>
        {coverImageUrl && (
          // Cover images come from Supabase Storage; next/image would need
          // the project's storage hostname allow-listed, so a plain <img>
          // keeps the admin form working before that's configured.
          // eslint-disable-next-line @next/next/no-img-element
          <img src={coverImageUrl} alt="" className="w-full max-w-xs h-auto mb-2 border-2 border-black" />
        )}
        <label
          htmlFor="cover-image"
          className={`inline-block border-2 border-black px-4 py-2 text-sm font-bold uppercase tracking-wide cursor-pointer hover:bg-black hover:text-tic-yellow transition-colors ${
            uploading ? "opacity-50 pointer-events-none" : ""
          }`}
        >
          {coverImageUrl ? "Change Image" : "Choose Image"}
        </label>
        <input
          id="cover-image"
          type="file"
          accept="image/*"
          onChange={handleCoverUpload}
          disabled={uploading}
          className="sr-only"
        />
        {uploading && <p className="text-sm text-black/60 mt-1">Uploading…</p>}
      </div>

      <div>
        <label className={labelClass}>
          Gallery images <span className="font-normal normal-case text-black/50">({images.length}/5)</span>
        </label>
        {images.length > 0 && (
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-2">
            {images.map((url) => (
              <div key={url} className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={url} alt="" className="w-full aspect-square object-cover border-2 border-black" />
                <button
                  type="button"
                  onClick={() => removeImage(url)}
                  className="absolute top-1 right-1 bg-black text-tic-yellow text-xs font-bold w-5 h-5 flex items-center justify-center cursor-pointer hover:bg-tic-coral transition-colors"
                  aria-label="Remove image"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
        {images.length < 5 && (
          <>
            <label
              htmlFor="gallery-image"
              className={`inline-block border-2 border-black px-4 py-2 text-sm font-bold uppercase tracking-wide cursor-pointer hover:bg-black hover:text-tic-yellow transition-colors ${
                galleryUploading ? "opacity-50 pointer-events-none" : ""
              }`}
            >
              Add Image
            </label>
            <input
              id="gallery-image"
              type="file"
              accept="image/*"
              onChange={handleGalleryUpload}
              disabled={galleryUploading}
              className="sr-only"
            />
          </>
        )}
        {galleryUploading && <p className="text-sm text-black/60 mt-1">Uploading…</p>}
      </div>

      <div>
        <label className={labelClass}>Body</label>
        <PostEditor value={body} onChange={setBody} />
      </div>

      <div>
        <label htmlFor="status" className={labelClass}>
          Status
        </label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value as PostStatus)}
          className={inputClass}
        >
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
      </div>

      {state?.error && <p className="text-sm text-tic-coral font-bold">{state.error}</p>}

      <button
        type="submit"
        disabled={pending || uploading || galleryUploading}
        className="bg-black text-tic-yellow font-[family-name:var(--font-gordon)] uppercase tracking-widest py-3 cursor-pointer hover:bg-tic-yellow hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-black disabled:hover:text-tic-yellow"
      >
        {pending ? "Saving…" : isEdit ? "Save Changes" : "Create Post"}
      </button>
    </form>
  );
}

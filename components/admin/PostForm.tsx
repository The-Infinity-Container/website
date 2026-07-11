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
  const [uploading, setUploading] = useState(false);

  const [state, formAction, pending] = useActionState<PostActionState, FormData>(async () => {
    const payload = {
      title,
      slug: slug.trim() || slugify(title),
      category,
      excerpt,
      body,
      coverImageUrl,
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
        <input type="file" accept="image/*" onChange={handleCoverUpload} disabled={uploading} />
        {uploading && <p className="text-sm text-black/60 mt-1">Uploading…</p>}
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
        disabled={pending || uploading}
        className="bg-black text-tic-yellow font-[family-name:var(--font-gordon)] uppercase tracking-widest py-3 hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {pending ? "Saving…" : isEdit ? "Save Changes" : "Create Post"}
      </button>
    </form>
  );
}

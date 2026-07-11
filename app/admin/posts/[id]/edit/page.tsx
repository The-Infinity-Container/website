import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PostForm from "@/components/admin/PostForm";
import { getPostById } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Edit Post — Admin",
};

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await getPostById(id);

  if (!post) notFound();

  return (
    <div className="px-6 py-10 max-w-2xl mx-auto">
      <h1 className="font-[family-name:var(--font-gordon)] text-3xl uppercase tracking-widest mb-8">
        Edit Post
      </h1>
      <PostForm post={post} />
    </div>
  );
}

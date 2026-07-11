import type { Metadata } from "next";
import PostForm from "@/components/admin/PostForm";

export const metadata: Metadata = {
  title: "New Post — Admin",
};

export default function NewPostPage() {
  return (
    <div className="px-6 py-10 max-w-2xl mx-auto">
      <h1 className="font-[family-name:var(--font-gordon)] text-3xl uppercase tracking-widest mb-8">
        New Post
      </h1>
      <PostForm />
    </div>
  );
}

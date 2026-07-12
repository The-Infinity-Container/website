"use client";

import { useState } from "react";
import PostForm from "@/components/admin/PostForm";
import KitImportPanel from "@/components/admin/KitImportPanel";

export default function NewPostClient() {
  const [imported, setImported] = useState<{ title: string; body: string } | null>(null);

  return (
    <>
      <KitImportPanel onImport={setImported} />
      <PostForm key={imported?.title ?? "blank"} initialContent={imported ?? undefined} />
    </>
  );
}

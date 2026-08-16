"use client";

import { useEffect } from "react";

export default function ConsoleMessage({ messages }: { messages: string[] }) {
  useEffect(() => {
    messages.forEach((message) => console.log(message));
  }, [messages]);

  return null;
}

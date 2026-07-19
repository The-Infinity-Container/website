"use client";

import { useState, type ChangeEvent } from "react";

interface EmailGateProps {
  onSubmit: (name: string, email: string) => void;
}

export default function EmailGate({ onSubmit }: EmailGateProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showError, setShowError] = useState(false);

  function handleSubmit() {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName || !trimmedEmail || !trimmedEmail.includes("@")) {
      setShowError(true);
      return;
    }
    setShowError(false);
    onSubmit(trimmedName, trimmedEmail);
  }

  return (
    <div className="text-center">
      <h2 className="font-[family-name:var(--font-gordon)] text-[clamp(22px,3.5vw,32px)] tracking-[0.02em] mb-4">
        You&rsquo;re done. Let&rsquo;s find your fit.
      </h2>
      <p className="font-[family-name:var(--font-noto-serif)] text-[23px] leading-[37px] mb-9 max-w-[480px] mx-auto">
        Enter your name and email to see your result — we&rsquo;ll send it there too so you have it.
      </p>

      <div className="flex flex-col gap-[14px] max-w-[420px] mx-auto mb-6">
        <input
          type="text"
          placeholder="First name"
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          className="px-[18px] py-4 border-[1.5px] border-tic-grey rounded font-[family-name:var(--font-noto-serif)] text-[15px] text-black bg-white focus:outline-none focus:border-tic-orange transition-colors"
        />
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          className="px-[18px] py-4 border-[1.5px] border-tic-grey rounded font-[family-name:var(--font-noto-serif)] text-[15px] text-black bg-white focus:outline-none focus:border-tic-orange transition-colors"
        />
        {showError && (
          <p className="text-tic-rose text-[13px] italic font-[family-name:var(--font-noto-serif)]">
            Please enter a valid name and email.
          </p>
        )}
        <button
          type="button"
          onClick={handleSubmit}
          className="font-[family-name:var(--font-gordon)] text-sm tracking-[0.12em] uppercase bg-tic-orange text-black border-none px-11 py-[17px] rounded-[3px] cursor-pointer w-full hover:bg-tic-pink"
        >
          See My Result →
        </button>
      </div>

      <p className="font-[family-name:var(--font-noto-serif)] italic text-[13px] text-tic-dark-grey">
        No spam. We&rsquo;ll tag your result and send one email. That&rsquo;s it.
      </p>
    </div>
  );
}

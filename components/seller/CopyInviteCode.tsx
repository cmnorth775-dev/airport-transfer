"use client";

import { useState } from "react";

export function CopyInviteCode({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    if (!navigator.clipboard) {
      return;
    }
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="copy-row">
      <input value={code} readOnly aria-label="邀请码" />
      <button className="button button-secondary" type="button" onClick={copyCode}>
        {copied ? "已复制" : "复制"}
      </button>
    </div>
  );
}

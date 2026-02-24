'use client';

import { useState } from 'react';
import { Copy } from 'lucide-react'; // optional icon
import { Check } from 'lucide-react';

export default function CopyButton({ url }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      // Build absolute URL dynamically
      const absoluteUrl = `${window.location.origin}${url}`;

      await navigator.clipboard.writeText(absoluteUrl);
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center gap-1 px-3 py-1 border border-gray-300 rounded-sm text-sm hover:bg-gray-100 transition-colors ${
        copied ? 'bg-green-100 border-green-400 text-green-700' : ''
      }`}
    >
      {copied ? <Check size={16} /> : <Copy size={16} />}
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
}
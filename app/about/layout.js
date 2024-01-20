import React from "react";
import Link from 'next/link'

export default function AboutLayout({ children }) {
  return (
    <div>
      <nav>Mission | <Link href="/about/vision">Vision</Link></nav>

      {children}
    </div>
  );
}

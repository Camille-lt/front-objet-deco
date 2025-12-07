"use client";
import Link from "next/link";

export default function ButtonGhost({ href, children, className = "" }) {
  return (
    <Link href={href}>
      <button
        className={` border border-[#8a8781] px-4 py-2 text-lg font-medium underline decoration-1 
        hover:text-black transition-colors ${className}`}
      >
        {children}
      </button>
    </Link>
  );
}

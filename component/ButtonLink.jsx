"use client";
import Link from "next/link";

export default function ButtonLink({ href, children, className = "" }) {
  return (
    <Link href={href}>
      <button
        className={`border border-[#E4B969] text-[#E4B969] o px-6 py-3 font-s tracking-wide 
        transition-all duration-300 hover:bg-[#E4B969] hover:text-black 
        ${className}`}
      >
        {children}
      </button>
    </Link>
  );
}

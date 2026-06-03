import React from "react";

export function Footer() {
  return (
    <footer className="w-full bg-brand-alabaster py-16 text-center text-sm font-bold uppercase tracking-widest text-brand-charcoal">
      <p>&copy; {new Date().getFullYear()} Sri Aarumga Tex. All rights reserved.</p>
    </footer>
  );
}

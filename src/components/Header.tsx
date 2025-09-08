import React from "react";
export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white/50 backdrop-blur-sm outfit-font">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <h1 className="text-lg font-medium text-gray-900">Bill Buddy</h1>
      </div>
    </header>
  );
}
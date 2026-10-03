"use client";

import type { ReactNode } from "react";

const PRICING_URL = "https://www.buzzy.now/pricing";

export default function PricingJump({
  className = "btn btn-primary",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        window.location.href = PRICING_URL;
      }}
    >
      {children}
    </button>
  );
}

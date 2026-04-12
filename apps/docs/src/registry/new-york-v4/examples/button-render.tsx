"use client";
import { buttonVariants } from "@/registry/new-york-v4/ui/button";

export function ButtonRender() {
  return (
    <a
      href="#"
      className={buttonVariants({ variant: "secondary", size: "sm" })}
    >
      Login
    </a>
  );
}

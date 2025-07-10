"use client";

import Link from "next/link";
import Container from "./container";
import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";

export const Navbar = () => {
  const navItems = [
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
    { title: "Blog", href: "/blog" },
  ];

  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <Container>
      <nav className="flex items-center justify-between p-2">
        <Image
          className="h-10 w-10 rounded-full"
          src="/logo.png"
          alt="Logo"
          width={100}
          height={100}
        />

        <div className="flex items-center gap-4">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              className="text-primary dark:text-secondary relative px-2 py-1 text-sm md:text-sm"
            >
              {hovered === idx && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  layoutId="hovered-span"
                  className="absolute inset-0 z-10 h-full w-full rounded-md bg-neutral-100 dark:bg-neutral-800"
                />
              )}
              <span className="relative z-10">{item.title}</span>
            </Link>
          ))}
        </div>
      </nav>
    </Container>
  );
};

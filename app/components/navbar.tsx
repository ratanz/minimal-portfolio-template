"use client";

import Link from "next/link";
import Container from "./container";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useState } from "react";

export const Navbar = () => {
  const navItems = [
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
    { title: "Blog", href: "/blog" },
  ];

  const [hovered, setHovered] = useState<number | null>(null);
  const { scrollY } = useScroll();

  const [scrolled, setScrolled] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <Container className="relative">
      <motion.nav
        animate={{
            boxShadow: scrolled ? "--shadow-input" : "none", 
            width : scrolled ? "50%" : "100%",
            y: scrolled ? 10 : 0,
            
        }}
        transition={{
           duration : 0.3,
           ease : "easeInOut",
        }}
        className="flex fixed inset-x-0 top-0 left-0 max-w-2xl mx-auto items-center justify-between p-2 px-4"
        
      >
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
              <AnimatePresence>
                {hovered === idx && (
                  <motion.span
                    layoutId="hovered-span"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.4,
                      type: "spring",
                      stiffness: 380,
                      damping: 50,
                    }}
                    className="absolute inset-0 z-10 h-full w-full rounded-md bg-neutral-100 dark:bg-neutral-800"
                  />
                )}
              </AnimatePresence>
              <span className="relative z-10">{item.title}</span>
            </Link>
          ))}
        </div>
      </motion.nav>
    </Container>
  );
};

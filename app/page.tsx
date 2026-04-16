"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Simple 12-item source of truth for showcase images.
const showcaseItems = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  image: `/images/showcase${index + 1}.jpg`,
  title: `Signature Piece ${String(index + 1).padStart(2, "0")}`,
}));

const sectionAnimation = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="bg-white text-charcoal">
      {/* Section 1 & 2: Hero with sticky navbar */}
      <section id="hero" className="relative min-h-screen overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Luxury upholstered furniture"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Sticky navbar on hero */}
        <header className="sticky top-0 z-40 bg-black/20 backdrop-blur-sm">
          <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-12">
            <a href="#hero" className="flex items-center mr-4">
              <Image src="/logos/lo.png" alt="Craftora logo" width={70} height={30} priority />
            </a>
            <ul className="flex items-center gap-6 text-sm font-semibold uppercase tracking-[0.15em] text-white md:gap-10">
              <li>
                <a href="#about" className="transition-colors hover:text-gold">
                  About
                </a>
              </li>
              <li>
                <a href="#showcase" className="transition-colors hover:text-gold">
                  Showcase
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-gold">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>
        
        {/* Hero text content */}
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.15, ease: "easeOut" }}
          className="absolute inset-0 z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center"
        >
          <h1 className="font-brandFont text-4xl font-bold leading-tight text-warmBeige sm:text-5xl lg:text-6xl">
            Where comfort meets craftsmanship.
          </h1>
          <p className="mt-6 max-w-3xl font-bodyFont text-base leading-relaxed text-white/90 sm:text-lg">
            We create quality furniture and upholstery that transforms your space. Redefining
            Comfort, One Piece at a Time.
          </p>
          <p className="mt-5 font-bodyFont text-sm uppercase tracking-[0.2em] text-warmBeige sm:text-base">
            Luxury furniture • Bespoke upholstery • Timeless designs.
          </p>
        </motion.div>
      </section>

      {/* Section 3: About story section */}
      <motion.section
        id="about"
        className="bg-warmBeige py-20"
        variants={sectionAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
      >
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center lg:px-12">
          <div className="relative h-80 overflow-hidden rounded-2xl shadow-xl sm:h-[470px]">
            <Image
              src="/images/about.jpg"
              alt="Handcrafted upholstery process"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-bodyFont text-xs font-semibold uppercase tracking-[0.18em] text-[#603300]">
              The Craftora Story
            </p>
            <h2 className="mt-3 font-brandFont text-3xl text-[#603300] sm:text-4xl">
              Upholstery excellence built around everyday comfort.
            </h2>
            <p className="mt-6 font-bodyFont text-base leading-8 text-[#805b3d]">
              At Craftora, each piece begins with premium materials and an obsession for comfort.
              From refined lounge seating to statement sofas, our artisans shape every contour,
              stitch, and finish with precision.
            </p>
            <p className="mt-5 font-bodyFont text-base leading-8 text-[#805b3d]">
              We blend timeless silhouettes with modern softness, delivering furniture and bespoke
              upholstery that elevate homes with warmth, elegance, and lasting durability.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Section 4: 12-piece showcase grid */}
      <motion.section
        id="showcase"
        className="py-20"
        variants={sectionAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
          <h2 className="text-center font-brandFont text-3xl font-bold sm:text-4xl" style={{ color: "#603300" }}>
            Showcase
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center font-bodyFont text-[#886043]">
            A curated selection of pieces designed for style, comfort and longetivity
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {showcaseItems.map((item) => (
              <article key={item.id} className="group overflow-hidden rounded-2xl border border-black/5">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="bg-white px-5 py-4 flex items-center justify-center">
                  <h3 className="font-brandFont text-xl font-bold text-center tracking-wide text-[#603300]">{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section 5: Connect/contact block */}
      <motion.section
        id="contact"
        className="bg-[#1f1a16] py-20 text-warmBeige"
        variants={sectionAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
      >
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-6 text-center">
          <h2 className="font-brandFont text-3xl sm:text-4xl">Connect With Craftora</h2>
          <p className="mt-4 max-w-2xl font-bodyFont text-warmBeige/85">
            Let&apos;s bring your vision to life with luxury furniture and bespoke upholstery made
            for your space.
          </p>
          <a
            href="mailto:contact@craftora.com"
            className="mt-7 font-bodyFont text-lg text-gold transition-opacity hover:opacity-80"
          >
            contact@craftora.com
          </a>

          <div className="mt-8 flex items-center gap-5">
            <a href="#" aria-label="WhatsApp" className="transition-transform hover:-translate-y-1">
              <Image
                src="/icons/whatsapp.svg"
                alt="WhatsApp"
                width={34}
                height={34}
                className="h-9 w-9 brightness-0 saturate-100 invert-[74%] sepia-[54%] saturate-[474%] hue-rotate-[1deg] brightness-[90%] contrast-[88%]"
              />
            </a>
            <a href="https://www.instagram.com/craftoraofficial5?igsh=MTRtdHI5bGt1eWVveg==" aria-label="Instagram" className="transition-transform hover:-translate-y-1">
              <Image
                src="/icons/instagram.svg"
                alt="Instagram"
                width={34}
                height={34}
                className="h-9 w-9 brightness-0 saturate-100 invert-[74%] sepia-[54%] saturate-[474%] hue-rotate-[1deg] brightness-[90%] contrast-[88%]"
              />
            </a>
            <a href="https://www.facebook.com/share/1JCyaMX5iC/" aria-label="Facebook" className="transition-transform hover:-translate-y-1">
              <Image
                src="/icons/facebook.svg"
                alt="Facebook"
                width={34}
                height={34}
                className="h-9 w-9 brightness-0 saturate-100 invert-[74%] sepia-[54%] saturate-[474%] hue-rotate-[1deg] brightness-[90%] contrast-[88%]"
              />
            </a>
            <a href="https://www.tiktok.com/@craftora5?_r=1&_t=ZS-95ZFtUUWTHM" aria-label="Tiktok" className="transition-transform hover:-translate-y-1">
              <Image
                src="/icons/tiktok.svg"
                alt="Tiktok"
                width={34}
                height={34}
                className="h-9 w-9 brightness-0 saturate-100 invert-[74%] sepia-[54%] saturate-[474%] hue-rotate-[1deg] brightness-[90%] contrast-[88%]"
              />
            </a>
            <a
              href="mailto:contact@craftora.com"
              aria-label="Email"
              className="transition-transform hover:-translate-y-1"
            >
              <Image
                src="/icons/mail.svg"
                alt="Email"
                width={34}
                height={34}
                className="h-9 w-9 brightness-0 saturate-100 invert-[74%] sepia-[54%] saturate-[474%] hue-rotate-[1deg] brightness-[90%] contrast-[88%]"
              />
            </a>
          </div>
        </div>
      </motion.section>

      {/* Section 6: Footer */}
      <footer className="border-t border-black/10 bg-white py-7 text-center font-bodyFont text-sm text-[#603300]">
        © 2026 CRAFTORA. All Rights Reserved.
      </footer>
    </div>
  );
}

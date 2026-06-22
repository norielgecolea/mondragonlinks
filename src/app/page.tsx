"use client";
import "./globals.css";
import Image from "next/image";
import {
  FaCheck,
  FaEnvelope,
  FaFacebookF,
  FaFileAlt,
  FaGlobe,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import VisitorCounter from "./visitorcounter";

type VerseDetails = {
  text: string;
  reference: string;
};

const links = [
  { name: "Portfolio", icon: FaGlobe, href: "https://mondragonfoods.norielgecolea.com" },
  { name: "Email", icon: FaEnvelope, href: "mailto:norielgecolea23@gmail.com" },
  { name: "Phone", icon: FaPhoneAlt, href: "tel:+639128240698" },
  { name: "WhatsApp", icon: FaWhatsapp, href: "https://wa.me/639128240698" },
  { name: "Facebook", icon: FaFacebookF, href: "https://facebook.norielgecolea.com" },
];

export default function Home() {
  const [verse, setVerse] = useState<VerseDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDailyVerse() {
      try {
        const res = await fetch("https://beta.ourmanna.com/api/v1/get/?format=json");
        const data = await res.json();
        setVerse(data.verse.details);
      } catch (error) {
        console.error("Error fetching daily verse:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchDailyVerse();
  }, []);

  return (
    <main className="min-h-screen bg-[#eef7ee] px-4 py-8 font-hanken text-[#14351f] sm:px-6 sm:py-12">
      <section className="mx-auto flex w-full max-w-[460px] flex-col gap-4">
        <header className="relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/55 shadow-[0_24px_70px_rgba(35,93,45,0.16)] backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.92)_0%,rgba(234,248,235,0.74)_44%,rgba(255,255,255,0.48)_100%)]" />
          <div className="pointer-events-none absolute -left-10 -top-12 h-36 w-36 rounded-full bg-[#8fd19a]/40 blur-2xl" />
          <div className="pointer-events-none absolute right-0 top-0 h-24 w-32 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.9),transparent_68%)]" />
          <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#72b77d]/60 to-transparent" />

          <div className="relative z-10 flex items-center gap-4 px-4 py-5 sm:px-5">
            <div className="relative shrink-0">
              <div className="absolute inset-0 rounded-full bg-[#71c77e]/55 blur-xl" />
              <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/80 bg-white p-2 shadow-[0_14px_34px_rgba(57,121,70,0.24)] ring-1 ring-[#d5ecd7]">
                <Image
                  src="/mondragon_logo.png"
                  alt="Mondragon Foods Logo"
                  fill
                  className="object-contain p-2"
                  priority
                />
              </div>
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <p className="truncate text-[15px] font-black uppercase leading-tight tracking-wide text-[#14351f] sm:text-base">
                  Mondragon
                </p>
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full border border-white/80 bg-[#397946] text-white shadow-[0_8px_18px_rgba(57,121,70,0.28)]">
                  <FaCheck className="h-2.5 w-2.5" />
                </span>
              </div>
              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.22em] text-[#4b9a58]">
                Food Products
              </p>
            </div>

            <nav className="flex shrink-0 items-center gap-1.5" aria-label="Company actions">
              {[
                { label: "Website", icon: FaGlobe, href: "https://mondragonfoods.norielgecolea.com" },
              ].map((action) => {
                const Icon = action.icon;

                return (
                  <a
                    key={action.label}
                    href={action.href}
                    aria-label={action.label}
                    title={action.label}
                    target={action.href.startsWith("http") ? "_blank" : undefined}
                    rel={action.href.startsWith("http") ? "noreferrer" : undefined}
                    className="grid h-9 w-9 place-items-center rounded-full border border-white/70 bg-white/70 text-[#2f6f3b] shadow-[0_10px_24px_rgba(35,93,45,0.12)] backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-[#9bcf9f] hover:bg-white hover:text-[#1b4d2a] active:scale-95"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                );
              })}
            </nav>
          </div>

          <section className="relative z-10 bg-[linear-gradient(135deg,#1b4d2a_0%,#397946_52%,#7cab72_100%)] px-6 pb-7 pt-8 text-center text-white">
            <Image
              src="/mecartoon.png"
              alt="Noriel Fernando Gecolea"
              width={112}
              height={112}
              className="mx-auto h-28 w-28 rounded-full border-[6px] border-white bg-white object-cover opacity-100 shadow-xl ring-1 ring-white/80"
            />
            <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.3em] text-white">
              
            </p>
            <h1 className="mt-2 text-3xl font-black leading-tight text-white">
              Noriel Gecolea
            </h1>
            <p className="mt-1 text-sm font-semibold tracking-wide text-white">
             Computer Engineer
            </p>
            <p className="mx-auto mt-4 max-w-[19rem] text-xs font-medium leading-6 text-white">
              Helping connect people with Mondragon Foods through clear communication,
              reliable support, and an easy way to reach me.
            </p>
          </section>
        </header>

        <section className="grid gap-3">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex min-h-14 items-center rounded-2xl border border-white/80 bg-white/95 px-4 text-[#173c21] shadow-[0_14px_34px_rgba(35,93,45,0.11)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#9bcf9f] hover:bg-white active:scale-[0.98]"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#e6f5e8] text-[#397946] transition group-hover:bg-[#397946] group-hover:text-white">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="flex-1 px-4 text-sm font-bold">{link.name}</span>
                <span className="text-lg leading-none text-[#75aa7d] transition group-hover:translate-x-1 group-hover:text-[#397946]">
                  →
                </span>
              </a>
            );
          })}
        </section>

        <section className="rounded-3xl border border-white/70 bg-white/75 px-5 py-4 text-center shadow-[0_14px_34px_rgba(35,93,45,0.1)]">
          {loading ? (
            <div className="animate-pulse space-y-3">
              <div className="mx-auto h-3 w-4/5 rounded bg-green-200/70" />
              <div className="mx-auto h-3 w-2/3 rounded bg-green-200/60" />
            </div>
          ) : verse ? (
            <>
              <p className="text-xs leading-5 text-[#30583a]">{verse.text}</p>
              <p className="mt-2 text-[11px] font-bold uppercase tracking-widest text-[#438d50]">
                {verse.reference}
              </p>
            </>
          ) : (
            <p className="text-xs text-[#30583a]">Unable to load verse.</p>
          )}
        </section>

        <footer className="pt-2 text-center text-[10px] text-[#4b6f54]">
          <span>© 2026 Mondragon Food Products. All rights reserved.</span>
        </footer>
      </section>
    </main>
  );
}

"use client";
import "./globals.css";
import Image from "next/image";
import {
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
  { name: "Portfolio", icon: FaGlobe, href: "https://www.norielgecolea.com" },
  { name: "Resume", icon: FaFileAlt, href: "https://www.norielgecolea.com/NORIEL_GECOLEA_RESUME.pdf" },
  { name: "Email", icon: FaEnvelope, href: "mailto:norielgecolea23@gmail.com" },
  { name: "Phone", icon: FaPhoneAlt, href: "tel:+639128240698" },
  { name: "WhatsApp", icon: FaWhatsapp, href: "https://wa.me/639128240698" },
  { name: "LinkedIn", icon: FaLinkedinIn, href: "#" },
  { name: "Facebook", icon: FaFacebookF, href: "https://facebook.norielgecolea.com" },
  { name: "Instagram", icon: FaInstagram, href: "https://instagram.norielgecolea.com/" },
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
        <header className="overflow-hidden rounded-[1.75rem] bg-white shadow-[0_24px_70px_rgba(35,93,45,0.14)]">
          <div className="flex items-center justify-between gap-4 border-b border-green-900/10 px-5 py-5">
            <div className="flex items-center gap-3">
              <div className="logo-placeholder" aria-label="Mondragon Foods logo placeholder">MF</div>
              <div>
                <p className="text-base font-black uppercase leading-tight tracking-wide text-[#14351f]">
                  Mondragon Foods
                </p>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#4b9a58]">
                  Brand Placeholder
                </p>
              </div>
            </div>
            <span className="rounded-full bg-[#e6f5e8] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#397946]">
              Links
            </span>
          </div>

          <section className="bg-[linear-gradient(135deg,#1b4d2a_0%,#397946_52%,#7cab72_100%)] px-6 pb-7 pt-8 text-center text-white">
            <Image
              src="/mecartoon.png"
              alt="Noriel Fernando Gecolea"
              width={112}
              height={112}
              className="mx-auto h-28 w-28 rounded-full border-[6px] border-white bg-white object-cover shadow-xl"
            />
            <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.3em] text-green-100">
              Company I Represent
            </p>
            <h1 className="mt-2 text-3xl font-black leading-tight text-white">
              Noriel Gecolea
            </h1>
            <p className="mt-1 text-sm font-semibold tracking-wide text-green-100">
              Mondragon Foods Representative
            </p>
            <p className="mx-auto mt-4 max-w-[19rem] text-xs leading-6 text-green-50/90">
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
          <VisitorCounter />
          <span>© 2025 Noriel Gecolea. All rights reserved.</span>
        </footer>
      </section>
    </main>
  );
}

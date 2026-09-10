"use client";

import Image from "next/image";
import { getWhatsAppLink } from "@/config/site";

export default function HeroSection() {
  const whatsappUrl = getWhatsAppLink("Hola quiero usuario");

  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined") {
      if (typeof window.fbq === "function") {
        window.fbq("track", "Contact", { value: 0.00, currency: "ARS" });
        console.log("Meta Pixel: Contact event sent successfully with value and currency");
      } else if (window._fbq) {
        window._fbq.push(["track", "Contact", { value: 0.00, currency: "ARS" }]);
        console.log("Meta Pixel: Contact event queued with value and currency");
      } else {
        console.warn("Meta Pixel (window.fbq) is not loaded or is blocked by an ad blocker.");
      }
    }
  };

  return (
    <section className="flex flex-col items-center text-center space-y-8 w-full relative">
      {/* Background Ambient Glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-neon-purple/20 rounded-full filter blur-[100px] pointer-events-none"></div>

      {/* Avatar / Logo */}
      <div className="relative inline-block glow-purple-box rounded-full p-1.5 bg-gradient-to-b from-neon-purple via-neon-cyan/50 to-transparent transition-transform hover:scale-105 duration-300">
        <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full border-4 border-[#2a0a40] overflow-hidden relative">
          <Image
            alt="Sitio Oficial Logo"
            src="/assets/logo.png"
            fill
            sizes="(max-width: 640px) 176px, 208px"
            priority
            className="object-cover"
          />
        </div>

        {/* Verification Badge */}
        <div className="absolute bottom-2 right-2 bg-neon-purple text-white rounded-full p-2 border-4 border-[#130525] shadow-lg animate-bounce">
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              clipRule="evenodd"
              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>

      {/* Main Headline & Subtitle */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neon-purple/10 border border-neon-purple/30 text-neon-purple text-xs font-bold uppercase tracking-widest mb-2">
          <span>💎 PLATAFORMA N° 1 DE ARGENTINA</span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight font-heading">
          Atención <span className="text-neon-purple glow-purple">24/7</span>
        </h1>
      </div>

      {/* Hero WhatsApp Contact Button */}
      <div className="w-full max-w-md pt-2">
        <a
          className="btn-green text-black font-extrabold text-lg sm:text-xl px-8 py-5 rounded-full flex items-center justify-center space-x-3 w-full shadow-2xl group hover:no-underline"
          href={whatsappUrl}
          onClick={handleWhatsAppClick}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="h-7 w-7 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
            <path
              clipRule="evenodd"
              d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.183-.573c.978.58 1.711.848 3.146.848 3.182 0 5.767-2.585 5.767-5.766 0-3.18-2.585-5.766-5.767-5.767zm3.332 8.358c-.145.417-1.042.843-1.442.884-.33.033-.787.05-1.936-.425-1.385-.572-2.275-2.001-2.342-2.091-.067-.09-.56-.745-.56-1.421 0-.676.353-1.009.479-1.139.125-.13.271-.162.361-.162.09 0 .18 0 .26.004.084.004.195-.034.305.233.116.279.394.96.43.1037.035.076.059.166.012.261-.046.095-.07.153-.139.231-.069.078-.145.166-.204.229-.067.067-.138.14-.06.275.078.134.347.572.74 1.019.508.577.944.757 1.08.825.136.068.215.056.296-.036.08-.093.346-.401.438-.539.09-.138.18-.115.305-.069.124.047.788.371.923.439.135.068.225.102.257.159.034.056.034.33-.111.748z"
              fillRule="evenodd"
            ></path>
          </svg>
          <span className="tracking-wide">CONTACTAR POR WHATSAPP</span>
          <svg className="h-6 w-6 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
          </svg>
        </a>
      </div>
    </section>
  );
}

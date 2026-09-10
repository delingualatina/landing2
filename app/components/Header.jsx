import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
      <a href="#" className="flex items-center space-x-3 group">
        <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-r from-neon-purple to-neon-cyan group-hover:scale-105 transition-transform overflow-hidden relative">
          <Image
            src="/assets/logo.png"
            alt="Sitio Oficial Logo"
            width={48}
            height={48}
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div>
          <span className="text-2xl font-extrabold tracking-tight text-white font-heading">
            SITIO<span className="text-neon-purple">.OFICIAL</span>
          </span>
          <span className="block text-[10px] tracking-widest text-neon-green font-semibold uppercase">
            Plataforma Oficial
          </span>
        </div>
      </a>
    </header>
  );
}

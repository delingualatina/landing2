export default function FloatingWhatsApp() {
  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined") {
      if (typeof window.fbq === "function") {
        window.fbq("track", "Contact", { value: 0.00, currency: "ARS" });
      } else if (window._fbq) {
        window._fbq.push(["track", "Contact", { value: 0.00, currency: "ARS" }]);
      }
    }
  };

  return (
    <a
      href="https://wa.me/?text=Hola%20Sitio%20Oficial,%20quiero%20usuario"
      onClick={handleWhatsAppClick}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba59] text-white p-4 rounded-full shadow-2xl flex items-center justify-center transform hover:scale-110 transition-all duration-300 group border-2 border-white/20"
    >
      <span className="absolute -top-2 -right-1 bg-red-500 text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded-full animate-bounce">
        1
      </span>
      <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
        <path
          clipRule="evenodd"
          d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.183-.573c.978.58 1.711.848 3.146.848 3.182 0 5.767-2.585 5.767-5.766 0-3.18-2.585-5.766-5.767-5.766zm3.332 8.358c-.145.417-1.042.843-1.442.884-.33.033-.787.05-1.936-.425-1.385-.572-2.275-2.001-2.342-2.091-.067-.09-.56-.745-.56-1.421 0-.676.353-1.009.479-1.139.125-.13.271-.162.361-.162.09 0 .18 0 .26.004.084.004.195-.034.305.233.116.279.394.96.43.1037.035.076.059.166.012.261-.046.095-.07.153-.139.231-.069.078-.145.166-.204.229-.067.067-.138.14-.06.275.078.134.347.572.74 1.019.508.577.944.757 1.08.825.136.068.215.056.296-.036.08-.093.346-.401.438-.539.09-.138.18-.115.305-.069.124.047.788.371.923.439.135.068.225.102.257.159.034.056.034.33-.111.748z"
          fillRule="evenodd"
        ></path>
      </svg>
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out font-bold text-sm text-black pl-0 group-hover:pl-2">
        Chat 24/7
      </span>
    </a>
  );
}

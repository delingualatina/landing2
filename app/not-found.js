import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 space-y-6">
      <h1 className="text-6xl font-extrabold text-neon-purple font-heading">404</h1>
      <h2 className="text-2xl font-bold text-white">Página no encontrada</h2>
      <p className="text-gray-400 max-w-md">
        La página que estás buscando no existe o fue movida.
      </p>
      <Link
        href="/"
        className="btn-green text-black font-bold px-6 py-3 rounded-full flex items-center space-x-2"
      >
        <span>VOLVER AL INICIO</span>
      </Link>
    </div>
  );
}

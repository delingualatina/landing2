export default function LiveStatusBar() {
  return (
    <div className="w-full bg-[#16052d]/90 border-b border-neon-purple/20 py-2.5 px-4 sticky top-0 z-40 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center text-xs font-medium gap-2">
        <div className="flex items-center space-x-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-green"></span>
          </span>
          <span className="text-gray-200">SISTEMA 24/7 OPERATIVO</span>
          
        </div>
        <div className="hidden sm:flex items-center space-x-4 text-gray-300">
         
        </div>
        <div>
          <a href="#calculadora" className="text-neon-cyan hover:underline font-semibold flex items-center gap-1">
          
          </a>
        </div>
      </div>
    </div>
  );
}

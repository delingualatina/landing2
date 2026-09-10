import LiveStatusBar from "./components/LiveStatusBar";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <LiveStatusBar />
      <Header />

      <main className="flex-grow flex flex-col items-center pt-8 px-4 pb-16 w-full max-w-5xl mx-auto space-y-16">
        <HeroSection />
      </main>

      <Footer />
    </>
  );
}


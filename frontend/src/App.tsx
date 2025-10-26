import { useEffect } from "react";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  // 👇 This runs once when your app loads
  useEffect(() => {
    const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3000";
    fetch(`${API_BASE}/api`)
      .then((res) => res.text())
      .then((data) => {
        console.log("✅ Backend response:", data);
      })
      .catch((err) => {
        console.error("❌ Failed to connect to backend:", err);
      });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

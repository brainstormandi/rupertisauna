import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Features from "@/components/Features";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative bg-ocean">
      <Navbar />
      {/* Cinematic Scrollytelling Section */}
      <div className="relative">
        <ScrollyCanvas />
        <Overlay />
      </div>


      {/* Feature Section (After Scroll) */}
      <Features />
    </main>
  );
}

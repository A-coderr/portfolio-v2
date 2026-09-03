import { Hero } from "@/components/hero/Hero";
import { Header } from "@/components/layout/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}
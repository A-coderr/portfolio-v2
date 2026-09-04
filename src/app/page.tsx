import { Hero } from "@/components/hero/Hero";
import { Header } from "@/components/layout/Header";
import { SelectedWork } from "@/components/projects/SelectedWork";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <SelectedWork />
      </main>
    </div>
  );
}
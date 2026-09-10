import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center bg-background text-foreground">
      <section className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <p className="font-mono text-xs font-medium uppercase text-accent">
          404
        </p>
        <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
          This page is not part of the portfolio.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
          Return to the homepage or jump back to the selected project work.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-full bg-accent px-5 text-sm font-semibold text-background outline-none interactive-transition hover:bg-[#ff7a5d] focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background"
          >
            Go home
          </Link>
          <Link
            href="/#projects"
            className="inline-flex h-11 items-center justify-center rounded-full border border-border/80 px-5 text-sm font-semibold text-foreground outline-none interactive-transition hover:border-accent hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background"
          >
            View projects
          </Link>
        </div>
      </section>
    </main>
  );
}
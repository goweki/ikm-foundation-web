import DonateModal from "@/components/atoms/DonateModal";

// ─── Section ──────────────────────────────────────────────────────────────────

export default function DonateCTA() {
  return (
    <section className="w-full bg-sky-800">
      {/* Top hairline */}
      <div className="h-px w-full bg-white/10" />

      {/* Subtle cross-hatch texture — same as hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-12 xl:px-16">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          {/* Copy */}
          <h2 className="font-serif text-2xl font-bold leading-snug text-white sm:text-3xl lg:text-4xl max-w-lg">
            Interested in supporting our work?
          </h2>

          <div className="m-auto">
            <DonateModal buttonLocation="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}

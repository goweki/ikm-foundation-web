export const IMPACT_NUMBERS = [
  { quantity: "3,000+", description: "Beneficiaries" },
  { quantity: "60M+", description: "KES Invested" },
  { quantity: "300+", description: "Scholars" },
] as const;

function StatTile({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1.5 px-6 py-8 text-center sm:text-left sm:border-r sm:last:border-r-0 border-white/10 last:border-0">
      <span className="text-3xl font-bold tracking-tight text-white lg:text-4xl">
        {value}
      </span>
      <span className="text-sm leading-snug text-slate-300 max-w-[14ch] mx-auto sm:mx-0">
        {label}
      </span>
    </div>
  );
}

export function StatTiles() {
  return (
    <div className="grid grid-cols-2 divide-y divide-white/10 sm:grid-cols-3 sm:divide-y-0 w-full">
      {IMPACT_NUMBERS.map(({ quantity, description }) => (
        <StatTile key={quantity} value={quantity} label={description} />
      ))}
    </div>
  );
}

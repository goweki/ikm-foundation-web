import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { SocialIcon } from "react-social-icons";

// ─── Data ─────────────────────────────────────────────────────────────────────

const QUICK_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Our Pillars", href: "/pillars" },
  { label: "Impact", href: "/impact" },
] as const;

const SOCIAL_LINKS = [
  { label: "Instagram", url: "https://instagram.com/ikmadvocates" },
  {
    label: "LinkedIn",
    url: "https://linkedin.com/company/iseme-kamau-&-maema-advocates",
  },
  { label: "Twitter/X", url: "https://twitter.com/IKMAdvocates" },
  // { label: "YouTube", url: "https://youtube.com/@ikmfoundation" },
  // { label: "Facebook", url: "https://facebook.com/ikmfoundation" },
] as const;

const CONTACT = {
  email: "info@ikm-foundation.org",
  phone: "+254 20 277 3000",
  address: [
    "IKM Foundation",
    "IKM Place, Tower A, 1st Floor",
    "5th Ngong Avenue, Upperhill",
    "P.O. Box 11866-00400",
    "Nairobi, Kenya",
  ],
} as const;

// ─── Sub-components ───────────────────────────────────────────────────────────

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
      {children}
    </h3>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-50">
      {/* Top hairline */}
      <div className="h-px w-full bg-white/10" />

      <div className="mx-auto max-w-7xl px-6 py-14 md:px-12 xl:px-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* ── Col 1: Brand + mission recap ── */}
          <div className="flex flex-col gap-4 lg:col-span-1">
            <Link href="/" className="inline-block">
              {/* Swap <span> for <Image> once you have the logo file */}
              <span className="text-xl font-bold">IKM Foundation</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-500 max-w-xs">
              We invest in people through education, healthcare, and community
              support to create lasting change across Kenya. Every gift empowers
              a brighter future.
            </p>
            {/* Registration number — trust signal */}
            {/* <p className="mt-2 text-xs text-slate-500">
              Reg. No. 
            </p> */}
          </div>

          {/* ── Col 2: Social links ── */}
          <div>
            <FooterHeading>Follow us</FooterHeading>
            <ul className="flex row gap-3">
              {SOCIAL_LINKS.map(({ label, url }) => (
                <li key={label} className="flex items-center gap-2">
                  <SocialIcon
                    url={url}
                    style={{ width: 24, height: 24 }}
                    className="transition-colors duration-200"
                  />
                  {/* {label} */}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Contact + address ── */}
          <div>
            <FooterHeading>Contact us</FooterHeading>
            <ul className="flex flex-col gap-3 text-sm text-slate-500">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex items-start gap-2.5 hover:underline transition-colors duration-200"
                >
                  <Mail
                    size={15}
                    strokeWidth={1.75}
                    className="mt-0.5 shrink-0 text-slate-500"
                  />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-start gap-2.5 hover:underline transition-colors duration-200"
                >
                  <Phone
                    size={15}
                    strokeWidth={1.75}
                    className="mt-0.5 shrink-0 text-slate-500"
                  />
                  {CONTACT.phone}
                </a>
              </li>
              <li className="inline-flex items-start gap-2.5">
                <MapPin
                  size={15}
                  strokeWidth={1.75}
                  className="mt-0.5 shrink-0 text-slate-500"
                />
                <address className="not-italic leading-relaxed">
                  {CONTACT.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </li>
            </ul>
          </div>

          {/* ── Col 4: Quick links ── */}
          <div>
            <FooterHeading>Quick links</FooterHeading>
            <ul className="flex flex-col gap-2.5">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-slate-500 transition-colors duration-200 hover:underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {year} IKM Foundation. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            maintained by{" "}
            <Link
              className="text-blue-500 hover:underline font-bold opacity-80"
              href="https://goweki.com"
            >
              GOWEKI.
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

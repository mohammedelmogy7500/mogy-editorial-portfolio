import { PageIntro } from "@/components/page-intro";
import { ContactInteractive } from "@/components/home-interactive";
import { site } from "@/lib/site";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-brutalist-cream font-mono">
      <PageIntro
        eyebrow="CONTACT & INQUIRIES"
        title="GET IN TOUCH"
        description="Have a clinical AI problem, research collaboration, or high-volume data analytics pipeline? Let's talk."
        accentColor="bg-brutalist-yellow"
      />

      <div className="mx-auto max-w-7xl 2xl:max-w-[1600px] px-6 py-14 lg:px-12 2xl:px-16 lg:py-20">
        <ContactInteractive />

        {/* Secondary Info Badges */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="border-4 border-brutalist-ink bg-white p-5 shadow-[4px_4px_0_0_#1a1a1a]">
            <div className="flex items-center gap-2 text-xs font-black uppercase text-brutalist-ink">
              <MapPin size={16} /> LOCATION
            </div>
            <p className="mt-2 text-sm font-bold uppercase text-brutalist-ink">
              {site.location}
            </p>
            <p className="mt-1 text-xs text-brutalist-muted">Open to global & remote projects</p>
          </div>

          <div className="border-4 border-brutalist-ink bg-white p-5 shadow-[4px_4px_0_0_#1a1a1a]">
            <div className="flex items-center gap-2 text-xs font-black uppercase text-brutalist-ink">
              <Clock size={16} /> AVAILABILITY
            </div>
            <p className="mt-2 text-sm font-bold uppercase text-emerald-600">
              AVAILABLE NOW
            </p>
            <p className="mt-1 text-xs text-brutalist-muted">Contracts, consulting & full-time</p>
          </div>

          <div className="border-4 border-brutalist-ink bg-white p-5 shadow-[4px_4px_0_0_#1a1a1a]">
            <div className="flex items-center gap-2 text-xs font-black uppercase text-brutalist-ink">
              <Phone size={16} /> DIRECT PHONE
            </div>
            <p className="mt-2 text-sm font-bold uppercase text-brutalist-ink">
              {site.phone}
            </p>
            <p className="mt-1 text-xs text-brutalist-muted">WhatsApp & direct calls</p>
          </div>
        </div>
      </div>
    </div>
  );
}

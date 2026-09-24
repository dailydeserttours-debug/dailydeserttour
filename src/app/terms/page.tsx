import type { Metadata } from "next";
import { contactInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for booking with Daily Desert Tours.",
  // Placeholder copy — keep deindexed until real, reviewed terms text replaces it.
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-semibold text-night-800 sm:text-4xl">Terms &amp; Conditions</h1>

      <div className="mt-6 rounded-xl border border-terracotta-200 bg-terracotta-50 p-4 text-sm text-terracotta-800">
        Placeholder — this page was not part of the content copied from the original site and needs to be
        replaced with your reviewed booking terms and conditions before launch.
      </div>

      <div className="mt-8 space-y-5 leading-relaxed text-night-700">
        <p>
          This placeholder should be replaced with your actual booking terms: deposit and payment terms,
          cancellation and refund policy, liability during excursions (camel trekking, 4x4 travel, desert camps),
          and any requirements around travel insurance.
        </p>
        <p>
          Until a reviewed version is in place, please contact us directly with any questions about booking terms
          at{" "}
          <a href={`mailto:${contactInfo.email}`} className="font-medium text-terracotta-600">
            {contactInfo.email}
          </a>
          .
        </p>
      </div>
    </article>
  );
}

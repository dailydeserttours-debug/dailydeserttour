import type { Metadata } from "next";
import { contactInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Daily Desert Tours.",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-semibold text-night-800 sm:text-4xl">Privacy Policy</h1>

      <div className="mt-6 rounded-xl border border-terracotta-200 bg-terracotta-50 p-4 text-sm text-terracotta-800">
        Placeholder — this page was not part of the content copied from the original site and needs to be
        replaced with your reviewed privacy policy text before launch.
      </div>

      <div className="mt-8 space-y-5 leading-relaxed text-night-700">
        <p>
          This placeholder policy should be replaced with a document describing what personal information Daily
          Desert Tours collects (for example, through the contact and trip inquiry forms on this site), how it is
          used, how long it is retained, and how visitors can request access to or deletion of their data.
        </p>
        <p>
          Until a reviewed policy is in place, please contact us directly with any privacy questions at{" "}
          <a href={`mailto:${contactInfo.email}`} className="font-medium text-terracotta-600">
            {contactInfo.email}
          </a>
          .
        </p>
      </div>
    </article>
  );
}

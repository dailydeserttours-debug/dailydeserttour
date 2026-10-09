import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";

export default function ItLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header lang="it" />
      <main className="flex-1">{children}</main>
      <Footer lang="it" />
      <WhatsAppButton lang="it" />
      <ScrollToTopButton lang="it" />
    </>
  );
}

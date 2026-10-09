import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header lang="en" />
      <main className="flex-1">{children}</main>
      <Footer lang="en" />
      <WhatsAppButton lang="en" />
      <ScrollToTopButton lang="en" />
    </>
  );
}

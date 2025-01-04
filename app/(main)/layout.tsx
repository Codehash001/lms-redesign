import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen mt-20">
        {children}
      </main>
      <Footer />
    </>
  );
}

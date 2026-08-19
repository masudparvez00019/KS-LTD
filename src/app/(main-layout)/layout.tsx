import { ReactNode } from "react";
import { Navbar } from "@/components/shared/main/navbar";
import { Footer } from "@/components/shared/main/footer";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
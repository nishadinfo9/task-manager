import Footer from "@/components/Footer/Footer";
import FooterAction from "@/components/Home/FooterAction/FooterAction";
import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Home/Navbar";
import Plans from "@/components/Home/Plans/Plans";
import ProblemSolution from "@/components/Home/ProblemSolution/ProblemSolution";
import ServicesComp from "@/components/Home/ServiceList/ServicesList";
import SmartTracking from "@/components/Home/SmartTracking/SmartTracking";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="w-10/12 mx-auto">
        <Navbar />
      </header>
      <main className="w-10/12 mx-auto space-y-20">
        <Hero />
        <ServicesComp />
        <ProblemSolution />
        <SmartTracking />
        <Plans />
        <FooterAction />
        {children}
      </main>
      <footer className="w-10/12 mx-auto">
        <Footer />
      </footer>
    </div>
  );
}

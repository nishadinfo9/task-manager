import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Home/Navbar";
import ProblemSolution from "@/components/Home/ProblemSolution/ProblemSolution";
import ServicesComp from "@/components/Home/ServiceList/ServicesList";

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
        {children}
      </main>
      <footer className="w-10/12 mx-auto">
        <Footer />
      </footer>
    </div>
  );
}

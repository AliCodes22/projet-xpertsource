import Header from "../components/Header";

// definir metadata qui nous permet d'optimiser SEO pour l'application
export const metadata: Metadata = {
  title: "Gadget Hub",
  description: "Trouver la meilleure technologie au meilleur prix",
};

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {children}
      </main>
    </>
  );
};

export default HomeLayout;

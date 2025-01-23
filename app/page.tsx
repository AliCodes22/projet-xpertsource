import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IconChalkboardUser } from "@/assets/icons/Logo";

// Affiche le landing page
const LandingPage = () => {
  const content = [
    {
      title: "Qualité Premium",
      description:
        "Nos produits proviennent de marques de confiance garantissant une qualité irréprochable.",
    },
    {
      title: "Livraison rapide",
      description: "Profitez d'une livraison rapide et fiable à votre porte.",
    },
    {
      title: "Support inégalé",
      description:
        "Notre équipe d'assistance est disponible 24h/24 et 7j/7 pour répondre à vos besoins.",
    },
  ];
  return (
    <div className="bg-black text-neutral-50 min-h-screen flex flex-col">
      {/* Hero Section: Avec message de bienvenue*/}
      <section
        className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/path/to/hero-image.jpg')",
        }}
      >
        <div className="bg-black/70 absolute inset-0" />
        <div className="relative z-10 max-w-4xl text-center">
          <IconChalkboardUser height={60} width={60} className="mx-auto mb-4" />
          <h1 className="text-5xl font-extrabold leading-tight">
            Bienvenue chez Gadget Hub
          </h1>
          <p className="mt-4 text-lg">
            Decouvrez les meilleur produits en{" "}
            <span className="text-gray-400">une place de</span> Haute qualité
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/produits">
              <Button className="px-6 py-3 text-lg hover:bg-neutral-600">
                Explorez maintenant
              </Button>
            </Link>
            <Link href="/categories">
              <Button className="px-6 py-3 text-lg hover:bg-neutral-600">
                Categories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Pourquoi Gadget Hub?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.map((feature, index) => (
              <div key={index} className="p-6 bg-black/80 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            Joignez-nous aujourd'hui!
          </h2>
          <p className="text-lg text-gray-400">Enregistrez maintenant!</p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/">
              <Button className="px-8 py-3 text-lg hover:bg-neutral-600">
                Connexion
              </Button>
            </Link>
            <Link href="/">
              <Button className="px-8 py-3 text-lg hover:bg-neutral-600">
                Enregistrez vous
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

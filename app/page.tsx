import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IconChalkboardUser } from "@/assets/icons/Logo";

// Affiche le landing page
const LandingPage = () => {
  const content = [
    {
      title: "Premium Quality",
      description:
        "Our products are sourced from trusted brands ensuring top-notch quality.",
    },
    {
      title: "Fast Delivery",
      description: "Enjoy swift and reliable delivery to your doorstep.",
    },
    {
      title: "Unmatched Support",
      description:
        "Our support team is available 24/7 to assist with your needs.",
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
            Welcome to Our Store
          </h1>
          <p className="mt-4 text-lg">
            Discover the best products in{" "}
            <span className="text-gray-400">one place</span>. High quality,
            unbeatable prices.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/produits">
              <Button className="px-6 py-3 text-lg hover:bg-neutral-600">
                Shop Now
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
          <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
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
          <h2 className="text-4xl font-extrabold mb-6">Join Us Today</h2>
          <p className="text-lg text-gray-400">
            Sign up now and get exclusive offers on your first purchase!
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/">
              <Button className="px-8 py-3 text-lg hover:bg-neutral-600">
                Sign In
              </Button>
            </Link>
            <Link href="/">
              <Button className="px-8 py-3 text-lg hover:bg-neutral-600">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

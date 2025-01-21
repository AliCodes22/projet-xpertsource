import MuiCard from "@/app/components/MuiCard";
import { imageMap } from "@/utils";

const HomePage = async () => {
  // fetch des donnes des prouidts a partir d'un API
  const fetchData = await fetch("https://api.jsoning.com/mock/public/products");
  const data = await fetchData.json();

  // On filtre les donnees pour enlever webcam
  const halfData = data
    .slice(0, 6) // on limite les donnees pour inclure les 6 premiers articles
    .filter((item) => item.name !== "1080p Webcam"); // on exclut webcam

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {halfData.map((item: any) => {
        console.log(item.name);

        // utilise la technique destructuring pour avoir les props necessaires de l'item
        const { id, name, description, image, price } = item;

        // On retourne la carte MuiCard pour chacun des articles
        return (
          <MuiCard
            key={id}
            name={name}
            description={description}
            price={price}
            id={id}
            image={imageMap[item.name]}
          />
        );
      })}
    </div>
  );
};

export default HomePage;

import MuiCard from "@/app/components/MuiCard";
import { imageMap } from "@/utils";

const HomePage = async () => {
  const fetchData = await fetch("https://api.jsoning.com/mock/public/products");
  const data = await fetchData.json();
  const halfData = data
    .slice(0, 6)
    .filter((item) => item.name !== "1080p Webcam");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {halfData.map((item: any) => {
        console.log(item.name);
        const { id, name, description, image, price } = item;
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

import MuiCard from "@/app/components/MuiCard";

const HomePage = async () => {
  const fetchData = await fetch("https://api.jsoning.com/mock/public/products");
  const data = await fetchData.json();
  const halfData = data.slice(0, 5);

  console.log(data);
  return (
    <>
      <MuiCard />
    </>
  );
};

export default HomePage;

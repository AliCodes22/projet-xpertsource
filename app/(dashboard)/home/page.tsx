const HomePage = async () => {
  const fetchData = await fetch("https://api.jsoning.com/mock/public/products");
  const data = await fetchData.json();

  console.log(data);
  return (
    <>
      <h1>Xpert Source</h1>
    </>
  );
};

export default HomePage;

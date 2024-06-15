const page = async () => {
  const cat = await fetch(
    "http://www.thecocktaildb.com/api/json/v1/1/search.php?s=Vodka"
  );
  const data = await cat.json();
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
export default page;

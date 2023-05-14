import Hero from "../../components/home/hero";

const Home: React.FC<{}> = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-homepage-color">
      <Hero />
    </div>
  );
};

export default Home;

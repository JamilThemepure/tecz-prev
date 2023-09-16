import FeaturesArea from "@/components/FeaturesArea";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroArea from "@/components/HeroArea";
import InnerDemo from "@/components/InnerDemo";
import TopDemoArea from "@/components/TopDemoArea";




export const metadata = {
  title: "Tecz Prev - IT Solutions & Technology React Next js Template",
};


const Home = () => {
  return (
    <>
      <Header />
      <main>
        <HeroArea />
        <TopDemoArea />
        <FeaturesArea />
        <InnerDemo />
      </main>
      <Footer />
    </>
  );
};

export default Home;
import MixedAutoSlider from "../components/MixedAutoSlider";
import SubscriptionForm from "../components/SubscriptionForm";
import Features from "../components/Features";
import LatestCollections from "../components/LatestCollections";
import { motion } from "framer-motion";
import BestSeller from "../components/BestSeller";
import GlassEffectCard from "../components/GlassEffectCard";
import HeaderDashed from "../components/HeaderDashed";
import attar from "../../public/attar.jpg";
import beauty from "../../public/beauty.jpg";
import Feminine from "../../public/feminine.jpg";
import mens from "../../public/mens.jpg";
import time from "../../public/time.jpg";
import skin from "../../public/skin.jpg";
import { Helmet } from "react-helmet";

export let ProductCategry = [
  {
    Category: "Skin Elixirs",
    Image: skin,
    path: "product/Skin Elixirs",
  },
  {
    Category: "Masculine Scents",
    subCategory: [],
    Image: mens,
    path: "product/Masculine Scents",
  },
  {
    Category: "Feminine Fragrances",
    subCategory: [],
    Image: Feminine,
    path: "product/Feminine Fragrances",
  },
  {
    Category: "Pure Essence",
    subCategory: [],
    Image: attar,
    path: "product/Pure Essence",
  },
  {
    Category: "Timeless Timepieces",
    subCategory: [],
    Image: time,
    path: "product/Timeless Timepieces",
  },
  {
    Category: "Beauty And Skin Care",
    subCategory: [],
    Image: beauty,
    path: "product/Beauty And Skin Care",
  },
];

// Dummy Fixed Data:
// import productsData from "../components/FixedData";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="home-page text-center"
    >
      <Helmet>
        <title>
          Welcome to Stop n Buy - Your One-Stop Online Shopping Destination
        </title>
        <meta
          name="description"
          content="Discover a wide range of products at Stop n Buy, including electronics, fashion, home goods, and more. Shop now for the best deals!"
        />
        <meta
          name="keywords"
          content="online shopping, buy products online, best deals, electronics, fashion, home goods, Stop n Buy, affordable products"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="container">
        <MixedAutoSlider />

        <LatestCollections />

        <section style={{ marginBottom: "50px", marginTop: "150px" }}>
          <HeaderDashed
            head1="All"
            head2="Categories"
            paragraph="Style, Comfort, and Quality – All in One Place"
          />
          <div className="row">
            {ProductCategry.map((data) => (
              <GlassEffectCard
                imageSrc={data.Image}
                text={data.Category}
                path={data.path}
              />
            ))}
          </div>
        </section>

        <BestSeller />

        <Features />

        <SubscriptionForm />
      </div>
    </motion.section>
  );
};

export default Home;

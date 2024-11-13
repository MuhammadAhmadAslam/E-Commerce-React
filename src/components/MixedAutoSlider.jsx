// Import Slider Images
import mainBanner from "../../public/BANNER.jpg";
import slide_1_img from "../assets/slide-1.jpg";
import banner from "../assets/bannerhae.jpeg";
import slide_2_img from "../assets/slide-2.jpg";
import slide_3_img from "../assets/slide-3.jpg";
import slide_4_img from "../assets/slide-4.jpg";
import slide_5_img from "../assets/alide-5.jpg";
import slide_6_img from "../assets/slide-6.jpg";
import slide_7_img from "../assets/slide-7.jpg";
import slide_8_img from "../assets/slide-8.jpg";
import slide_9_img from "../assets/slide-9.jpg";
import slide_10_img from "../assets/slide-10.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const MixedAutoSlider = () => {
  const sliderImages = [
    mainBanner,
    banner,
    "https://www.omnisend.com/blog/wp-content/uploads/2021/03/21-03-19-Fashion-ecommerce.jpg",
    slide_9_img,
    slide_7_img,
    slide_8_img,
    slide_1_img,
    slide_2_img,
    slide_3_img,
    slide_4_img,
    slide_5_img,
    slide_6_img,
    slide_10_img,
  ];
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-slide functionality for the image slider
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveSlide((prev) => {
        return prev >= sliderImages.length - 1 ? 0 : prev + 1;
      });
    }, 2500);

    return () => clearInterval(slideInterval); // Cleanup interval on unmount
  }, [sliderImages.length]);

  return (
    <section
    style={{
      backgroundImage: `url(${mainBanner})`,
      height: "60vh",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      position: "relative",
      display: "flex",
      justifyContent: "center", // Align to the right
      alignItems: "flex-start",
      flexDirection: "column",
      paddingRight: "2rem", // Add padding for spacing from the edge
      textAlign: "left",
      paddingLeft: "2rem",
    }}
  >
    <div style={{ zIndex: 1, color: "white" }}>
      <h1 style={{ margin: 0 }}>
        Shop Your Essentials, Anytime, Anywhere
      </h1>
      <p style={{ marginTop: "0.5rem" , textAlign: "left"}}>
        From daily basics to exclusive finds, discover everything you need at unbeatable prices!
      </p>
      <Link to="/collection" style={{
        marginTop: "2rem",
        padding: "0.5rem 1rem",
        color: "white",
        backgroundColor: "#207DFF", // Adjust color as needed
        border: "none",
        cursor: "pointer",
        textDecoration: "none",
      }}>
        Shop Now
      </Link>
    </div>
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    ></div>
  </section>
  
  );
};

export default MixedAutoSlider;

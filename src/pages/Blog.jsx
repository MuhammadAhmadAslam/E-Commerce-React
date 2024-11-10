import { motion } from "framer-motion";
import "./Blog.css";
export default function Blog() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="home-page text-center"
    >
      <div className="container mx-auto " style={{ minHeight: "60vh" }}>
        <h1 className="text-center mb-0 lh-base">Blog Page</h1>

        <div className="row mt-5 flex justify-content-center align-items-center gap-5">
          <div className="col-12 col-sm-12 col-lg-3 col-md-6 cards">
            <div class="image" style={{ overflow: "hidden" }}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBz85qa1YpCrrsh_9hWzUGN_xcr3929IVNsA&s" />
            </div>
            <div class="content">
              <a href="#">
                <span class="title">
                  How to Choose the Perfect Perfume for Every Occasion
                </span>
              </a>

              <p class="desc">
                This blog can help readers understand how to choose perfumes for
                various settings—whether its a light, fresh scent for the office
                or a bold, luxurious fragrance for special events. You can
                highlight popular perfumes from your store, detailing their
                scent profiles and suitability for different occasions.
              </p>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-lg-3 col-md-6 cards">
            <div class="image" style={{ overflow: "hidden" }}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwT026on6Zdh_ut5lvsa-8HK23j12C9KmyMA&s" />
            </div>
            <div class="content">
              <a href="#">
                <span class="title">
                  A Guide to Matching Watches with Your Outfit
                </span>
              </a>

              <p class="desc">
                Help customers style their outfits with the right watch for each
                occasion, whether casual, business, or formal. You can showcase
                various types of watches from your store, covering how to pair
                different watch styles with attire.
              </p>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-lg-3 col-md-6 cards">
            <div class="image" style={{ overflow: "hidden" }}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnkzBbubWlF3CLPEgL0QEUie7irfxf3Z0y-w&s" />
            </div>
            <div class="content">
              <a href="#">
                <span class="title">
                  10 Essential Skin Care Tips for Radiant Skin
                </span>
              </a>

              <p class="desc">
                This blog can provide tips on building a simple yet effective
                skincare routine. Include an overview of important skincare
                products like cleansers, moisturizers, and sunscreens. You can
                also feature skincare items from your store and offer guidance
                on how to use them.
              </p>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-lg-3 col-md-6 cards">
            <div class="image" style={{ overflow: "hidden" }}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpGyl_PnF-rDYb2CTPkZyUCX0DyW9Ma7pjMw&s" />
            </div>
            <div class="content">
              <a href="#">
                <span class="title">
                  Perfume Layering 101: How to Create a Signature Scen
                </span>
              </a>

              <p class="desc">
                Teach customers the art of perfume layering to create a custom,
                long-lasting fragrance. This blog can explore tips for combining
                different scents, suggest complementary notes, and recommend
                perfumes from your collection that layer well together.
              </p>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-lg-3 col-md-6 cards">
            <div class="image" style={{ overflow: "hidden" }}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrwMJbes6dJ6VOfWx5Py3PUbMRztkWOInRgA&s" />
            </div>
            <div class="content">
              <a href="#">
                <span class="title">
                  5 Must-Have Watch Styles for Every Collector
                </span>
              </a>

              <p class="desc">
                This blog can delve into the must-have watch styles every
                enthusiast should consider, from classic and minimalist to
                luxury timepieces. Each section can feature watches available in
                your store, appealing to both new buyers and seasoned
                collectors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

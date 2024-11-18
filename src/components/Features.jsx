import SingleFeature from "./SingleFeature";
// Import Features Images
import exhangeImg from "../assets/download-f.png";
import qualityImg from "../assets/quality_icon.png";
import supportImg from "../assets/download-set.png";

const Features = () => {
	const featuresImgs = [exhangeImg, qualityImg, supportImg];
	const featuresContent = [
		{head: "Easy Exchange Policy", text: "We offer hassle free exchange policy" , path: "https://docs.google.com/document/d/1ubLI2Zkmgy6x2wlmM8GVUGiimI_ED1zd8SraPHZzyhY/edit?tab=t.0#heading=h.vlvh81eo439f"},
		{head: "7 Days Return Policy", text: "We provide 7 days free return policy" , path: "https://docs.google.com/document/d/1RKeJKjo9fsPwFkiLf9EHyUzEcoZisDUJW4JBh9nNwFU/edit?tab=t.0#heading=h.r857kvjc3qpe"},
		{head: "Best Customer Support", text: "We provide 24/7 customer support" , path: "https://docs.google.com/document/d/15DL7vURQu96OWo_hvuI58yyU9qplkHWU_WzIcsdo6_o/edit?tab=t.0#heading=h.kyw1c9v4x8li"},
	]

	return (
		<section className="features d-flex flex-wrap text-center gap-5 column-gap-3 column-gap-lg-5 sec-padd">
			{/* Map through images and render SingleFeature component for each */}
			{featuresImgs.map((img, i) => (
				<SingleFeature key={i} img={img} classLayout="col-12 col-lg" path={featuresContent[i].path} head={featuresContent[i].head} text={featuresContent[i].text} />
			))}
		</section>
	);
};

export default Features;

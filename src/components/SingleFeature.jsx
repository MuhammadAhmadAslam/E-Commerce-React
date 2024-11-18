import { Image } from "antd";
import { Link } from "react-router-dom";

const SingleFeature = ({ img, classLayout, head, text , path}) => {
  return (
    <article
      className={`d-flex flex-column gap-2 align-items-center ${classLayout}`}
      data-aos="fade-up"
      data-aos-anchor-placement="center-center"
    >
      <a href={path} target={"_blank"} style={{
	textDecoration: "none"
      }}>
        {/* Feature Image */}
        <img src={img} alt="Easy Exchange" className="col-1 col-lg-2" />

        {/* Feature Title */}
        <h4 className="mt-2 mb-0" style={{ color: "goldenrod" }}>
          <strong>{head}</strong>
        </h4>

        {/* Feature Description */}
        <p className="c-gray">{text}</p>
      </a>
    </article>
  );
};

export default SingleFeature;

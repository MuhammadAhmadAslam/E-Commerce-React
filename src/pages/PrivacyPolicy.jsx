import React from "react";
import WebsiteNavbar from "../components/Navbar";
import Footer from "../components/Footer";

function PrivacyPolicy() {
  return (
    <div style={{
       display: "flex",
       justifyContent: "center",
       height: "100vh",
       backgroundColor: "#f8f9fa",
       padding: "50px",
       flexDirection:"column",
    }}>
      <h1>Privacy Policy</h1>{" "}
      <p>
        Your privacy is important to us and we do our best to protect the
        information about you. This is a statement detailing our practices
        concerning your personal information when you are using the website.
      </p>{" "}
      <h1>Information We Collect</h1>{" "}
      <p>We may collect the following types of information:</p>{" "}
      <ul>
        {" "}
        <li>
          Personal Information: When you create an account, place an order, or
          contact us, we may collect your name, email address, shipping address,
          phone number, and payment information.
        </li>{" "}
        <li>
          Non-Personal Information: We may also collect non-personal data such
          as your browser type, IP address, and pages visited on our site to
          improve our services.
        </li>{" "}
      </ul>{" "}
      <h1>How We Use Your Information</h1> <p>We use your information to:</p>{" "}
      <ul>
        {" "}
        <li>Process and fulfill your orders</li>{" "}
        <li>Communicate with you regarding your orders or inquiries</li>{" "}
        <li>Improve our website and customer service</li>{" "}
        <li>Send promotional emails (if you opt-in)</li>{" "}
      </ul>{" "}
      <h1>Information Sharing</h1>{" "}
      <p>
        At no point do we share your personal information with a third party for
        consideration or sale. They include companies that assist us to run our
        website, and provide you services you request such as payment companies,
        or shipping companies.
      </p>{" "}
      <h1>Data Security</h1>{" "}
      <p>
        We ensure that we take all standard precautions in order to prevent any
        loss or misuse of your data. However, no technology of transmission over
        the internet is absolutely secure and therefore cannot assure the
        complete security.
      </p>{" "}
      <h1>Changes to This Policy</h1>{" "}
      <p>
        This Privacy Policy may be amended from time to time. Any changes made
        to the will be reflected on this page with the new effective date
        provided.
      </p>{" "}
      <h1>Contact Us</h1>{" "}
      <p>
        If you have any questions about this Privacy Policy, please contact us
        at: Phone: 03202279315
      </p>
    </div>
  );
}

export default PrivacyPolicy;

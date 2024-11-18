import React from "react";

function CustomerSupport() {
  return (
    <div style={{
       display: "flex",
       justifyContent: "center",
       height: "100vh",
       backgroundColor: "#f8f9fa",
       padding: "50px",
       flexDirection:"column",
    }}>
      <h1>Customer Support</h1>{" "}
      <p>
        Dear valued customer, Navigate your way into our Customer Support
        Center. Here is our contact information in case you have any questions
        or queries to make or face any difficulties. We always ensure that you
        receive help promptly from us since your satisfaction remains our main
        goal.
      </p>{" "}
      <h1>How Can We Help You?</h1> <h2>FAQs</h2>{" "}
      <p>
        Check out our Frequently Asked Questions for quick answers to common
        inquiries about our products and services.
      </p>{" "}
      <h2>Contact Us</h2>{" "}
      <p>
        If you can't find what you're looking for, feel free to reach out! You
        can contact us via:
      </p>{" "}
      <p>Phone: 03202279315</p> <h2>Support Tickets</h2>{" "}
      <p>
        For more complex issues, please submit a support ticket through our
        Ticketing System. We aim to respond within 24 hours.
      </p>{" "}
      <h2>Returns and Exchanges</h2>{" "}
      <p>
        Need to return or exchange an item? Review our Return Policy for
        detailed instructions.
      </p>{" "}
      <h2>Technical Support</h2>{" "}
      <p>
        Experiencing technical difficulties? Visit our Technical Support page
        for troubleshooting tips and resources.
      </p>{" "}
      <h2>Feedback</h2>{" "}
      <p>
        We value your feedback! Let us know how we can improve by filling out
        our Feedback Form.
      </p>{" "}
      <h2>Our Commitment</h2>{" "}
      <p>
        We also hold the core business value of ensuring we offer the best
        customer service. Most of your questions or concerns can be addressed by
        our support team and they are ready to help you. Thank you for choosing
        us!
      </p>
    </div>
  );
}

export default CustomerSupport;

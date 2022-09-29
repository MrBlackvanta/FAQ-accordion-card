import hero from "../images/illustration-woman-online-desktop.svg";

import Faq from "./Faq";
import "./Card.scss";

function Card() {
  return (
    <div className="card">
      <div className="card-hero">
        <img
          src={hero}
          alt="illustration of woman tapping an orange screen"
          className="card-img"
        />
      </div>

      <div className="card-faq">
        <h1 className="card-faq-heading">FAQ</h1>
        <div className="card-faq-container">
          <Faq
            heading="How many team members can I invite?"
            description="You can invite up to 2 ditional users on the Free plan. There is no limit on team members for the Premium plan."
          />
          <Faq
            heading="What is the maximum file upload size?"
            description="No more than 2GB. All files in your account must fit your allotted storage space."
          />
          <Faq
            heading="How do I reset my password?"
            description="Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."
          />
          <Faq
            heading="Can I cancel my subscription?"
            description="Yes! Send us a message and we’ll process your request no questions asked."
          />
          <Faq
            heading="Do you provide additional support?"
            description="Chat and email support is available 24/7. Phone lines are open during normal business hours."
          />
        </div>
      </div>
    </div>
  );
}

export default Card;

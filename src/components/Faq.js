import arrow from "../images/icon-arrow-down.svg";
import "./Faq.scss";

function Faq(props) {
  return (
    <div className="faq">
      <input type="radio" className="btn" name="btn" />
      <div className="faq-header">
        <h2 className="faq-header-heading">{props.heading}</h2>
        <img src={arrow} alt="arrow" className="faq-header-arrow" />
      </div>
      <p className="faq-description">{props.description}</p>
    </div>
  );
}

export default Faq;

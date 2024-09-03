import PropTypes from "prop-types";

const Summary = (props) => {
  let planSelectedPrice = 0;
  if (props.formData.plan === "arcade") {
    planSelectedPrice = 9;
  } else if (props.formData.plan === "advanced") {
    planSelectedPrice = 12;
  } else if (props.formData.plan === "pro") {
    planSelectedPrice = 15;
  }

  const planPrice =
    props.formData.billing === "monthly"
      ? planSelectedPrice
      : planSelectedPrice * 10;

  const osAddonPrice = props.formData.billing === "monthly" ? 1 : 10;
  const lsAddonPrice = props.formData.billing === "monthly" ? 2 : 20;
  const cpAddonPrice = props.formData.billing === "monthly" ? 2 : 20;

  const totalPrice =
    planPrice +
    (props.formData.osAddon ? osAddonPrice : 0) +
    (props.formData.lsAddon ? lsAddonPrice : 0) +
    (props.formData.cpAddon ? cpAddonPrice : 0);

  const toggleBilling = () => {
    props.setFormData((prevFormData) => ({
      ...prevFormData,
      billing: prevFormData.billing === "monthly" ? "yearly" : "monthly",
    }));
  };

  return (
    <div id="Summary-Container">
      <h2 className="TitleForm">Finishing up</h2>
      <p className="DescriptionForm">
        Double-check everything looks OK before confirming.
      </p>
      <div id="summary-general">
        <ul className="summaryList">
          <li className="summaryLine" id="firstSummaryLine">
            <div id="plan-summary-container">
              <p id="plan-summary">
                {props.formData.plan.charAt(0).toUpperCase() +
                  props.formData.plan.slice(1)}{" "}
                (
                {props.formData.billing.charAt(0).toUpperCase() +
                  props.formData.billing.slice(1)}
                )
              </p>
              <button id="change-summary" onClick={toggleBilling}>
                Change
              </button>
            </div>
            <p className="itempricesummary">
              {props.formData.billing === "monthly"
                ? `+$${planSelectedPrice}/mo`
                : `+$${planSelectedPrice * 10}/yr`}
            </p>
          </li>
          {props.formData.osAddon && (
            <li className="summaryLine">
              <p className="addonSummary">Online service</p>
              <p className="priceAddon">
                {props.formData.billing === "monthly" ? "+$1/mo" : "+$10/yr"}
              </p>
            </li>
          )}
          {props.formData.lsAddon && (
            <li className="summaryLine">
              <p className="addonSummary">Larger storage</p>
              <p className="priceAddon">
                {props.formData.billing === "monthly" ? "+$2/mo" : "+$20/yr"}
              </p>
            </li>
          )}
          {props.formData.cpAddon && (
            <li className="summaryLine">
              <p className="addonSummary">Customizable profile</p>
              <p className="priceAddon">
                {props.formData.billing === "monthly" ? "+$2/mo" : "+$20/yr"}
              </p>
            </li>
          )}
        </ul>
      </div>
      <div className="summaryLine" id="price-line">
        <p className="totalSummary">
          Total (
          {props.formData.billing === "monthly" ? "per month" : "per year"})
        </p>
        <p id="price-total">
          +{totalPrice}/{props.formData.billing === "monthly" ? "mo" : "yr"}
        </p>
      </div>
      <div className="backNextContainer">
        <button className="backButton" onClick={props.prevStep}>
          Go Back
        </button>
        <button className="nextButton" onClick={props.nextStep}>
          Confirm
        </button>
      </div>
      <div className="footerBackNextContainer">
        <button className="backButtonF" onClick={props.prevStep}>
          Go Back
        </button>
        <button className="nextButtonF" onClick={props.nextStep}>
          Confirm
        </button>
      </div>
    </div>
  );
};

Summary.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

export default Summary;

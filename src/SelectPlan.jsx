import { useState } from "react";
import PropTypes from "prop-types";

const SelectPlan = ({ formData, setFormData, nextStep, prevStep }) => {
  const [selectedPlan, setSelectedPlan] = useState(formData.plan || "arcade");
  const [billingOption, setBillingOption] = useState(
    formData.billing || "monthly"
  );

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setFormData((prevData) => ({
      ...prevData,
      plan,
    }));
  };

  const handleBillingChange = (e) => {
    const billing = e.target.checked ? "yearly" : "monthly";
    setBillingOption(billing);
    setFormData((prevData) => ({
      ...prevData,
      billing,
    }));
  };

  const handleNextStep = () => {
    if (formData.plan && formData.billing) {
      nextStep();
    }
  };

  const handlePrevStep = () => {
    prevStep();
  };

  const renderPlanButton = (plan, priceMonthly, priceYearly) => (
    <button
      className={`plan-button ${
        selectedPlan === plan ? "plan-button-active" : ""
      }`}
      onClick={() => handleSelectPlan(plan)}
    >
      <img
        className="img-plan-button"
        src={`./assets/images/icon-${plan}.svg`}
        alt={`${plan} icon`}
      />
      <div className="titlePriceDivMobile">
        <span className="title-plan">
          {plan.charAt(0).toUpperCase() + plan.slice(1)}
        </span>
        {billingOption === "monthly" ? (
          <span className="price-plan">{priceMonthly}/mo</span>
        ) : (
          <>
            <span className="price-plan">{priceYearly}/yr</span>
            <span className="twomonthsfree">2 months free</span>
          </>
        )}
      </div>
    </button>
  );

  return (
    <section id="SelectPlan-Container">
      <div id="PlanContainer">
        <h2 className="TitleForm">Select your plan</h2>
        <p className="DescriptionForm" id="DFSP">
          You have the option of monthly or yearly billing.
        </p>

        <div id="plans-container">
          {renderPlanButton("arcade", "$9", "$90")}
          {renderPlanButton("advanced", "$12", "$120")}
          {renderPlanButton("pro", "$15", "$150")}
        </div>

        <div id="billing-option-container">
          <p id="monthlytext">Monthly</p>
          <label className="switch">
            <input
              id="checkbox-billing"
              type="checkbox"
              onChange={handleBillingChange}
              checked={billingOption === "yearly"}
            />
            <span className="slider"></span>
          </label>
          <p id="yearlytext">Yearly</p>
        </div>

        <div className="backNextContainer">
          <button className="backButton" onClick={handlePrevStep}>
            Go Back
          </button>
          <button className="nextButton" onClick={handleNextStep}>
            Next Step
          </button>
        </div>
      </div>
      <div className="footerBackNextContainer">
        <button className="backButtonF" onClick={handlePrevStep}>
          Go Back
        </button>
        <button className="nextButtonF" onClick={handleNextStep}>
          Next Step
        </button>
      </div>
    </section>
  );
};

SelectPlan.propTypes = {
  setFormData: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

export default SelectPlan;

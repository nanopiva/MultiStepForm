import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Addons = ({ formData, setFormData, nextStep, prevStep }) => {
  const [selectedAddons, setSelectedAddons] = useState({
    os: formData.osAddon || false,
    ls: formData.lsAddon || false,
    cp: formData.cpAddon || false,
  });

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      osAddon: selectedAddons.os,
      lsAddon: selectedAddons.ls,
      cpAddon: selectedAddons.cp,
    }));
  }, [selectedAddons, setFormData]);

  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    setSelectedAddons((prev) => ({
      ...prev,
      [id]: checked,
    }));
  };

  const handleNextStep = () => {
    nextStep();
  };

  const handlePrevStep = () => {
    prevStep();
  };

  return (
    <div id="Addons-Container">
      <div id="addons-content">
        <h2 className="TitleForm">Pick add-ons</h2>
        <p className="DescriptionForm">
          Add-ons help enhance your gaming experience.
        </p>
        <fieldset id="addons-buttons-container">
          <div
            className={`checkbox-button ${
              selectedAddons.os ? "addon-selected" : ""
            }`}
          >
            <input
              type="checkbox"
              className="addon-input"
              name="addon-input"
              id="os"
              checked={selectedAddons.os}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="os">
              <div className="addon-info">
                <span className="addon-title">Online service</span>
                <span className="addon-description">
                  Access to multiplayer games
                </span>
              </div>
              <div className="addon-price">
                {formData.billing === "monthly" ? (
                  <p className="addon-price-p">+$1/mo</p>
                ) : (
                  <p className="addon-price-p">+$10/yr</p>
                )}
              </div>
            </label>
          </div>

          <div
            className={`checkbox-button ${
              selectedAddons.ls ? "addon-selected" : ""
            }`}
          >
            <input
              type="checkbox"
              className="addon-input"
              name="addon-input"
              id="ls"
              checked={selectedAddons.ls}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="ls">
              <div className="addon-info">
                <span className="addon-title">Larger storage</span>
                <span className="addon-description">
                  Extra 1TB of cloud save
                </span>
              </div>
              <div className="addon-price">
                {formData.billing === "monthly" ? (
                  <p className="addon-price-p">+$2/mo</p>
                ) : (
                  <p className="addon-price-p">+$20/yr</p>
                )}
              </div>
            </label>
          </div>

          <div
            className={`checkbox-button ${
              selectedAddons.cp ? "addon-selected" : ""
            }`}
          >
            <input
              type="checkbox"
              className="addon-input"
              name="addon-input"
              id="cp"
              checked={selectedAddons.cp}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="cp">
              <div className="addon-info">
                <span className="addon-title">Customizable profile</span>
                <span className="addon-description">
                  Custom theme on your profile
                </span>
              </div>
              <div className="addon-price">
                {formData.billing === "monthly" ? (
                  <p className="addon-price-p">+$2/mo</p>
                ) : (
                  <p className="addon-price-p">+$20/yr</p>
                )}
              </div>
            </label>
          </div>
        </fieldset>
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
    </div>
  );
};

Addons.propTypes = {
  formData: PropTypes.object.isRequired,
  nextStep: PropTypes.func.isRequired,
  setFormData: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

export default Addons;

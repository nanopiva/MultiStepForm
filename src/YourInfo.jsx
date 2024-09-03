import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const YourInfo = (props) => {
  const [warnings, setWarnings] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    props.setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (value.trim() !== "") {
      setWarnings((prevWarnings) => ({
        ...prevWarnings,
        [name]: "",
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (name === "name" && value.trim().length < 2) {
      setWarnings((prevWarnings) => ({
        ...prevWarnings,
        [name]: "Name must be at least 2 characters long",
      }));
    } else if (
      name === "email" &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
    ) {
      setWarnings((prevWarnings) => ({
        ...prevWarnings,
        [name]: "Invalid email address",
      }));
    } else if (name === "phone" && !/^\+?[1-9]\d{1,14}$/.test(value)) {
      setWarnings((prevWarnings) => ({
        ...prevWarnings,
        [name]: "Invalid phone number format",
      }));
    } else if (value.trim() === "") {
      setWarnings((prevWarnings) => ({
        ...prevWarnings,
        [name]: "This field is required",
      }));
    }
  };

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid =
      props.formData.name !== "" &&
      props.formData.email !== "" &&
      props.formData.phone !== "" &&
      !warnings.name &&
      !warnings.email &&
      !warnings.phone;
    setIsFormValid(isValid);
  }, [warnings, props.formData]);

  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleNextStep = () => {
    let hasEmptyFields = false;

    const newWarnings = {};
    if (props.formData.name.trim() === "") {
      newWarnings.name = "This field is required";
      hasEmptyFields = true;
    }
    if (props.formData.email.trim() === "") {
      newWarnings.email = "This field is required";
      hasEmptyFields = true;
    }
    if (props.formData.phone.trim() === "") {
      newWarnings.phone = "This field is required";
      hasEmptyFields = true;
    }

    setWarnings((prevWarnings) => ({
      ...prevWarnings,
      ...newWarnings,
    }));

    if (!isFormValid || hasEmptyFields) {
      setShowErrorMessage(true);

      const firstErrorField = document.querySelector(".inputError");
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" });
        firstErrorField.focus();
      }
    } else {
      setShowErrorMessage(false);
      props.nextStep();
    }
  };
  /* PersonalInfoTitle, PersonalInfoDescription*/
  return (
    <section id="YourInfo-Container">
      <fieldset id="fieldset-yourinfo">
        <h2 className="TitleForm">Personal Info</h2>
        <p className="DescriptionForm">
          Please provide your name, email address and phone number.
        </p>
        <div className="labelPlusWarning">
          <label htmlFor="nameInput" className="labelNames">
            Name
          </label>
          {warnings.name && (
            <p
              className="warningMessage"
              style={{ color: "hsl(354, 84%, 57%)" }}
            >
              {warnings.name}
            </p>
          )}
        </div>
        <input
          className={`inputText ${warnings.name ? "inputError" : ""}`}
          type="text"
          id="nameInput"
          name="name"
          value={props.formData.name}
          placeholder="e.g. Stephen King"
          onChange={handleChange}
          onBlur={handleBlur}
          aria-describedby={warnings.name ? "nameError" : null}
          autoComplete="off"
          required
        />
        <div className="labelPlusWarning">
          <label htmlFor="emailInput" className="labelNames">
            Email Address
          </label>
          {warnings.email && (
            <p
              className="warningMessage"
              style={{ color: "hsl(354, 84%, 57%)" }}
            >
              {warnings.email}
            </p>
          )}
        </div>
        <input
          className={`inputText ${warnings.email ? "inputError" : ""}`}
          type="email"
          id="emailInput"
          name="email"
          value={props.formData.email}
          placeholder="e.g. stephenking@lorem.com"
          onChange={handleChange}
          onBlur={handleBlur}
          aria-describedby={warnings.name ? "nameError" : null}
          autoComplete="off"
          required
        />
        <div className="labelPlusWarning">
          <label htmlFor="phoneInput" className="labelNames">
            Phone Number
          </label>
          {warnings.phone && (
            <p
              className="warningMessage"
              style={{ color: "hsl(354, 84%, 57%)" }}
            >
              {warnings.phone}
            </p>
          )}
        </div>
        <input
          className={`inputText ${warnings.phone ? "inputError" : ""}`}
          type="tel"
          id="phoneInput"
          name="phone"
          value={props.formData.phone}
          placeholder="e.g. +1 234 567 890"
          onChange={handleChange}
          onBlur={handleBlur}
          aria-describedby={warnings.name ? "nameError" : null}
          autoComplete="off"
          required
        />

        {showErrorMessage && (
          <p
            className="globalErrorMessage"
            style={{ color: "hsl(354, 84%, 57%)" }}
          >
            Please fix the errors above before proceeding.
          </p>
        )}

        <div className="backNextContainer">
          {props.step > 1 && <button className="backButton">Go Back</button>}
          <button className="nextButton" onClick={handleNextStep}>
            Next Step
          </button>
        </div>
      </fieldset>

      <footer className="footerBackNextContainer">
        {props.step > 1 && <button className="backButtonF">Go Back</button>}
        <button className="nextButtonF" id="nButtonYI" onClick={handleNextStep}>
          Next Step
        </button>
      </footer>
    </section>
  );
};

//PropTypes validations
YourInfo.propTypes = {
  setFormData: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  step: PropTypes.number.isRequired,
  nextStep: PropTypes.func.isRequired,
};

export default YourInfo;

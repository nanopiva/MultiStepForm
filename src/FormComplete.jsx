import YourInfo from "./YourInfo";
import SelectPlan from "./SelectPlan";
import Addons from "./Addons";
import Summary from "./Summary";
import Confirm from "./Confirm";
import { useState } from "react";
import PropTypes from "prop-types";

const FormComplete = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "arcade",
    billing: "monthly",
    osAddon: false,
    lsAddon: false,
    cpAddon: false,
  });

  const nextStep = () => props.setStep(props.step + 1);
  const prevStep = () => props.setStep(props.step - 1);

  const renderStep = () => {
    switch (props.step) {
      case 1:
        return (
          <YourInfo
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            step={props.step}
          />
        );
      case 2:
        return (
          <SelectPlan
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 3:
        return (
          <Addons
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 4:
        return (
          <Summary
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 5:
        return <Confirm />;
      default:
        return null;
    }
  };

  return <section className="forms-container">{renderStep()}</section>;
};
FormComplete.propTypes = {
  setStep: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
};
export default FormComplete;

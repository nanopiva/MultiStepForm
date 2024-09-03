import PropTypes from "prop-types";

const CurrentStep = ({ step }) => {
  return (
    <aside className="current-step-container">
      <div id="back-img-container-cs">
        <ol id="ol-container">
          <li className="steps-container">
            <div className="step1active">
              <button
                className={`stepVisualButton ${step === 1 ? "activeStep" : ""}`}
              >
                1
              </button>
            </div>
            <div className="stepandtitles">
              <span className="stepNumber">STEP 1</span>
              <span className="stepTitle">YOUR INFO</span>
            </div>
          </li>
          <li className="steps-container">
            <div className="step2active">
              <button
                className={`stepVisualButton ${step === 2 ? "activeStep" : ""}`}
              >
                2
              </button>
            </div>
            <div className="stepandtitles">
              <span className="stepNumber">STEP 2</span>
              <span className="stepTitle">SELECT PLAN</span>
            </div>
          </li>
          <li className="steps-container">
            <div className="step3active">
              <button
                className={`stepVisualButton ${step === 3 ? "activeStep" : ""}`}
              >
                3
              </button>
            </div>
            <div className="stepandtitles">
              <span className="stepNumber">STEP 3</span>
              <span className="stepTitle">ADD-ONS</span>
            </div>
          </li>
          <li className="steps-container">
            <div className="step4active">
              <button
                className={`stepVisualButton ${
                  step === 4 || step === 5 ? "activeStep" : ""
                }`}
              >
                4
              </button>
            </div>
            <div className="stepandtitles">
              <span className="stepNumber">STEP 4</span>
              <span className="stepTitle">SUMMARY</span>
            </div>
          </li>
        </ol>
      </div>
    </aside>
  );
};

CurrentStep.propTypes = {
  step: PropTypes.number.isRequired,
};
export default CurrentStep;

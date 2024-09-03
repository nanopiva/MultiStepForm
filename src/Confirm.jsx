const Confirm = () => {
  return (
    <section id="ConfirmContainer" aria-label="Confirmation Message">
      <img
        src="./assets/images/icon-thank-you.svg"
        id="imgConfirm"
        alt="Thank you icon"
      />
      <h1 className="TitleForm" id="titleConfirm">
        Thank you!
      </h1>
      <p className="DescriptionForm" id="descriptionConfirm">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </section>
  );
};

export default Confirm;

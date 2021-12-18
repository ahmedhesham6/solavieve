import Button from "../common/Button";

function BlockModal({ onClick }) {
  return (
    <div className="block-modal">
      <div className="block-modal__content">
        <img src="./assets/mobile.svg" />
        <p className="block-modal__text">
          Thank you for your message! <br /> We will be in contact soon.
        </p>
        <Button text="close" onClick={onClick} />
      </div>
    </div>
  );
}

export default BlockModal;

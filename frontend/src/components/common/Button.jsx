function Button({ text, onClick }) {
  return (
    <button className="btn" onClick={onClick}>
      <p className="btn__text">{text}</p>
    </button>
  );
}

export default Button;

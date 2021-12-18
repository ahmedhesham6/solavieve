function WidgetQuestion({ value, setComment }) {
  const handleChange = (e) => {
    setComment(e.target.value);
  };
  return (
    <section className="widget-question">
      <h2 className="widget-question__title">
        Please leave a comment about your experience below:
      </h2>
      <textarea
        className="widget-question__input"
        placeholder="Type your comment here..."
        value={value}
        onChange={handleChange}
      />
    </section>
  );
}

export default WidgetQuestion;

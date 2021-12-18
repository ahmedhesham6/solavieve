import Button from "../common/Button";
import WidgetQuestion from "../widgets/WidgetQuestion";
import WidgetRate from "../widgets/WidgetRate";
import { useState } from "react";
import BlockModal from "./BlockModal";
import { postFeedback } from "../../api/feedback";

const requestBody = (ratings, comment) => {
  let result = { comment };
  ratings.forEach((element) => {
    result[element.key] = element.rate;
  });
  return result;
};

function BlockFeedback() {
  const [showModal, setShowModal] = useState(false);
  const [ratings, setRatings] = useState([
    {
      key: "experience",
      title: "Rate your experience from 0 to 5 stars:",
      rate: 0,
    },
    {
      key: "paymentProcess",
      title: "How satisfied are you with the payment process?",
      rate: 0,
    },
    {
      key: "customerService",
      title: "How satisfied are you with our customer service?",
      rate: 0,
    },
  ]);
  const [comment, setComment] = useState("");
  const updateRatings = (index, rate) => {
    ratings[index].rate = rate;
    setRatings(ratings);
  };
  const submit = () => {
    postFeedback(requestBody(ratings, comment)).then(() => {
      setShowModal(true);
    });
  };
  return (
    <div className="block-feedback">
      <div className="block-feedback__container">
        <h1 className="block-feedback__title">Leave a Feedback!</h1>
        {ratings.map((rating, index) => (
          <WidgetRate
            rating={{ ...rating, id: index }}
            key={index}
            setParentRate={updateRatings}
          />
        ))}
        <WidgetQuestion value={comment} setComment={setComment} />
        <Button text="submit feedback" onClick={submit} />
        {showModal && <BlockModal onClick={() => setShowModal(false)} />}
      </div>
    </div>
  );
}

export default BlockFeedback;

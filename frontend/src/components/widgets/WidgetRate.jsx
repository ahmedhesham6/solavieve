import { ReactComponent as Star } from "./star.svg";
import { useState } from "react";
function WidgetRate({ rating, setParentRate }) {
  const [rate, setRate] = useState(0);
  const [hover, setHover] = useState(0);

  const changeRate = (newRate) => {
    setRate(newRate);
    setParentRate(rating.id, newRate);
  };

  return (
    <div className="widget-rate">
      <h2 className="widget-rate__title">{rating.title}</h2>
      <section>
        <div className="widget-rate__stars">
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <Star
                className={
                  "widget-rate__star " +
                  (index <= (hover || rate)
                    ? "widget-rate__star-on"
                    : "widget-rate__star-off")
                }
                onClick={() => changeRate(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rate)}
                key={index}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default WidgetRate;

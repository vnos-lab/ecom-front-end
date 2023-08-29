import * as React from "react";
import Styles from "../CardProduct.module.css";

export interface viewStartFnProps {
  props?: Array<{
    data: string;
  }>;
}

export default function viewStartFn(props: viewStartFnProps) {
  const { data } = props;
  let numStars = Number(data);
  let numRepeats = numStars <= 5 ? numStars : 5;

  let extraStars = 5 - numRepeats;

  return (
    <div className={Styles.CardProduct_BoxReviews}>
      {[...Array(numRepeats)].map((_, index) => {
        return (
          <img
            key={`star-${index}`}
            src="images/start.svg"
            alt={`Star ${index + 1}`}
          />
        );
      })}
      {[...Array(extraStars)].map((_, index) => {
        return (
          <img
            key={`extra-star-${index}`}
            src="images/start_silver.svg"
            alt={`Extra Star ${index + 1}`}
          />
        );
      })}
      {[...Array(numStars > 5 ? numStars - 5 : 0)].map((_, index) => {
        return <p key={`text-${index}`}>Additional text</p>;
      })}
    </div>
  );
}

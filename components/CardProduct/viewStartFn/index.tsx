/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-array-index-key */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/naming-convention */
import * as React from "react";

import Styles from "../CardProduct.module.css";

export interface viewStartFnProps {
  data: string;
}

export default function viewStartFn(props: viewStartFnProps) {
  console.log(props)
  const { data } = props;
  const numStars = Number(data);
  const numRepeats = numStars <= 5 ? numStars : 5;

  const extraStars = 5 - numRepeats;

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
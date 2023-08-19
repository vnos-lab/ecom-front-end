import React, { memo } from "react";
import cx from "classnames";

import emptyFn from "@/constants/emptyFn";

import styles from "./ExampleComponent.module.css";

interface ExampleComponentProps {
  onClick?: () => void;
  className?: string;
}

/**
 * @description This component is used to demo how to create a component
 * @param props onClick: function to handle click event
 * @param props className: class name of component
 * @returns Component
 */

function ExampleComponent(props: ExampleComponentProps) {
  const { onClick, className } = props;

  return (
    <div className={cx(styles.Component, className)}>
      <p> Example Component</p>

      <button type="button" onClick={onClick}>
        Click me
      </button>
    </div>
  );
}

ExampleComponent.defaultProps = {
  className: "",
  onClick: emptyFn,
};

export default memo(ExampleComponent);

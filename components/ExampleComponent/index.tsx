import React, { memo } from "react";
import cx from "classnames";

import emptyFn from "@/constants/emptyFn";

import styles from "./ExampleComponent.module.css";

interface ExampleComponentProps {
  label: string;
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
  const { label, onClick = emptyFn, className } = props;

  return (
    <div className={cx(styles.Component, className)}>
      <p>{label}</p>

      <button type="button" onClick={onClick}>
        Click me
      </button>
    </div>
  );
}

export default memo(ExampleComponent);

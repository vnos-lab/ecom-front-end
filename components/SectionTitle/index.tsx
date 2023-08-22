import * as React from 'react';
import Styles from "./Section.module.css";

export interface SectionTitleProps {
    dataSection: Object;
    title: String
}

export default function SectionTitle (props: SectionTitleProps) {
  return (
    <div>
      <section className={Styles.Section_boxTitle}>
        <div className={Styles.Section_Space}></div>
        <p className={Styles.Section_textTitle}>{props.dataSection.title}</p>
      </section>
      <section className={Styles.Section_category}>
        <p className={Styles.Section_CategoryTitle}>{props.dataSection.titleCategory}</p>
      </section>
    </div>
  );
}

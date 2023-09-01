/* eslint-disable react/destructuring-assignment */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import Styles from "./Section.module.css";

export interface SectionTitleProps {
  dataSection: {
    title: string;
    titleCategory: string;
  }
}

export default function SectionTitle (props: SectionTitleProps) {
  return (
    <div>
      <section className={Styles.Section_boxTitle}>
        <div className={Styles.Section_Space} />
        <p className={Styles.Section_textTitle}>{props.dataSection.title}</p>
      </section>
      <section className={Styles.Section_category}>
        <p className={Styles.Section_CategoryTitle}>{props.dataSection.titleCategory}</p>
      </section>
    </div>
  );
}

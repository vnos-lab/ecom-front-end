/* eslint-disable simple-import-sort/imports */
/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import SectionTitle from '@/components/SectionTitle';

export interface IAppProps {

}

export default function FlashSales (props: IAppProps) {
  const dataSection = {
    title: "Today’s",
    titleCategory: "Flash Sales"
  }
  return (
    <div className="flex h-[103px]">
      <SectionTitle dataSection={dataSection}/>
    </div>
  );
}

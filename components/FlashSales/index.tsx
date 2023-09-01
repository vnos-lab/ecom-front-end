/* eslint-disable simple-import-sort/imports */
/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import SectionTitle from '@/components/SectionTitle';
import Countdown from './Countdown';

export interface IAppProps {

}

export default function FlashSales (props: IAppProps) {
  const dataSection = {
    title: "Today’s",
    titleCategory: "Flash Sales"
  }
  const targetTimestamp = Number("1696188265");
  return (
    <div>
      <div>
        <Countdown targetTimestamp={targetTimestamp}/>
      </div>
      <div className="flex h-[103px]">
        <SectionTitle dataSection={dataSection}/>
      </div>
    </div>
  );
}

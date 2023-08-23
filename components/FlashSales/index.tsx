import React from 'react';
import Countdown from '@/components/FlashSales/Countdown';
import SectionTitle from '../SectionTitle';

const App: React.FC = () => {
  const targetTimestamp = 1698245460; // Thay thế bằng timestamp mong muốn
  const dataSection = {
    title: "Today’s",
    titleCategory: "Flash Sales"
  }
  return (
    <div className="flex">
      <SectionTitle dataSection={dataSection}/>
      <Countdown targetTimestamp={targetTimestamp} />
    </div>
  );
};

export default App;
import React from 'react';
import Countdown from '@/components/FlashSales/Countdown';
import SectionTitle from '../SectionTitle';
import Styles from "./FlashSales.module.css";

const App: React.FC = () => {
  const targetTimestamp = 1698245460; // Thay thế bằng timestamp mong muốn
  const dataSection = {
    title: "Categories",
    titleCategory: "Browse By Category"
  }
  return (
    <div className={Styles.FlashSales_Style}>
      <SectionTitle dataSection={dataSection}/>
      <Countdown targetTimestamp={targetTimestamp} />
    </div>
  );
};

export default App;
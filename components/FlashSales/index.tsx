/* eslint-disable react/function-component-definition */
import React from "react";

import Countdown from "@/components/FlashSales/Countdown";

const App: React.FC = () => {
  const targetTimestamp = 1698245460; // Thay thế bằng timestamp mong muốn

  return (
    <div>
      <h1>Đếm ngược thời gian</h1>
      <Countdown targetTimestamp={targetTimestamp} />
    </div>
  );
};

export default App;

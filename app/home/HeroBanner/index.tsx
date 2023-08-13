import React, { memo } from "react";

function HeroBanner() {
  return (
    <div className="flex">
      <div className="mr-2">category ở đây</div>

      <div>slider ở đây</div>
    </div>
  );
}

export default memo(HeroBanner);

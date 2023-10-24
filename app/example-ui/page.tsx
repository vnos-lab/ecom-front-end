import React from "react";

import AppButton from "@/components/App/AppButton";
import ProductCard from "@/components/ProductCard";

function ExampleUI() {
  return (
    <div className="container">
      <div className="my-5">
        <AppButton>App Button</AppButton>
      </div>

      <div className="my-5 max-w-[270px]">
        <ProductCard />
      </div>
    </div>
  );
}

export default ExampleUI;

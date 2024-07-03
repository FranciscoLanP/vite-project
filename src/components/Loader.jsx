import React from "react";
import { bouncy } from "ldrs";

export const Loader = () => {
  return (
    <div className="container-loader">
      <l-bouncy size="50" speed="1" color="black"></l-bouncy>
    </div>
  );
};

bouncy.register();
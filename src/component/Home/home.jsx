/** @format */

import React from "react";
import { useLoaderData } from "react-router-dom";

const home = () => {
  const tshirts = useLoaderData();

  return (
    <div>
      <div>This is home: {tshirts.length}</div>
    </div>
  );
};

export default home;

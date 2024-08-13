import React from "react";
import StatusBody from "./StatusBody";
import CardBody from "./CardBody";

export default function Body() {
  return (
    <div className="main-body">
      <StatusBody />
      <CardBody />
    </div>
  );
}

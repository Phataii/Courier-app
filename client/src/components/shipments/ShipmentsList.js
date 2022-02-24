import React from "react";

function ShipmentsList({ shipments }) {
  function renderShipments() {
    return shipments.map((shipment, i) => {
      return <li key={i}>{shipment.location}</li>;
    });
  }

  return (
    <div>
      <ul>{renderShipments()}</ul>
    </div>
  );
}

export default ShipmentsList;

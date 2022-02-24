import axios from "axios";
import React, { useEffect, useState } from "react";
import ShipmentForm from "./ShipmentsForm";
import ShipmentList from "./ShipmentsList";

function Shipment() {
  const [shipments, setShipments] = useState([]);

  async function getShipments() {
     const shipmentsRes = await axios.get("http://localhost:5000/shipment/");
    // const customersRes = await axios.get(
    //   "https://mern-auth-template-tutorial.herokuapp.com/customer/"
    // );
    setShipments(shipmentsRes.data);
  }

  useEffect(() => {
    getShipments();
  }, []);

  return (
    <div>
      <ShipmentForm getShipments={getShipments} />
      <ShipmentList shipments={shipments} />
    </div>
  );
}

export default Shipment;

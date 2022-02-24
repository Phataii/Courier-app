import axios from "axios";
import React, { useState } from "react";

function ShipmentsForm({ getShipments }) {
  const [itemName, setItemName] = useState("");
  const [trackingId, setTrackingId] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [receiver, setReceiver] = useState("");
  const [sender, setSender] = useState("");
  const [status, setStatus] = useState("");

  async function saveShipment(e) {
    e.preventDefault();

    try {
      const shipmentData = {
        itemName,
        trackingId,
        location,
        time,
        date,
        sender,
        receiver,
        status,
      };
      await axios.post("http://localhost:5000/shipment/", shipmentData);
      
      getShipments();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <form onSubmit={saveShipment} className="mt-10 p-40">
        <input
          className="w-2/5 h-10 rounded-md p-2 text-md text-gray-600 border-2 border-gray-700"
          type="text"
          placeholder="Item name"
          onChange={(e) => {
            setItemName(e.target.value);
          }}
          value={itemName}
        />
        <input
          className="w-2/5 h-10 rounded-md p-2 text-md text-gray-600 border-2 border-gray-700"
          type="text"
          placeholder="Location"
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          value={location}
        />
        <input
          className="w-2/5 h-10 rounded-md p-2 text-md text-gray-600 border-2 border-gray-700"
          type="text"
          placeholder="Time"
          onChange={(e) => {
            setTime(e.target.value);
          }}
          value={time}
        />
        <input
          className="w-2/5 h-10 rounded-md p-2 text-md text-gray-600 border-2 border-gray-700"
          type="text"
          placeholder="Date"
          onChange={(e) => {
            setDate(e.target.value);
          }}
          value={date}
        />
        <input
          className="w-2/5 h-10 rounded-md p-2 text-md text-gray-600 border-2 border-gray-700"
          type="text"
          placeholder="Receiver"
          onChange={(e) => {
            setReceiver(e.target.value);
          }}
          value={receiver}
        />
        <input
          className="w-2/5 h-10 rounded-md p-2 text-md text-gray-600 border-2 border-gray-700"
          type="text"
          placeholder="Sender"
          onChange={(e) => {
            setSender(e.target.value);
          }}
          value={sender}
        />
        <input
          className="w-2/5 h-10 rounded-md p-2 text-md text-gray-600 border-2 border-gray-700"
          type="text"
          placeholder="Status"
          onChange={(e) => {
            setStatus(e.target.value);
          }}
          value={status}
        />
        <button type="submit" className="bg-orange-400 w-2/5">
          Create Shipment
        </button>
      </form>
    </div>
  );
}

export default ShipmentsForm;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Vessels from "./vessels";
import Certificates from "./certificates";


export default function DefaultShow() {
  const [data, setData] = useState([]);
  const [shipIndex, setShipIndex] = useState(null);

  useEffect(async () => {
    const result = await axios(
      "https://extranet-api.skuld.com/vesselsearch/?query=tiger"
    );
    console.log(result.data);
    setData(result.data);
  }, []);

  const shipIndexFunc = (index) => {
    console.log(index);
    setShipIndex(index);
  };

  if (data.length > 0 && shipIndex == null) {
    return <Vessels shipData={data} setIndexFunc={shipIndexFunc} />;
  } else if (shipIndex != null) {
    return <Certificates shipData={data} newShipIndex = {shipIndex} setIndexFunc={shipIndexFunc}/>;
  } else {
    return null;
  }
}

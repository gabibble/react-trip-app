import React, { useState, useEffect } from "react";
import { serverCalls } from "../api";

export const useGetData = () => {
  const [tripData, setData] = useState<any>([]);

  async function handleDataFetch() {
    const result = await serverCalls.get();
    setData(result);
  }

  // Introducing the useEffect Hook to add our data to react State
  useEffect(() => {
    handleDataFetch();
  }, []);

  return { tripData, getData: handleDataFetch };
};


export const useGetLastTrip = () => {
  const [lastTrip, setLastTrip] = useState<any>([]);

  async function handleDataFetch() {
    const result = await serverCalls.get();
    setLastTrip(result.slice(-1)[0]);
  }

  useEffect(() => {
    handleDataFetch();
  }, []);

  return { lastTrip, setLastTrip: handleDataFetch };
};

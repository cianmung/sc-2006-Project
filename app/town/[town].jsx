import WeatherTownData from "@/components/WeatherTownData";
import { useLocalSearchParams } from "expo-router";
import { useState, useEffect } from "react";
import { fetchData } from "@/constants/ApiCall";

export default function Index() {
  const now = new Date();

  const { town } = useLocalSearchParams();
  const [townData, setTownData] = useState([]);
  const [timeStamp, setTimeStamp] = useState(now.toString());

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchData("forecast/areaweather?areaName=" + town);
        const areaData = Object.entries(data).map(([key, value]) => ({
          [key]: value,
        }));
        setTownData(areaData);
      } catch (err) {
        console.error(err);
      }
    };
    loadData();
  }, [town]);

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setTimeStamp(date.toString());
    }, 5 * 60 * 1000); // run every 5 minutes
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <WeatherTownData data={townData} timeStamp={timeStamp} />;
}

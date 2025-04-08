import WeatherData from "@/components/WeatherData";

import { useEffect, useState } from "react";
import { fetchData } from "@/constants/ApiCall";

export default function Index() {
  const date = new Date();
  const [weatherData, setWeatherData] = useState({});
  const [timeStamp, setTimeStamp] = useState(date.toString());
  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchData("forecast/weather");
        setWeatherData(data.data);
      } catch (err) {
        console.error(err);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setTimeStamp(date.toString());
    }, 5 * 60 * 1000); // run every 5 minutes
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <WeatherData data={weatherData} timeStamp={timeStamp} />;
}

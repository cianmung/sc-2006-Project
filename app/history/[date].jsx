import WeatherData from "@/components/WeatherData";
import { useLocalSearchParams } from "expo-router";
import { useState, useEffect } from "react";
import { fetchData } from "@/constants/ApiCall";
import { trimTimezone } from "@/constants/Utils";

export default function Index() {
  const now = new Date();

  const { date } = useLocalSearchParams();
  const [weatherData, setWeatherData] = useState({});
  const [timeStamp, setTimeStamp] = useState(now.toString());

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchData(
          "forecast/weather?date=" + trimTimezone(date)
        );
        setWeatherData(data.data);
      } catch (err) {
        console.error(err);
      }
    };
    loadData();
  }, [date, timeStamp]);

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

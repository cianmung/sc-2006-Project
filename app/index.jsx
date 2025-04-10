import WeatherData from "@/components/WeatherData";

import { useEffect, useState } from "react";
import { fetchData } from "@/constants/ApiCall";
import Page404 from "@/components/Page404";
import Loading from "@/components/Loading";

export default function Index() {
  const date = new Date();
  const [weatherData, setWeatherData] = useState({});
  const [timeStamp, setTimeStamp] = useState(date.toString());
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchData("forecast/weather");
        setWeatherData(data.data);
      } catch (err) {
        setIsError(true);
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

  if (!isError) {
    if (weatherData?.records) {
      return <WeatherData data={weatherData} timeStamp={timeStamp} />;
    } else {
      return <Loading />;
    }
  } else {
    return <Page404 />;
  }
}

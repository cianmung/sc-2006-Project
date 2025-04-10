import { Image } from "react-native";

import Windy from "@/assets/images/weather-conditions/wd.png";
import Foggy from "@/assets/images/weather-conditions/fg.png";
import Hazy from "@/assets/images/weather-conditions/hz.png";
import Fair from "@/assets/images/weather-conditions/fa.png";
import FairNight from "@/assets/images/weather-conditions/fn.png";
import FairWarm from "@/assets/images/weather-conditions/fw.png";
import PartialCloudy from "@/assets/images/weather-conditions/pc.png";
import PartialCloudyNight from "@/assets/images/weather-conditions/pn.png";
import Cloudy from "@/assets/images/weather-conditions/cl.png";
import LightRain from "@/assets/images/weather-conditions/lr.png";
import ModerateRain from "@/assets/images/weather-conditions/mr.png";
import HeavyRain from "@/assets/images/weather-conditions/hr.png";
import PassingShowers from "@/assets/images/weather-conditions/ps.png";
import LightShowers from "@/assets/images/weather-conditions/ls.png";
import Showers from "@/assets/images/weather-conditions/sh.png";
import HeavyShowers from "@/assets/images/weather-conditions/hs.png";
import ThunderingShowers from "@/assets/images/weather-conditions/ht.png";
import ThunderingShowersGusty from "@/assets/images/weather-conditions/hg.png";

import { styles } from "@/constants/Styles";

export default function WeatherIcon({ name, brief }) {
  let icon = "";
  if (name == "Fair") {
    icon = Fair;
  }
  if (name == "Fair (Day)") {
    icon = Fair;
  }
  if (name == "Fair (Night)") {
    icon = FairNight;
  }
  if (name == "Fair and Warm") {
    icon = FairWarm;
  }
  if (name == "Partly Cloudy") {
    icon = PartialCloudy;
  }
  if (name == "Partly Cloudy (Day)") {
    icon = PartialCloudy;
  }
  if (name == "Partly Cloudy (Night)") {
    icon = PartialCloudyNight;
  }
  if (name == "Cloudy") {
    icon = Cloudy;
  }
  if (name == "Hazy") {
    icon = Hazy;
  }
  if (name == "Slightly Hazy") {
    icon = Hazy;
  }
  if (name == "Windy") {
    icon = Windy;
  }
  if (name == "Mist") {
    icon = Foggy;
  }
  if (name == "Fog") {
    icon = Foggy;
  }
  if (name == "Light Rain") {
    icon = LightRain;
  }
  if (name == "Moderate Rain") {
    icon = ModerateRain;
  }
  if (name == "Heavy Rain") {
    icon = HeavyRain;
  }
  if (name == "Passing Showers") {
    icon = PassingShowers;
  }
  if (name == "Light Showers") {
    icon = LightShowers;
  }
  if (name == "Showers") {
    icon = Showers;
  }
  if (name == "Heavy Showers") {
    icon = HeavyShowers;
  }
  if (name == "Thundery Showers") {
    icon = ThunderingShowers;
  }
  if (name == "Heavy Thundery Showers") {
    icon = ThunderingShowers;
  }
  if (name == "Heavy Thundery Showers with Gusty Winds") {
    icon = ThunderingShowersGusty;
  }

  return (
    <Image
      source={icon}
      style={brief ? styles.eachTownIcon : styles.currentWeatherImage}
    />
  );
}

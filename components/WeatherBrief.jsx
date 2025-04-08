import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import { styles } from "@/constants/Styles";
import WeatherIcon from "./WeatherIcon";

export default function WeatherBrief({ data, brief }) {
  return (
    <Link href={"/town/" + data.area.trim()} asChild>
      <Pressable>
        <View style={styles.eachTownContainer}>
          <View>
            <Text style={styles.eachTownText}>{data.area}</Text>
            <Text style={styles.eachTownWeatherText}>
              {data.forecast.trim()}
            </Text>
          </View>
          <WeatherIcon name={data.forecast.trim()} brief={brief} />
        </View>
      </Pressable>
    </Link>
  );
}

import { ImageBackground, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import backgroundImage from "@/assets/images/background-image.png";
import { styles } from "@/constants/Styles";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import WeatherIcon from "./WeatherIcon";
import {
  formatDate,
  getTemp,
  getCurrentHourValue,
  getUVLvl,
  windDirectionFullForm,
  get12HourFormat,
  get12HourMinutesFormat,
} from "@/constants/Utils";

export default function WeatherData({ data, timeStamp }) {
  let weatherData = {};
  let uvData = {};

  if (data?.records) {
    weatherData = data.records[0];
    uvData = weatherData.general.uv.data.records[0].index;

    return (
      <View style={styles.pageContainer}>
        <ImageBackground
          source={backgroundImage}
          resizeMethod="cover"
          style={styles.backgroundImage}
        >
          <ScrollView>
            <SafeAreaView>
              <View style={styles.container}>
                <Text style={styles.locationText}>Singapore</Text>
                <Text style={styles.tempText}>
                  {getTemp(
                    weatherData.general.temperature.low,
                    weatherData.general.temperature.high
                  )}
                  &deg;
                </Text>
                <Text style={styles.dateText}>
                  {formatDate(weatherData.date)}
                </Text>
                <Text style={styles.updateText}>
                  Last Update: {get12HourMinutesFormat(timeStamp)}
                </Text>
                <View style={styles.coordinateContainer}>
                  <Text style={styles.coordinateText}>
                    Low: {weatherData.general.temperature.low}&deg;
                  </Text>
                  <Text style={styles.coordinateText}>
                    High: {weatherData.general.temperature.high}&deg;
                  </Text>
                </View>
                <Text style={styles.periodText}>
                  {weatherData.general.validPeriod.text}
                </Text>
                <View style={styles.borderedContainer}>
                  <View style={styles.windContainer}>
                    <View style={styles.fadedBackgroundContainerFullWidth}>
                      <View style={styles.iconTextOneLineContainer}>
                        <FontAwesome5 name="cloud" size={20} color="white" />
                        <Text style={styles.iconTextOneLineText}>
                          WEATHER FORECAST
                        </Text>
                      </View>
                      <View style={styles.windInfoContainer}>
                        <View style={styles.windInfoWrapper}>
                          <WeatherIcon
                            name={weatherData.general.forecast.text.trim()}
                          />
                        </View>
                        <View style={styles.windInfoWrapper}>
                          <Text style={styles.currentWeatherConText}>
                            {weatherData.general.forecast.text}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.borderedContainer}>
                  <View style={styles.windContainer}>
                    <View style={styles.fadedBackgroundContainerFullWidth}>
                      <View style={styles.iconTextOneLineContainer}>
                        <FontAwesome5 name="wind" size={20} color="white" />
                        <Text style={styles.iconTextOneLineText}>WIND</Text>
                      </View>
                      <View style={styles.windInfoContainer}>
                        <View style={styles.windInfoWrapper}>
                          <Text style={styles.windText}>Speed:</Text>
                          <Text style={styles.windConText}>
                            {weatherData.general.wind.speed.low} -{" "}
                            {weatherData.general.wind.speed.high}
                          </Text>
                          <Text style={styles.windConUnit}>km/h</Text>
                        </View>
                        <View style={styles.windInfoWrapper}>
                          <Text style={styles.windText}>Direction:</Text>
                          <Text style={styles.windConText}>
                            {weatherData.general.wind.direction.trim() ==
                            "VARIABLE"
                              ? "N.A"
                              : weatherData.general.wind.direction.trim()}
                          </Text>
                          <Text style={styles.windConUnit}>
                            {windDirectionFullForm(
                              weatherData.general.wind.direction.trim()
                            )}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.borderedContainer}>
                  <View style={styles.windContainer}>
                    <View style={styles.fadedBackgroundContainer}>
                      <View style={styles.iconTextOneLineContainer}>
                        <MaterialIcons name="sunny" size={20} color="white" />
                        <Text style={styles.iconTextOneLineText}>UV INDEX</Text>
                      </View>
                      {uvData.slice(0, 3).map((each, index) => (
                        <Text style={styles.uvIndexText} key={index}>
                          {get12HourFormat(each.hour)} :
                          {" " +
                            each.value +
                            " (" +
                            getUVLvl(Number(getCurrentHourValue(uvData))) +
                            ")"}
                        </Text>
                      ))}
                    </View>
                    <View style={styles.fadedBackgroundContainer}>
                      <View style={styles.iconTextOneLineContainer}>
                        <Entypo name="air" size={20} color="white" />
                        <Text style={styles.iconTextOneLineText}>HUMIDITY</Text>
                      </View>
                      <Text style={styles.humidNum}>
                        Low: {weatherData.general.relativeHumidity.low}%
                      </Text>
                      <Text style={styles.humidNum}>
                        High: {weatherData.general.relativeHumidity.high}%
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </SafeAreaView>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

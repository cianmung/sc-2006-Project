import { ImageBackground, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import backgroundImage from "@/assets/images/background-image.png";
import { styles } from "@/constants/Styles";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import WeatherIcon from "./WeatherIcon";
import { getTodayDate } from "@/constants/Utils";

import {
  formatDate,
  getTemp,
  windDirectionFullForm,
  get12HourMinutesFormat,
} from "@/constants/Utils";

export default function WeatherTownData({ data, timeStamp }) {
  if (data.length != 0) {
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
                <Text style={styles.locationText}>{data[0].areaName.name}</Text>
                <Text style={styles.tempText}>
                  {getTemp(data[1].temperature.low, data[1].temperature.high)}
                  &deg;
                </Text>
                <Text style={styles.dateText}>
                  {formatDate(getTodayDate())}
                </Text>
                <Text style={styles.updateText}>
                  Last Update: {get12HourMinutesFormat(timeStamp)}
                </Text>
                <View style={styles.coordinateContainer}>
                  <Text style={styles.coordinateText}>
                    High: {data[1].temperature.low}&deg;
                  </Text>
                  <Text style={styles.coordinateText}>
                    Low: {data[1].temperature.high}&deg;
                  </Text>
                </View>
                <View style={styles.borderedContainer}>
                  <View style={styles.currentWeatherContainer}>
                    <WeatherIcon name={data[3].forecast.text.trim()} />
                    <View style={styles.currentWeatherTextContainer}>
                      <Text style={styles.currentWeatherText}>
                        Weather Forecast:
                      </Text>
                      <Text style={styles.currentWeatherConText}>
                        {data[3].forecast.text}
                      </Text>
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
                          <Text style={styles.windText}>Wind Speed:</Text>
                          <Text style={styles.windConText}>
                            {data[2].wind.speed.low} - {data[2].wind.speed.high}
                          </Text>
                          <Text style={styles.windConUnit}>km/h</Text>
                        </View>
                        <View style={styles.windInfoWrapper}>
                          <Text style={styles.windText}>Wind Direction:</Text>
                          <Text style={styles.windConText}>
                            {data[2].wind.direction.trim() == "VARIABLE"
                              ? "N.A"
                              : data[2].wind.direction.trim()}
                          </Text>
                          <Text style={styles.windConUnit}>
                            {windDirectionFullForm(
                              data[2].wind.direction.trim()
                            )}
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
                          <Text></Text>
                          <Text style={styles.humidNum}>
                            Low: {data[4].humidity.low}%
                          </Text>
                          <Text style={styles.humidNum}>
                            High: {data[4].humidity.high}%
                          </Text>
                        </View>
                      </View>
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

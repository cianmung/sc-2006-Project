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
                <Text style={styles.locationText}>
                  {data.find((each) => each.areaName).areaName.name}
                </Text>
                <Text style={styles.tempText}>
                  {getTemp(
                    data.find((each) => each.temperature).temperature.low,
                    data.find((each) => each.temperature).temperature.high
                  )}
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
                    High:{" "}
                    {data.find((each) => each.temperature).temperature.low}&deg;
                  </Text>
                  <Text style={styles.coordinateText}>
                    Low:{" "}
                    {data.find((each) => each.temperature).temperature.high}
                    &deg;
                  </Text>
                </View>
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
                            name={data
                              .find((each) => each.forecast)
                              .forecast.text.trim()}
                          />
                        </View>
                        <View style={styles.windInfoWrapper}>
                          <Text style={styles.currentWeatherConText}>
                            {data.find((each) => each.forecast).forecast.text}
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
                          <Text style={styles.windText}>Wind Speed:</Text>
                          <Text style={styles.windConText}>
                            {data.find((each) => each.wind).wind.speed.low} -{" "}
                            {data.find((each) => each.wind).wind.speed.high}
                          </Text>
                          <Text style={styles.windConUnit}>km/h</Text>
                        </View>
                        <View style={styles.windInfoWrapper}>
                          <Text style={styles.windText}>Wind Direction:</Text>
                          <Text style={styles.windConText}>
                            {data
                              .find((each) => each.wind)
                              .wind.direction.trim() == "VARIABLE"
                              ? "N.A"
                              : data
                                  .find((each) => each.wind)
                                  .wind.direction.trim()}
                          </Text>
                          <Text style={styles.windConUnit}>
                            {windDirectionFullForm(
                              data
                                .find((each) => each.wind)
                                .wind.direction.trim()
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
                            Low:{" "}
                            {data.find((each) => each.humidity).humidity.low}%
                          </Text>
                          <Text style={styles.humidNum}>
                            High:{" "}
                            {data.find((each) => each.humidity).humidity.high}%
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

import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { styles } from "@/constants/Styles";
import backgroundImage from "@/assets/images/background-image.png";
import { fetchData } from "@/constants/ApiCall";
import {
  getDayShortForm,
  formatDate,
  windDirectionFullForm,
  get12HourMinutesFormat,
} from "@/constants/Utils";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import WeatherIcon from "@/components/WeatherIcon";

const specificTowns = () => {
  const date = new Date();

  const [forecastData, setForecastData] = useState([]);
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedDayData, setSelectedDayData] = useState({});
  const [timeStamp, setTimeStamp] = useState(date.toString());

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchData("forecast/fourdayforecast");
        setForecastData(data.data.records[0].forecasts);
        setSelectedDayData(data.data.records[0].forecasts[0]);
      } catch (err) {
        console.error(err);
      }
    };

    loadData();
  }, [timeStamp]);

  useEffect(() => {
    if (forecastData.length != 0) {
      setSelectedDayData(forecastData[selectedDay]);
    }
  }, [forecastData, selectedDay]);

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setTimeStamp(date.toString());
    }, 5 * 60 * 1000); // run every  5 minutes
    return () => {
      clearInterval(interval);
    };
  }, []);

  if (forecastData.length != 0) {
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
                <View style={styles.forecastSelectContainer}>
                  {forecastData.length != 0 &&
                    forecastData.map((each, index) => (
                      <Pressable
                        onPress={() => {
                          setSelectedDay(index);
                        }}
                        key={index}
                      >
                        <View
                          style={[
                            styles.forecastSelectIcon,
                            index == selectedDay && styles.forecastSelectedIcon,
                          ]}
                        >
                          <Text style={styles.forecastSelectText}>
                            {getDayShortForm(each.timestamp.trim())}
                          </Text>
                        </View>
                      </Pressable>
                    ))}
                </View>
                <View style={styles.forecastDisplayContainer}>
                  <Text style={styles.dateText}>
                    {formatDate(selectedDayData.timeStamp)}
                  </Text>
                  <Text style={styles.updateText}>
                    Last Update: {get12HourMinutesFormat(timeStamp)}
                  </Text>
                  <View style={styles.coordinateContainer}>
                    <Text style={styles.coordinateText}>
                      Low: {selectedDayData.temperature.low}&deg;
                    </Text>
                    <Text style={styles.coordinateText}>
                      High: {selectedDayData.temperature.high}&deg;
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
                              name={selectedDayData.forecast.text.trim()}
                            />
                          </View>
                          <View style={styles.windInfoWrapper}>
                            <Text style={styles.currentWeatherConText}>
                              {selectedDayData.forecast.text}
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
                              {selectedDayData.wind.speed.low} -{" "}
                              {selectedDayData.wind.speed.high}
                            </Text>
                            <Text style={styles.windConUnit}>km/h</Text>
                          </View>
                          <View style={styles.windInfoWrapper}>
                            <Text style={styles.windText}>Direction:</Text>
                            <Text style={styles.windConText}>
                              {selectedDayData.wind.direction.trim() ==
                              "VARIABLE"
                                ? "N.A"
                                : selectedDayData.wind.direction}
                            </Text>
                            <Text style={styles.windConUnit}>
                              {windDirectionFullForm(
                                selectedDayData.wind.direction.trim()
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
                              Low: {selectedDayData.relativeHumidity.low}%
                            </Text>
                            <Text style={styles.humidNum}>
                              High: {selectedDayData.relativeHumidity.high}%
                            </Text>
                          </View>
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
};

export default specificTowns;

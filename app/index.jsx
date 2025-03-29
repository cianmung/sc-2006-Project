import {
  Image,
  ImageBackground,
  Text,
  View,
  ScrollView,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import backgroundImage from "@/assets/images/background-image.png";
import weatherSampleIcon from "@/assets/images/weather-conditions/windy.png";

import { styles } from "@/constants/Styles";

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import { Link } from "expo-router";

export default function Index() {
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
              <Text style={styles.tempText}>19&deg;</Text>
              <Text style={styles.dateText}>Sunday, 2 March</Text>
              <View style={styles.coordinateContainer}>
                <Text style={styles.coordinateText}>Highs: 20</Text>
                <Text style={styles.coordinateText}>Lows: 16</Text>
              </View>
              <View style={styles.borderedContainer}>
                <View style={styles.currentWeatherContainer}>
                  <Image
                    source={weatherSampleIcon}
                    style={styles.currentWeatherImage}
                  />
                  <View style={styles.currentWeatherTextContainer}>
                    <Text style={styles.currentWeatherText}>
                      Current Weather:
                    </Text>
                    <Text style={styles.currentWeatherConText}>Cloudy</Text>
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
                        <Text style={styles.windConText}>9.7 km/h</Text>
                      </View>
                      <View style={styles.windTextContainer}>
                        <Text style={styles.uvIndexText}>Highs: 30</Text>
                        <Text style={styles.uvIndexText}>Lows: 25</Text>
                        <Text style={styles.uvIndexText}>Direction: East</Text>
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
                    <Text style={styles.uvIndexNum}>4</Text>
                    <Text style={styles.uvIndexText}>Moderate</Text>
                  </View>
                  <View style={styles.fadedBackgroundContainer}>
                    <View style={styles.iconTextOneLineContainer}>
                      <Entypo name="air" size={20} color="white" />
                      <Text style={styles.iconTextOneLineText}>HUMIDITY</Text>
                    </View>
                    <Text style={styles.uvIndexNum}>90%</Text>
                    <Text style={styles.humidText}>
                      The dew point is 17 right now.
                    </Text>
                  </View>
                </View>
              </View>
              <Link href="/specifictowns" asChild>
                <Pressable>
                  <Text>Specific Towns</Text>
                </Pressable>
              </Link>
              <Link href="/forecast" asChild>
                <Pressable>
                  <Text>Forecast</Text>
                </Pressable>
              </Link>
              <Link href="/history" asChild>
                <Pressable>
                  <Text>History</Text>
                </Pressable>
              </Link>
            </View>
          </SafeAreaView>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

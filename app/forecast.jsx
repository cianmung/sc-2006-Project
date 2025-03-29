import { View, Text, ImageBackground, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "@/constants/Styles";
import backgroundImage from "@/assets/images/background-image.png";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
const specificTowns = () => {
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
                <View style={styles.forecastSelectIcon}>
                  <Text style={styles.forecastSelectText}>T</Text>
                </View>
                <View style={styles.forecastSelectIcon}>
                  <Text style={styles.forecastSelectText}>T</Text>
                </View>
                <View style={styles.forecastSelectIcon}>
                  <Text style={styles.forecastSelectText}>T</Text>
                </View>
                <View style={styles.forecastSelectIcon}>
                  <Text style={styles.forecastSelectText}>T</Text>
                </View>
              </View>
              <View style={styles.forecastDisplayContainer}>
                <View style={styles.forecastDisplayRow}>
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
                <View style={styles.forecastDisplayRow}>
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
            </View>
          </SafeAreaView>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default specificTowns;

import { View, Text, ImageBackground, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "@/constants/Styles";
import backgroundImage from "@/assets/images/background-image.png";
import weatherSampleIcon from "@/assets/images/sample-weather.png";
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
              <Text style={styles.specificTownText}>Specific Towns</Text>
              <View style={styles.eachTownContainer}>
                <Text style={styles.eachTownText}>Jurong East</Text>
                <Image source={weatherSampleIcon} style={styles.eachTownIcon} />
              </View>
              <View style={styles.eachTownContainer}>
                <Text style={styles.eachTownText}>Jurong East</Text>
                <Image source={weatherSampleIcon} style={styles.eachTownIcon} />
              </View>
              <View style={styles.eachTownContainer}>
                <Text style={styles.eachTownText}>Jurong East</Text>
                <Image source={weatherSampleIcon} style={styles.eachTownIcon} />
              </View>
              <View style={styles.eachTownContainer}>
                <Text style={styles.eachTownText}>Jurong East</Text>
                <Image source={weatherSampleIcon} style={styles.eachTownIcon} />
              </View>
              <View style={styles.eachTownContainer}>
                <Text style={styles.eachTownText}>Jurong East</Text>
                <Image source={weatherSampleIcon} style={styles.eachTownIcon} />
              </View>
            </View>
          </SafeAreaView>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default specificTowns;

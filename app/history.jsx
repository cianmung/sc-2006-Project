import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

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
              <Text style={styles.specificTownText}>Past Month Weathers</Text>
              <Link href="/" asChild>
                <Pressable>
                  <View style={styles.eachTownContainer}>
                    <Text style={styles.eachTownText}>Sat, 1 Mar</Text>
                    <Image
                      source={weatherSampleIcon}
                      style={styles.eachTownIcon}
                    />
                  </View>
                </Pressable>
              </Link>
              <Link href="/" asChild>
                <Pressable>
                  <View style={styles.eachTownContainer}>
                    <Text style={styles.eachTownText}>Fri, 28 Feb</Text>
                    <Image
                      source={weatherSampleIcon}
                      style={styles.eachTownIcon}
                    />
                  </View>
                </Pressable>
              </Link>
              <Link href="/" asChild>
                <Pressable>
                  <View style={styles.eachTownContainer}>
                    <Text style={styles.eachTownText}>Thu, 27 Feb</Text>
                    <Image
                      source={weatherSampleIcon}
                      style={styles.eachTownIcon}
                    />
                  </View>
                </Pressable>
              </Link>
              <Link href="/" asChild>
                <Pressable>
                  <View style={styles.eachTownContainer}>
                    <Text style={styles.eachTownText}>Wed, 26 Feb</Text>
                    <Image
                      source={weatherSampleIcon}
                      style={styles.eachTownIcon}
                    />
                  </View>
                </Pressable>
              </Link>
            </View>
          </SafeAreaView>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default specificTowns;

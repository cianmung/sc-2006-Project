import { View, Text, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { styles } from "@/constants/Styles";
import backgroundImage from "@/assets/images/background-image.png";
import WeatherBrief from "@/components/WeatherBrief";
import { fetchDataDirect } from "@/constants/ApiCall";
import Animated, { LinearTransition } from "react-native-reanimated";
import Page404 from "@/components/Page404";
import Loading from "@/components/Loading";

const specificTowns = () => {
  const [towns, setTowns] = useState([]);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchDataDirect(
          "https://api-open.data.gov.sg/v2/real-time/api/two-hr-forecast"
        );
        setTowns(data.data.items[0].forecasts);
      } catch (err) {
        setIsError(true);
        console.error(err);
      }
    };
    loadData();
  }, []);
  if (!isError) {
    if (towns.length != 0) {
      return (
        <View style={styles.pageContainer}>
          <ImageBackground
            source={backgroundImage}
            resizeMethod="cover"
            style={styles.backgroundImage}
          >
            <SafeAreaView>
              <Text style={styles.specificTownText}>Specific Towns</Text>
              <View style={[styles.container, styles.flatlistContainer]}>
                {towns.length != 0 && (
                  <Animated.FlatList
                    data={towns}
                    renderItem={(town) => (
                      <WeatherBrief data={town.item} brief={true} />
                    )}
                    keyExtractor={(each) => each.area}
                    contentContainerStyle={{ flexGrow: 1 }}
                    itemLayoutAnimation={LinearTransition}
                  />
                )}
              </View>
            </SafeAreaView>
          </ImageBackground>
        </View>
      );
    } else {
      return <Loading />;
    }
  } else {
    return <Page404 />;
  }
};

export default specificTowns;

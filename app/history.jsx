import { View, Text, ImageBackground, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { styles } from "@/constants/Styles";
import backgroundImage from "@/assets/images/background-image.png";
import { fetchData } from "@/constants/ApiCall";
import Animated, { LinearTransition } from "react-native-reanimated";
import { formatDate } from "@/constants/Utils";
import WeatherIcon from "@/components/WeatherIcon";
import Page404 from "@/components/Page404";
import Loading from "@/components/Loading";

const specificTowns = () => {
  const [historyData, setHistoryData] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchData("forecast/past");
        const weatherArray = Object.entries(data).map(([date, data]) => ({
          date,
          ...data,
        }));
        setHistoryData(weatherArray);
      } catch (err) {
        setIsError(true);
        console.error(err);
      }
    };
    loadData();
  }, []);

  const renderItem = ({ item }) => (
    <Link href={"/history/" + item.data.records[0].timestamp} asChild>
      <Pressable>
        <View style={styles.eachTownContainer}>
          <View>
            <Text style={styles.eachTownText}>{formatDate(item.date)}</Text>
            <Text style={styles.eachTownWeatherText}>
              {item.data.records[0].general.forecast.text.trim()}
            </Text>
          </View>
          <WeatherIcon
            name={item.data.records[0].general.forecast.text.trim()}
            brief={true}
          />
        </View>
      </Pressable>
    </Link>
  );
  if (!isError) {
    if (historyData.length != 0) {
      return (
        <View style={styles.pageContainer}>
          <ImageBackground
            source={backgroundImage}
            resizeMethod="cover"
            style={styles.backgroundImage}
          >
            <SafeAreaView>
              <Text style={styles.specificTownText}>Past 30 Days</Text>
              {historyData.length != 0 && (
                <View style={[styles.container, styles.flatlistContainer]}>
                  <Animated.FlatList
                    data={historyData}
                    renderItem={renderItem}
                    keyExtractor={(each) => each.date}
                    contentContainerStyle={{ flexGrow: 1 }}
                    itemLayoutAnimation={LinearTransition}
                  />
                </View>
              )}
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

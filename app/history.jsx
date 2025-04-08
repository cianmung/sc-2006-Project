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

const specificTowns = () => {
  const [historyData, setHistoryData] = useState([]);

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
        console.error(err);
      }
    };
    loadData();
  }, []);

  const renderItem = ({ item }) => (
    <Link href={"/history/" + item.data.records[0].timestamp} asChild>
      <Pressable>
        <View style={styles.eachTownContainer}>
          <Text style={styles.eachTownText}>{formatDate(item.date)}</Text>
          <WeatherIcon
            name={item.data.records[0].general.forecast.text.trim()}
            brief={true}
          />
        </View>
      </Pressable>
    </Link>
  );

  return (
    <View style={styles.pageContainer}>
      <ImageBackground
        source={backgroundImage}
        resizeMethod="cover"
        style={styles.backgroundImage}
      >
        <SafeAreaView>
          <Text style={styles.specificTownText}>Past Month Weathers</Text>
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
};

export default specificTowns;

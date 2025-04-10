import { View, ImageBackground, Text, Image } from "react-native";
import backgroundImage from "@/assets/images/background-image.png";
import { styles } from "@/constants/Styles";
import { SafeAreaView } from "react-native-safe-area-context";
import LoadingImg from "@/assets/images/loading.gif";

export default function Loading() {
  return (
    <View style={styles.pageContainer}>
      <ImageBackground
        source={backgroundImage}
        resizeMethod="cover"
        style={styles.backgroundImage}
      >
        <SafeAreaView>
          <View style={styles.errorContainer}>
            <View style={styles.errorWrapper}>
              <Image style={styles.errorImg} source={LoadingImg} />
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

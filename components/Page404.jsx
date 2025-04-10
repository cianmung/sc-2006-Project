import { View, ImageBackground, Text } from "react-native";
import backgroundImage from "@/assets/images/background-image.png";
import { styles } from "@/constants/Styles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page404() {
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
              <Text style={styles.errorText}>
                Data is currently not available. Please try again later.
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

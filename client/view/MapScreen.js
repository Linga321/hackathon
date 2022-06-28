import { Image, StyleSheet, View, Text } from "react-native";
import { COLORS } from "../styles/theme";

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.stockimage}
          source={require("../assets/map-image.jpg")}
        />
      </View>
      <Text style={styles.date}>Today</Text>
      <Text style={styles.distance}>Travel distance: 6,7km</Text>
      <Text style={styles.transportation}>Mode of transportation: 3</Text>
      <Text style={styles.time}>Travel time: 1h 6m</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.primary,
  },
  stockimage: {
    width: 400,
    height: 400,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 200,
    paddingTop: "60",
  },
  date: {
    marginHorizontal: "0.1em",
    fontSize: "1em",
    color: COLORS.lightGrey,
    textAlign: "left",
    paddingTop: "1em",
  },
  distance: {
    marginHorizontal: "0.1em",
    fontSize: "1em",
    color: COLORS.lightGrey,
    textAlign: "left",
    paddingTop: "1em",
  },
  transportation: {
    marginHorizontal: "0.1em",
    fontSize: "1em",
    color: COLORS.lightGrey,
    textAlign: "right",
    paddingTop: "1em",
  },
  time: {
    marginHorizontal: "0.1em",
    fontSize: "1em",
    color: COLORS.lightGrey,
    textAlign: "left",
    paddingTop: "1em",
  },
});

export default MapScreen;

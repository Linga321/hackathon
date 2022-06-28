import { useContext } from "react";

import { COLORS } from "../styles/theme";

// import LoginForm from "../components/LoginForm";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-elements";
import style from "../context/style";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.body}>
        {/* <View>
          <LoginForm />
        </View> */}
        <View style={styles.bodyContent}>
          <Text style={styles.date}>Today</Text>
          <Text style={styles.distance}>Travel distance: 6,7km</Text>
          <Text style={styles.transportation}>
            Transpotation: Walking, tram and bus
          </Text>
          <Text style={styles.time}>Travel time: 1h 6m</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bodyContent: {
    paddingTop: "4em",
    backgroundColor: COLORS.primary,
    height: "100vh",
  },
  date: {
    height: "3em",
    backgroundColor: COLORS.lightGrey,
    marginHorizontal: "1em",
    fontSize: "2em",
    color: COLORS.darkGrey,
    textAlign: "center",
    paddingVertical: "1em",
  },
  distance: {
    marginTop: "2em",
    marginHorizontal: "1em",
    height: "3em",
    backgroundColor: COLORS.lightGrey,
    fontSize: "1.5em",
    color: COLORS.darkGrey,
    textAlign: "center",
    paddingVertical: "1em",
  },
  transportation: {
    marginTop: "2em",
    marginHorizontal: "1em",
    height: "4em",
    backgroundColor: COLORS.lightGrey,
    fontSize: "1.5em",
    color: COLORS.darkGrey,
    textAlign: "center",
    paddingVertical: "1em",
  },
  time: {
    marginTop: "2em",
    marginHorizontal: "1em",
    height: "4em",
    backgroundColor: COLORS.lightGrey,
    fontSize: "1.5em",
    color: COLORS.darkGrey,
    textAlign: "center",
    paddingVertical: "1em",
  },
});

export default HomeScreen;

import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import { COLORS } from "../styles/theme";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Image
        style={styles.avatar}
        source={require("../assets/profile-pic.jpg")}
      />
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>Kalle Virtanen</Text>
          <Text style={styles.info}>UX Designer</Text>
          <Text style={styles.description}>Address: 20 D 00600 Helsinki</Text>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Edit profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    backgroundColor: "#00BFFF",
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 130,
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600",
    paddingBottom: "1em",
  },
  info: {
    fontSize: 18,
    fontWeight: "400",
    color: COLORS.darkGrey,
    marginTop: 10,
    paddingBottom: "2em",
  },
  description: {
    fontSize: 18,
    fontWeight: "400",
    color: COLORS.darkGrey,
    marginTop: 10,
    textAlign: "center",
    paddingBottom: "2em",
  },
  buttonContainer: {
    marginTop: 2,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: COLORS.primary,
  },
  buttonText: {
    color: COLORS.lightGrey,
  },
});

export default ProfileScreen;

import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import ModeLightImage from "../components/ModeLightImage";
import EventStatsContainer from "../components/EventStatsContainer";
import NativeStatusBar from "../components/NativeStatusBar";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const UserInsights = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.userInsights}>
      <ModeLightImage
        dimensionsData={require("../assets/native--home-indicator1.png")}
        modeLightIconPosition="absolute"
        modeLightIconWidth={393}
        modeLightIconHeight={36}
        modeLightIconMarginLeft={-196.5}
        modeLightIconBottom={0}
        modeLightIconLeft="50%"
        modeLightIconRight="unset"
        modeLightIconOverflow="unset"
      />
      <View style={styles.barsNavBarsStandard}>
        <Text style={[styles.userInsights1, styles.actionablePosition]}>
          User Insights
        </Text>
        <Button
          style={[styles.leftActionable, styles.actionablePosition]}
          mode=""
          onPress={() => navigation.navigate("HomeScreen")}
          contentStyle={styles.leftActionableIconBtn}
        />
        <Image
          style={[styles.rightActionable2, styles.actionablePosition]}
          resizeMode="cover"
          source={require("../assets/right-actionable-2.png")}
        />
      </View>
      <EventStatsContainer
        viewCountText="Views: 240"
        downloadCountText="Downloads: 103"
        shareCountText="Shares: 13"
        onEventPress={() => navigation.navigate("EventDetails")}
      />
      <EventStatsContainer
        viewCountText="Views: 870"
        downloadCountText="Downloads: 193"
        shareCountText="Shares: 87"
        frameViewTop={330}
        onEventPress={() => navigation.navigate("EventDetails")}
      />
      <NativeStatusBar
        coordinatesText={require("../assets/wifi1.png")}
        dimensionsText={require("../assets/battery.png")}
        propBackgroundColor="#fff"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  leftActionableIconBtn: {
    marginTop: -12.15,
    height: 24,
    width: 24,
  },
  actionablePosition: {
    top: "50%",
    position: "absolute",
  },
  userInsights1: {
    marginTop: -9.15,
    marginLeft: -55.5,
    fontSize: FontSize.largeNoneMedium_size,
    lineHeight: 18,
    fontFamily: FontFamily.largeNoneRegular,
    color: Color.colorGray_300,
    textAlign: "center",
    left: "50%",
  },
  leftActionable: {
    left: 18,
    overflow: "hidden",
  },
  rightActionable2: {
    marginTop: -12.15,
    right: 60,
    width: 24,
    height: 24,
    display: "none",
    overflow: "hidden",
  },
  barsNavBarsStandard: {
    marginLeft: -196.5,
    top: 64,
    width: 393,
    height: 50,
    left: "50%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  userInsights: {
    borderRadius: Border.br_11xl,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default UserInsights;

import * as React from "react";
import { Button } from "react-native-paper";
import { StyleSheet, Image, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import ModeLightSizeLargeTypeP from "../components/ModeLightSizeLargeTypeP";
import ModeLightImage from "../components/ModeLightImage";
import ModeLight from "../components/ModeLight";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Walkthrough = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.walkthrough1}>
      <ModeLightSizeLargeTypeP
        modeLightSizeLargeTypePPosition="absolute"
        modeLightSizeLargeTypePBackgroundColor="unset"
        modeLightSizeLargeTypePPaddingHorizontal="unset"
        modeLightSizeLargeTypePPaddingVertical="unset"
        modeLightSizeLargeTypePMarginLeft="unset"
        modeLightSizeLargeTypePBottom={42}
        modeLightSizeLargeTypePLeft="50%"
        onControlsButtonsPress={() => navigation.navigate("Login")}
      />
      <View style={styles.walkthrough}>
        <Image
          style={styles.logosIcon}
          resizeMode="cover"
          source={require("../assets/logos.png")}
        />
        <Image
          style={styles.image4Icon}
          resizeMode="cover"
          source={require("../assets/image-4.png")}
        />
        <Text style={styles.discoverTheMagic}>
          Discover the Magic of AI-powered Galleries
        </Text>
        <View style={styles.stepperDots}>
          <View style={[styles.stepperDotsChild, styles.controlsLayout]} />
          <View
            style={[styles.controlsPageControlsDot, styles.controlsLayout]}
          />
          <View
            style={[styles.controlsPageControlsDot, styles.controlsLayout]}
          />
          <View
            style={[styles.controlsPageControlsDot, styles.controlsLayout]}
          />
          <View
            style={[styles.controlsPageControlsDot, styles.controlsLayout]}
          />
        </View>
      </View>
      <ModeLightImage
        dimensionsData={require("../assets/native--home-indicator1.png")}
        modeLightIconPosition="absolute"
        modeLightIconWidth="unset"
        modeLightIconHeight={36}
        modeLightIconMarginLeft="unset"
        modeLightIconBottom={0}
        modeLightIconLeft={0}
        modeLightIconRight={0}
        modeLightIconOverflow="hidden"
      />
      <ModeLight
        dimensionsText={require("../assets/mobile-signal.png")}
        productDimensions={require("../assets/wifi.png")}
        productDimensionsCode={require("../assets/battery1.png")}
        modeLightPosition="absolute"
        modeLightHeight={46}
        modeLightTop={0}
        modeLightRight={0}
        modeLightLeft={0}
        modeLightMarginLeft="unset"
        modeLightWidth="unset"
        textMarginTop={-6.4}
        textLeft={32}
        textFontSize={17}
        textLineHeight={17}
        mobileSignalIconMarginTop={-1.7}
        mobileSignalIconRight={73}
        mobileSignalIconWidth={19}
        wifiIconMarginTop={-3.2}
        wifiIconRight={52}
        wifiIconWidth={16}
        wifiIconHeight={12}
        batteryIconMarginTop={-4.3}
        batteryIconRight={17}
        batteryIconWidth={28}
        batteryIconHeight={14}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  controlsButtonsBtn: {
    color: "#fff",
    fontSize: 16.788177490234375,
    fontWeight: "500",
    fontFamily: "Inter-Medium",
  },
  controlsButtonsBtn1: {
    marginLeft: -171.5,
    paddingHorizontal: 34,
    paddingVertical: 17,
    borderRadius: 50,
    width: 343,
  },
  controlsLayout: {
    height: 8,
    width: 8,
    borderRadius: 105,
  },
  logosIcon: {
    width: 167,
    height: 34,
  },
  image4Icon: {
    width: 311,
    height: 341,
    marginTop: 40,
  },
  discoverTheMagic: {
    fontSize: FontSize.title3_size,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: FontFamily.title2,
    color: Color.colorGray_300,
    textAlign: "center",
    width: 343,
    marginTop: 40,
  },
  stepperDotsChild: {
    backgroundColor: Color.primaryBase,
  },
  controlsPageControlsDot: {
    backgroundColor: Color.skyLight,
    marginLeft: 8.39,
  },
  stepperDots: {
    flexDirection: "row",
    marginTop: 40,
  },
  walkthrough: {
    position: "absolute",
    top: 120,
    left: 18,
    alignItems: "center",
  },
  walkthrough1: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Walkthrough;

import React, { useMemo } from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  ImageSourcePropType,
} from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type NativeStatusBarType = {
  coordinatesText?: ImageSourcePropType;
  dimensionsText?: ImageSourcePropType;

  /** Style props */
  propBackgroundColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const NativeStatusBar = ({
  coordinatesText,
  dimensionsText,
  propBackgroundColor,
}: NativeStatusBarType) => {
  const nativeStatusBarStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

  return (
    <View style={[styles.nativeStatusBar, nativeStatusBarStyle]}>
      <Text style={[styles.text, styles.iconPosition]}>9:41</Text>
      <Image
        style={[styles.mobileSignalIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/mobile-signal.png")}
      />
      <Image
        style={[styles.wifiIcon, styles.iconPosition]}
        resizeMode="cover"
        source={coordinatesText}
      />
      <Image
        style={[styles.batteryIcon, styles.iconPosition]}
        resizeMode="cover"
        source={dimensionsText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    top: "50%",
    position: "absolute",
  },
  text: {
    marginTop: -6.4,
    left: 32,
    fontSize: FontSize.size_base,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.largeNoneMedium,
    color: Color.colorGray_300,
    textAlign: "left",
  },
  mobileSignalIcon: {
    marginTop: -1.7,
    right: 73,
    width: 19,
    height: 10,
  },
  wifiIcon: {
    marginTop: -3.2,
    right: 52,
    width: 16,
    height: 12,
  },
  batteryIcon: {
    marginTop: -4.3,
    right: 17,
    width: 28,
    height: 14,
  },
  nativeStatusBar: {
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: Color.colorWhite,
    height: 46,
    position: "absolute",
  },
});

export default NativeStatusBar;

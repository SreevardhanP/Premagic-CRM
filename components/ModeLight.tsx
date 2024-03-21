import React, { useMemo } from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  ImageSourcePropType,
} from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type ModeLightType = {
  dimensionsText?: ImageSourcePropType;
  productDimensions?: ImageSourcePropType;
  productDimensionsCode?: ImageSourcePropType;

  /** Style props */
  modeLightPosition?: string;
  modeLightHeight?: number | string;
  modeLightTop?: number | string;
  modeLightRight?: number | string;
  modeLightLeft?: number | string;
  modeLightMarginLeft?: number | string;
  modeLightWidth?: number | string;
  textMarginTop?: number | string;
  textLeft?: number | string;
  textFontSize?: number;
  textLineHeight?: number;
  mobileSignalIconMarginTop?: number | string;
  mobileSignalIconRight?: number | string;
  mobileSignalIconWidth?: number | string;
  wifiIconMarginTop?: number | string;
  wifiIconRight?: number | string;
  wifiIconWidth?: number | string;
  wifiIconHeight?: number | string;
  batteryIconMarginTop?: number | string;
  batteryIconRight?: number | string;
  batteryIconWidth?: number | string;
  batteryIconHeight?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ModeLight = ({
  dimensionsText,
  productDimensions,
  productDimensionsCode,
  modeLightPosition,
  modeLightHeight,
  modeLightTop,
  modeLightRight,
  modeLightLeft,
  modeLightMarginLeft,
  modeLightWidth,
  textMarginTop,
  textLeft,
  textFontSize,
  textLineHeight,
  mobileSignalIconMarginTop,
  mobileSignalIconRight,
  mobileSignalIconWidth,
  wifiIconMarginTop,
  wifiIconRight,
  wifiIconWidth,
  wifiIconHeight,
  batteryIconMarginTop,
  batteryIconRight,
  batteryIconWidth,
  batteryIconHeight,
}: ModeLightType) => {
  const modeLightStyle = useMemo(() => {
    return {
      ...getStyleValue("position", modeLightPosition),
      ...getStyleValue("height", modeLightHeight),
      ...getStyleValue("top", modeLightTop),
      ...getStyleValue("right", modeLightRight),
      ...getStyleValue("left", modeLightLeft),
      ...getStyleValue("marginLeft", modeLightMarginLeft),
      ...getStyleValue("width", modeLightWidth),
    };
  }, [
    modeLightPosition,
    modeLightHeight,
    modeLightTop,
    modeLightRight,
    modeLightLeft,
    modeLightMarginLeft,
    modeLightWidth,
  ]);

  const textStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", textMarginTop),
      ...getStyleValue("left", textLeft),
      ...getStyleValue("fontSize", textFontSize),
      ...getStyleValue("lineHeight", textLineHeight),
    };
  }, [textMarginTop, textLeft, textFontSize, textLineHeight]);

  const mobileSignalIconStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", mobileSignalIconMarginTop),
      ...getStyleValue("right", mobileSignalIconRight),
      ...getStyleValue("width", mobileSignalIconWidth),
    };
  }, [mobileSignalIconMarginTop, mobileSignalIconRight, mobileSignalIconWidth]);

  const wifiIconStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", wifiIconMarginTop),
      ...getStyleValue("right", wifiIconRight),
      ...getStyleValue("width", wifiIconWidth),
      ...getStyleValue("height", wifiIconHeight),
    };
  }, [wifiIconMarginTop, wifiIconRight, wifiIconWidth, wifiIconHeight]);

  const batteryIconStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", batteryIconMarginTop),
      ...getStyleValue("right", batteryIconRight),
      ...getStyleValue("width", batteryIconWidth),
      ...getStyleValue("height", batteryIconHeight),
    };
  }, [
    batteryIconMarginTop,
    batteryIconRight,
    batteryIconWidth,
    batteryIconHeight,
  ]);

  return (
    <View style={[styles.modelight, modeLightStyle]}>
      <Text style={[styles.text, styles.iconPosition, textStyle]}>9:41</Text>
      <Image
        style={[
          styles.mobileSignalIcon,
          styles.iconPosition,
          mobileSignalIconStyle,
        ]}
        resizeMode="cover"
        source={dimensionsText}
      />
      <Image
        style={[styles.wifiIcon, styles.iconPosition, wifiIconStyle]}
        resizeMode="cover"
        source={productDimensions}
      />
      <Image
        style={[styles.batteryIcon, styles.iconPosition, batteryIconStyle]}
        resizeMode="cover"
        source={productDimensionsCode}
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
    marginTop: -6,
    left: 30,
    fontSize: FontSize.size_base,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.largeNoneMedium,
    color: Color.colorGray_300,
    textAlign: "left",
  },
  mobileSignalIcon: {
    marginTop: -1.5,
    right: 69,
    width: 18,
    height: 10,
  },
  wifiIcon: {
    marginTop: -3,
    right: 49,
    width: 15,
    height: 11,
  },
  batteryIcon: {
    marginTop: -4,
    right: 16,
    width: 27,
    height: 13,
  },
  modelight: {
    backgroundColor: Color.colorWhite,
    height: 44,
  },
});

export default ModeLight;

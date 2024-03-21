import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

export type ModeLightSizeLargeTypePType = {
  buttonLabel?: string;

  /** Style props */
  modeLightSizeLargeTypePPosition?: string;
  modeLightSizeLargeTypePBorderRadius?: number | string;
  modeLightSizeLargeTypePBackgroundColor?: string;
  modeLightSizeLargeTypePPaddingHorizontal?: number | string;
  modeLightSizeLargeTypePPaddingVertical?: number | string;
  modeLightSizeLargeTypePFlex?: number;
  modeLightSizeLargeTypePMarginLeft?: number | string;
  modeLightSizeLargeTypePBottom?: number | string;
  modeLightSizeLargeTypePLeft?: number | string;

  /** Action props */
  onControlsButtonsPress?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ModeLightSizeLargeTypeP = ({
  buttonLabel = "Button",
  modeLightSizeLargeTypePPosition,
  modeLightSizeLargeTypePBorderRadius,
  modeLightSizeLargeTypePBackgroundColor,
  modeLightSizeLargeTypePPaddingHorizontal,
  modeLightSizeLargeTypePPaddingVertical,
  modeLightSizeLargeTypePFlex,
  modeLightSizeLargeTypePMarginLeft,
  modeLightSizeLargeTypePBottom,
  modeLightSizeLargeTypePLeft,
  onControlsButtonsPress,
}: ModeLightSizeLargeTypePType) => {
  const modeLightSizeLargeTypePStyle = useMemo(() => {
    return {
      ...getStyleValue("position", modeLightSizeLargeTypePPosition),
      ...getStyleValue("borderRadius", modeLightSizeLargeTypePBorderRadius),
      ...getStyleValue(
        "backgroundColor",
        modeLightSizeLargeTypePBackgroundColor
      ),
      ...getStyleValue(
        "paddingHorizontal",
        modeLightSizeLargeTypePPaddingHorizontal
      ),
      ...getStyleValue(
        "paddingVertical",
        modeLightSizeLargeTypePPaddingVertical
      ),
      ...getStyleValue("flex", modeLightSizeLargeTypePFlex),
      ...getStyleValue("marginLeft", modeLightSizeLargeTypePMarginLeft),
      ...getStyleValue("bottom", modeLightSizeLargeTypePBottom),
      ...getStyleValue("left", modeLightSizeLargeTypePLeft),
    };
  }, [
    modeLightSizeLargeTypePPosition,
    modeLightSizeLargeTypePBorderRadius,
    modeLightSizeLargeTypePBackgroundColor,
    modeLightSizeLargeTypePPaddingHorizontal,
    modeLightSizeLargeTypePPaddingVertical,
    modeLightSizeLargeTypePFlex,
    modeLightSizeLargeTypePMarginLeft,
    modeLightSizeLargeTypePBottom,
    modeLightSizeLargeTypePLeft,
  ]);

  return (
    <View
      style={[styles.modelightSizelargeTypep, modeLightSizeLargeTypePStyle]}
      onPress={onControlsButtonsPress}
    >
      <Text style={styles.text}>{buttonLabel}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.size_base,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.largeNoneMedium,
    color: Color.colorWhite,
    textAlign: "center",
  },
  modelightSizelargeTypep: {
    borderRadius: 48,
    backgroundColor: Color.primaryBase,
    flexDirection: "row",
    paddingHorizontal: 32,
    paddingVertical: Padding.p_base,
  },
});

export default ModeLightSizeLargeTypeP;

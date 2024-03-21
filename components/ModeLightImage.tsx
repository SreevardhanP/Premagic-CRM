import React, { useMemo } from "react";
import { Image, StyleSheet, ImageSourcePropType } from "react-native";

export type ModeLightImageType = {
  dimensionsData?: ImageSourcePropType;

  /** Style props */
  modeLightIconPosition?: string;
  modeLightIconWidth?: number | string;
  modeLightIconHeight?: number | string;
  modeLightIconMarginLeft?: number | string;
  modeLightIconBottom?: number | string;
  modeLightIconLeft?: number | string;
  modeLightIconRight?: number | string;
  modeLightIconOverflow?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ModeLightImage = ({
  dimensionsData,
  modeLightIconPosition,
  modeLightIconWidth,
  modeLightIconHeight,
  modeLightIconMarginLeft,
  modeLightIconBottom,
  modeLightIconLeft,
  modeLightIconRight,
  modeLightIconOverflow,
}: ModeLightImageType) => {
  const modeLightIconStyle = useMemo(() => {
    return {
      ...getStyleValue("position", modeLightIconPosition),
      ...getStyleValue("width", modeLightIconWidth),
      ...getStyleValue("height", modeLightIconHeight),
      ...getStyleValue("marginLeft", modeLightIconMarginLeft),
      ...getStyleValue("bottom", modeLightIconBottom),
      ...getStyleValue("left", modeLightIconLeft),
      ...getStyleValue("right", modeLightIconRight),
      ...getStyleValue("overflow", modeLightIconOverflow),
    };
  }, [
    modeLightIconPosition,
    modeLightIconWidth,
    modeLightIconHeight,
    modeLightIconMarginLeft,
    modeLightIconBottom,
    modeLightIconLeft,
    modeLightIconRight,
    modeLightIconOverflow,
  ]);

  return (
    <Image
      style={[styles.modelightIcon, modeLightIconStyle]}
      resizeMode="cover"
      source={dimensionsData}
    />
  );
};

const styles = StyleSheet.create({
  modelightIcon: {
    width: 375,
    height: 34,
  },
});

export default ModeLightImage;

import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type InsightsContainerType = {
  dimensionCode?: ImageSourcePropType;
  categoryLabel?: string;

  /** Style props */
  propTop?: number | string;
  propHeight?: number | string;

  /** Action props */
  onEventPress?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const InsightsContainer = ({
  dimensionCode,
  categoryLabel,
  propTop,
  propHeight,
  onEventPress,
}: InsightsContainerType) => {
  const vectorIconStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("height", propHeight),
    };
  }, [propTop, propHeight]);

  return (
    <Pressable style={styles.event} onPress={onEventPress}>
      <Image
        style={[styles.vectorIcon, vectorIconStyle]}
        resizeMode="cover"
        source={dimensionCode}
      />
      <View style={styles.eventInner}>
        <View style={styles.presentationOfTheWrapper}>
          <Text style={styles.presentationOfThe}>{categoryLabel}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    top: 19,
    left: 16,
    width: 18,
    height: 16,
    position: "absolute",
  },
  presentationOfThe: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.title2,
    color: Color.colorGray_200,
    textAlign: "left",
  },
  presentationOfTheWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  eventInner: {
    top: 16,
    left: 52,
    width: 252,
    position: "absolute",
  },
  event: {
    borderRadius: 8,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.skyLight,
    borderWidth: 1,
    width: 345,
    height: 58,
    marginTop: 16,
  },
});

export default InsightsContainer;

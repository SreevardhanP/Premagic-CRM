import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type BarsNavBarsStandardType = {
  createButtonText?: string;

  /** Style props */
  propMarginLeft?: number | string;

  /** Action props */
  onLeftActionablePress?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const BarsNavBarsStandard = ({
  createButtonText,
  propMarginLeft,
  onLeftActionablePress,
}: BarsNavBarsStandardType) => {
  const titleStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [propMarginLeft]);

  return (
    <View style={styles.barsNavBarsStandard}>
      <Text style={[styles.title, styles.titlePosition, titleStyle]}>
        {createButtonText}
      </Text>
      <Text style={[styles.rightActionable, styles.titlePosition]}>{` `}</Text>
      <Button
        style={styles.leftActionable}
        mode="elevated"
        onPress={onLeftActionablePress}
        contentStyle={styles.leftActionableIconBtn}
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
  titlePosition: {
    lineHeight: 18,
    fontSize: FontSize.largeNoneMedium_size,
    marginTop: -9.15,
    top: "50%",
    position: "absolute",
  },
  title: {
    marginLeft: -54.5,
    fontFamily: FontFamily.largeNoneRegular,
    color: Color.colorGray_300,
    textAlign: "center",
    left: "50%",
  },
  rightActionable: {
    right: 24,
    fontWeight: "500",
    fontFamily: FontFamily.largeNoneMedium,
    color: Color.primaryBase,
    textAlign: "right",
  },
  leftActionable: {
    left: 18,
    overflow: "hidden",
    top: "50%",
    position: "absolute",
  },
  barsNavBarsStandard: {
    marginLeft: -196.5,
    top: 62,
    backgroundColor: Color.colorWhite,
    width: 393,
    height: 50,
    left: "50%",
    position: "absolute",
  },
});

export default BarsNavBarsStandard;

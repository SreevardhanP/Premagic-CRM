import React, { useMemo } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Button } from "react-native-paper";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type EventDetailsContainerType = {
  eventDetailsText?: string;

  /** Style props */
  moreVerticalIconMarginLeft?: number | string;

  /** Action props */
  onLeftActionablePress?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const EventDetailsContainer = ({
  eventDetailsText,
  moreVerticalIconMarginLeft,
  onLeftActionablePress,
}: EventDetailsContainerType) => {
  const sampleEventDetailsStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", moreVerticalIconMarginLeft),
    };
  }, [moreVerticalIconMarginLeft]);

  return (
    <View style={styles.barsNavBarsStandard}>
      <Text style={[styles.sampleEventDetails, sampleEventDetailsStyle]}>
        {eventDetailsText}
      </Text>
      <Button
        style={styles.leftActionable}
        mode=""
        onPress={onLeftActionablePress}
        contentStyle={styles.leftActionableIconBtn}
      />
      <Image
        style={[styles.moreVerticalIcon, styles.moreVerticalIconPosition]}
        resizeMode="cover"
        source={require("../assets/morevertical.png")}
      />
      <Image
        style={[styles.rightActionable2, styles.moreVerticalIconPosition]}
        resizeMode="cover"
        source={require("../assets/right-actionable-2.png")}
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
  moreVerticalIconPosition: {
    height: 24,
    width: 24,
    marginTop: -12.15,
    overflow: "hidden",
    top: "50%",
    position: "absolute",
  },
  sampleEventDetails: {
    marginTop: -9.15,
    marginLeft: -89.5,
    fontSize: FontSize.largeNoneMedium_size,
    lineHeight: 18,
    fontFamily: FontFamily.largeNoneRegular,
    color: Color.colorGray_300,
    textAlign: "center",
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  leftActionable: {
    left: 18,
    overflow: "hidden",
    top: "50%",
    position: "absolute",
  },
  moreVerticalIcon: {
    right: 24,
  },
  rightActionable2: {
    right: 60,
    display: "none",
  },
  barsNavBarsStandard: {
    marginLeft: -196.5,
    top: 64,
    backgroundColor: Color.colorWhite,
    width: 393,
    height: 50,
    left: "50%",
    position: "absolute",
  },
});

export default EventDetailsContainer;

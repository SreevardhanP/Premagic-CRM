import React, { useMemo } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

export type EventStatsContainerType = {
  viewCountText?: string;
  downloadCountText?: string;
  shareCountText?: string;

  /** Style props */
  frameViewTop?: number | string;

  /** Action props */
  onEventPress?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const EventStatsContainer = ({
  viewCountText,
  downloadCountText,
  shareCountText,
  frameViewTop,
  onEventPress,
}: EventStatsContainerType) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", frameViewTop),
    };
  }, [frameViewTop]);

  return (
    <View style={[styles.eventWrapper, frameViewStyle]}>
      <Pressable style={styles.event} onPress={onEventPress}>
        <View style={styles.today600PmWrapper}>
          <Text style={[styles.today600, styles.today600Typo]}>
            Sample event
          </Text>
        </View>
        <View style={styles.eventInner}>
          <View style={styles.frameWrapper}>
            <View style={styles.presentationFlexBox}>
              <Text style={[styles.presentationOfThe, styles.today600Typo]}>
                Added: 16 Feb
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.eventInner}>
          <View style={styles.presentationFlexBox}>
            <Text style={[styles.presentationOfThe, styles.today600Typo]}>
              {viewCountText}
            </Text>
          </View>
        </View>
        <View
          style={[styles.presentationOfTheFrame, styles.presentationFlexBox]}
        >
          <Text style={[styles.presentationOfThe, styles.today600Typo]}>
            {downloadCountText}
          </Text>
        </View>
        <View
          style={[styles.presentationOfTheFrame, styles.presentationFlexBox]}
        >
          <Text style={[styles.presentationOfThe, styles.today600Typo]}>
            {shareCountText}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  today600Typo: {
    textAlign: "left",
    color: Color.colorGray_200,
    lineHeight: 24,
    fontSize: FontSize.size_base,
  },
  presentationFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  today600: {
    fontWeight: "700",
    fontFamily: FontFamily.title2,
  },
  today600PmWrapper: {
    alignSelf: "stretch",
  },
  presentationOfThe: {
    fontFamily: FontFamily.largeNoneRegular,
  },
  frameWrapper: {
    flexDirection: "row",
  },
  eventInner: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  presentationOfTheFrame: {
    marginTop: 8,
  },
  event: {
    borderRadius: 8,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.skyLight,
    borderWidth: 1,
    width: 345,
    padding: Padding.p_base,
  },
  eventWrapper: {
    position: "absolute",
    top: 130,
    left: 25,
  },
});

export default EventStatsContainer;

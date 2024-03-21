import React, { useMemo } from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { Button } from "react-native-paper";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

export type EventScheduleContainerType = {
  eventDetails?: string;
  venueName?: string;
  eventDateTimeRange?: string;

  /** Style props */
  presentationOfTheMarginTop?: number | string;

  /** Action props */
  onEventPress?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const EventScheduleContainer = ({
  eventDetails,
  venueName,
  eventDateTimeRange,
  presentationOfTheMarginTop,
  onEventPress,
}: EventScheduleContainerType) => {
  const eventStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", presentationOfTheMarginTop),
    };
  }, [presentationOfTheMarginTop]);

  return (
    <Pressable style={[styles.event, eventStyle]} onPress={onEventPress}>
      <View style={[styles.today600PmParent, styles.today600PmParentFlexBox]}>
        <Text style={styles.today600}>{eventDetails}</Text>
        <Button
          style={styles.pencil}
          mode="outlined"
          contentStyle={styles.pencilIconBtn}
        />
      </View>
      <View style={styles.eventInner}>
        <View style={styles.userGroupParent}>
          <Image
            style={styles.userGroupIcon}
            resizeMode="cover"
            source={require("../assets/usergroup.png")}
          />
          <View
            style={[
              styles.presentationOfTheWrapper,
              styles.today600PmParentFlexBox,
            ]}
          >
            <Text style={styles.presentationOfThe}>Not set</Text>
          </View>
        </View>
      </View>
      <View style={styles.eventInner}>
        <View style={styles.userGroupParent}>
          <Image
            style={styles.userGroupIcon}
            resizeMode="cover"
            source={require("../assets/markerpin.png")}
          />
          <View
            style={[
              styles.presentationOfTheWrapper,
              styles.today600PmParentFlexBox,
            ]}
          >
            <Text style={styles.presentationOfThe}>{venueName}</Text>
          </View>
        </View>
      </View>
      <View style={styles.eventInner}>
        <View style={styles.userGroupParent}>
          <Image
            style={styles.userGroupIcon}
            resizeMode="cover"
            source={require("../assets/clock.png")}
          />
          <View
            style={[
              styles.presentationOfTheWrapper,
              styles.today600PmParentFlexBox,
            ]}
          >
            <Text style={styles.presentationOfThe}>{eventDateTimeRange}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pencilIconBtn: {
    height: 16,
    width: 16,
  },
  today600PmParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  today600: {
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.primaryBase,
    textAlign: "left",
  },
  pencil: {
    overflow: "hidden",
  },
  today600PmParent: {
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  userGroupIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  presentationOfThe: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.largeNoneRegular,
    color: Color.colorGray_200,
    textAlign: "left",
  },
  presentationOfTheWrapper: {
    justifyContent: "center",
    marginLeft: 8,
  },
  userGroupParent: {
    flexDirection: "row",
  },
  eventInner: {
    marginTop: 8,
    alignSelf: "stretch",
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
});

export default EventScheduleContainer;

import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import EventContainer1 from "./EventContainer1";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const EventContainer = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.frame}>
      <View style={styles.eventParent}>
        <Pressable
          style={styles.event}
          onPress={() => navigation.navigate("EventDetails")}
        >
          <View style={styles.today600PmWrapper}>
            <Text style={[styles.today600, styles.todayTypo]}>#EV-1</Text>
          </View>
          <View style={styles.eventInnerSpaceBlock}>
            <View style={styles.icnsettingsmycompanyactiveParent}>
              <Image
                style={styles.icnsettingsmycompanyactiveIcon}
                resizeMode="cover"
                source={require("../assets/icnsettingsmycompanyactive.png")}
              />
              <View
                style={[
                  styles.presentationOfTheWrapper,
                  styles.frameParentFlexBox,
                ]}
              >
                <Text style={styles.presentationOfThe}>Sample event</Text>
              </View>
            </View>
          </View>
          <View style={[styles.frameParent, styles.frameParentFlexBox]}>
            <View
              style={[styles.today600PmContainer, styles.frameParentFlexBox]}
            >
              <Text style={[styles.today6001, styles.todayTypo]}>
                Confirmed
              </Text>
            </View>
            <Text style={styles.today6002}>3 Occasions</Text>
          </View>
        </Pressable>
        <EventContainer1
          productCode={require("../assets/icneventsmeeting.png")}
        />
        <EventContainer1
          productCode={require("../assets/icneventsbirthday.png")}
        />
        <EventContainer1
          productCode={require("../assets/icnsettingsmycompanyactive.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todayTypo: {
    fontFamily: FontFamily.largeNoneRegular,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  frameParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  today600: {
    color: Color.colorLightslategray,
    textAlign: "left",
  },
  today600PmWrapper: {
    alignSelf: "stretch",
  },
  icnsettingsmycompanyactiveIcon: {
    width: 24,
    height: 24,
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
    justifyContent: "center",
    marginLeft: 8,
  },
  icnsettingsmycompanyactiveParent: {
    flexDirection: "row",
  },
  eventInnerSpaceBlock: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  today6001: {
    color: Color.colorWhite,
    textAlign: "left",
  },
  today600PmContainer: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorSeagreen,
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_11xs,
  },
  today6002: {
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.primaryBase,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  frameParent: {
    justifyContent: "space-between",
    marginTop: 8,
    alignSelf: "stretch",
  },
  event: {
    borderRadius: 8,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.skyLight,
    borderWidth: 1,
    padding: Padding.p_base,
    alignSelf: "stretch",
  },
  eventParent: {
    marginLeft: -170.5,
    top: 0,
    left: "50%",
    width: 343,
    position: "absolute",
  },
  frame: {
    top: 225,
    left: 24,
    width: 345,
    height: 464,
    overflow: "hidden",
    position: "absolute",
  },
});

export default EventContainer;

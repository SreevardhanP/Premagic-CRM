import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import ModeLightImage from "../components/ModeLightImage";
import EventDetailsContainer from "../components/EventDetailsContainer";
import InsightsContainer from "../components/InsightsContainer";
import NativeStatusBar from "../components/NativeStatusBar";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const EventDetails = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.eventDetails}>
      <ModeLightImage
        dimensionsData={require("../assets/native--home-indicator1.png")}
        modeLightIconPosition="absolute"
        modeLightIconWidth={393}
        modeLightIconHeight={36}
        modeLightIconMarginLeft={-196.5}
        modeLightIconBottom={0}
        modeLightIconLeft="50%"
        modeLightIconRight="unset"
        modeLightIconOverflow="unset"
      />
      <EventDetailsContainer
        eventDetailsText="Sample Event Details"
        onLeftActionablePress={() => navigation.navigate("HomeScreen")}
      />
      <View style={styles.frameParent}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/frame-2227.png")}
        />
        <View style={[styles.event, styles.eventBorder]}>
          <Image
            style={[styles.vectorIcon, styles.vectorIconPosition]}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
          <View style={styles.frameGroup}>
            <View style={styles.presentationOfTheWrapper}>
              <Text style={styles.presentationOfThe}>Micro site</Text>
            </View>
            <View style={styles.today600PmWrapper}>
              <Text style={styles.today600}>Sample event</Text>
            </View>
          </View>
        </View>
        <View style={[styles.event, styles.eventBorder]}>
          <Image
            style={[styles.vectorIcon1, styles.vectorIconPosition]}
            resizeMode="cover"
            source={require("../assets/vector1.png")}
          />
          <View style={styles.frameGroup}>
            <View style={styles.presentationOfTheWrapper}>
              <Text style={styles.presentationOfThe}>Photos</Text>
            </View>
            <View style={styles.today600PmWrapper}>
              <Text style={styles.today600}>4 event photos</Text>
            </View>
          </View>
        </View>
        <InsightsContainer
          dimensionCode={require("../assets/vector2.png")}
          categoryLabel="Insights"
          onEventPress={() => navigation.navigate("EventInsights")}
        />
        <InsightsContainer
          dimensionCode={require("../assets/vector3.png")}
          categoryLabel="Occasions"
          propTop={18}
          propHeight={17}
          onEventPress={() => navigation.navigate("Occasions")}
        />
        <View style={[styles.hostDetailsParent, styles.eventBorder]}>
          <Text style={styles.hostDetails}>Host details</Text>
          <View style={[styles.frameWrapper, styles.frameWrapperPosition]}>
            <View style={styles.userParent}>
              <Image
                style={styles.userIcon}
                resizeMode="cover"
                source={require("../assets/user.png")}
              />
              <View style={styles.today600PmFrame}>
                <Text style={styles.today600}>David John</Text>
              </View>
            </View>
          </View>
          <View style={[styles.frameView, styles.frameWrapperPosition]}>
            <View style={styles.userParent}>
              <Image
                style={styles.mailIcon}
                resizeMode="cover"
                source={require("../assets/mail.png")}
              />
              <View style={styles.today600PmFrame}>
                <Text style={styles.today600}>davidjohn@gmail.com</Text>
              </View>
            </View>
          </View>
          <View style={[styles.frameWrapper1, styles.frameWrapperPosition]}>
            <View style={styles.userParent}>
              <Image
                style={styles.userIcon}
                resizeMode="cover"
                source={require("../assets/phone.png")}
              />
              <View style={styles.today600PmFrame}>
                <Text style={styles.today600}>+91 9876543210</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <NativeStatusBar
        coordinatesText={require("../assets/wifi1.png")}
        dimensionsText={require("../assets/battery.png")}
        propBackgroundColor="#fff"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  eventBorder: {
    marginTop: 16,
    width: 345,
    borderWidth: 1,
    borderColor: Color.skyLight,
    borderStyle: "solid",
    borderRadius: 8,
    backgroundColor: Color.colorWhite,
  },
  vectorIconPosition: {
    left: 16,
    width: 18,
    position: "absolute",
  },
  frameWrapperPosition: {
    width: 288,
    justifyContent: "center",
    left: 16,
    position: "absolute",
  },
  frameChild: {
    width: 343,
    height: 169,
    borderRadius: 8,
  },
  vectorIcon: {
    top: 26,
    height: 23,
    width: 18,
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
    alignItems: "center",
    flexDirection: "row",
  },
  today600: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.largeNoneRegular,
    color: Color.colorLightslategray,
    textAlign: "left",
  },
  today600PmWrapper: {
    alignSelf: "stretch",
  },
  frameGroup: {
    top: 16,
    left: 50,
    width: 254,
    position: "absolute",
  },
  event: {
    height: 77,
  },
  vectorIcon1: {
    top: 29,
    height: 16,
    width: 18,
  },
  hostDetails: {
    top: 14,
    left: 12,
    fontSize: 13,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.foundationGrayNormalActive,
    width: 296,
    textAlign: "left",
    position: "absolute",
  },
  userIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  today600PmFrame: {
    marginLeft: 8,
    alignSelf: "stretch",
    width: 254,
  },
  userParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameWrapper: {
    top: 38,
  },
  mailIcon: {
    height: 18,
    width: 18,
    overflow: "hidden",
  },
  frameView: {
    top: 70,
    paddingHorizontal: 3,
    paddingVertical: 0,
  },
  frameWrapper1: {
    top: 97,
  },
  hostDetailsParent: {
    height: 137,
  },
  frameParent: {
    marginLeft: -171.5,
    top: 130,
    left: "50%",
    position: "absolute",
  },
  eventDetails: {
    borderRadius: Border.br_11xl,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default EventDetails;

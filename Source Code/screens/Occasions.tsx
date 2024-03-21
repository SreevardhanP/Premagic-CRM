import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { Button as RNKButton } from "@ui-kitten/components";
import { Button } from "react-native-paper";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import ModeLightImage from "../components/ModeLightImage";
import EventDetailsContainer from "../components/EventDetailsContainer";
import EventScheduleContainer from "../components/EventScheduleContainer";
import NativeStatusBar from "../components/NativeStatusBar";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const Occasions = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.occasions}>
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
        eventDetailsText="Occasions "
        moreVerticalIconMarginLeft={-43.5}
        onLeftActionablePress={() => navigation.navigate("EventDetails")}
      />
      <View style={styles.eventParent}>
        <EventScheduleContainer
          eventDetails="Haldi"
          venueName={`Taj Malabar Resort & Spa, Cochin`}
          eventDateTimeRange="4th(Sun) Feb, 3:32 pm - 6:32 pm"
          onEventPress={() => navigation.navigate("EventDetails")}
        />
        <Pressable
          style={styles.event}
          onPress={() => navigation.navigate("EventDetails")}
        >
          <View style={styles.today600PmParent}>
            <Text style={styles.today600}>Bridal Shower</Text>
            <RNKButton
              style={styles.pencil}
              size="medium"
              status="primary"
              appearance="outline"
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
                style={[styles.presentationOfTheWrapper, styles.fabFlexBox]}
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
                style={[styles.presentationOfTheWrapper, styles.fabFlexBox]}
              >
                <Text style={styles.presentationOfThe}>
                  Crown Plaza Kochi, an IHG Hotel
                </Text>
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
                style={[styles.presentationOfTheWrapper, styles.fabFlexBox]}
              >
                <Text style={styles.presentationOfThe}>
                  5th(Mon) Feb, 3:32 pm - 6:32 pm
                </Text>
              </View>
            </View>
          </View>
        </Pressable>
        <EventScheduleContainer
          eventDetails="Wedding"
          venueName="Le Meridien Kochi"
          eventDateTimeRange="6th(Tue) Feb, 3:32 pm - 6:32 pm"
          presentationOfTheMarginTop={16}
          onEventPress={() => navigation.navigate("EventDetails")}
        />
      </View>
      <Button
        style={[styles.fab, styles.fabFlexBox]}
        mode="contained"
        onPress={() => navigation.navigate("CreateOccasions")}
        contentStyle={styles.fABBtn}
      />
      <NativeStatusBar
        coordinatesText={require("../assets/wifi1.png")}
        dimensionsText={require("../assets/battery.png")}
        propBackgroundColor="#fff"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fABBtn: {
    borderRadius: 100,
  },
  fabFlexBox: {
    justifyContent: "center",
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
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  today600PmParent: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
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
    borderStyle: "solid",
    borderColor: Color.skyLight,
    borderWidth: 1,
    width: 345,
    padding: Padding.p_base,
    marginTop: 16,
    backgroundColor: Color.colorWhite,
  },
  eventParent: {
    top: 130,
    left: 25,
    position: "absolute",
  },
  fab: {
    top: 736,
    left: 313,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    position: "absolute",
    overflow: "hidden",
  },
  occasions: {
    borderRadius: Border.br_11xl,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Occasions;

import React, { useState } from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { Button, TextInput as RNPTextInput } from "react-native-paper";
import DropDownPicker from "react-native-dropdown-picker";
import EventContainer from "../components/EventContainer";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import ModeLightImage from "../components/ModeLightImage";
import ModeLight from "../components/ModeLight";
import { Color, Padding, Border, FontSize, FontFamily } from "../GlobalStyles";

const HomeScreen = () => {
  const [controlsChipsPillOpen, setControlsChipsPillOpen] = useState(false);
  const [controlsChipsPillValue, setControlsChipsPillValue] = useState();
  const [controlsChipsPillItems, setControlsChipsPillItems] = useState([
    { value: "Date", label: "Date" },
    { value: "Recent", label: "Recent" },
    { value: "price", label: "price" },
  ]);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.homeScreen}>
      <View style={styles.barsNavBarsLarge}>
        <Text style={[styles.largeTitle, styles.chipFlexBox]}>Events</Text>
        <Image
          style={styles.viewsImagesAvatars}
          resizeMode="cover"
          source={require("../assets/views--images-avatars.png")}
        />
      </View>
      <EventContainer />
      <View style={[styles.frame, styles.framePosition1]}>
        <Button
          style={styles.fab}
          mode="contained"
          onPress={() => navigation.navigate("CreateEvent")}
          contentStyle={styles.fABBtn}
        />
      </View>
      <View style={[styles.frame1, styles.framePosition]}>
        <View style={styles.barsTabBarIconOnlyParent}>
          <View style={styles.barsTabBarIconOnly}>
            <View style={styles.partialsTabBarIconOnly}>
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("../assets/group-1.png")}
              />
            </View>
            <Pressable
              style={[
                styles.partialsTabBarIconOnly1,
                styles.partialsIconFlexBox,
              ]}
              onPress={() => navigation.navigate("UserInsights")}
            >
              <Image
                style={[styles.activityIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/activity.png")}
              />
            </Pressable>
            <Pressable
              style={[
                styles.partialsTabBarIconOnly2,
                styles.partialsIconFlexBox,
              ]}
              onPress={() => navigation.navigate("Settings")}
            >
              <Image
                style={[styles.activityIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/sliders.png")}
              />
            </Pressable>
          </View>
          <ModeLightImage
            dimensionsData={require("../assets/native--home-indicator.png")}
            modeLightIconPosition="relative"
            modeLightIconWidth={393}
            modeLightIconHeight={36}
            modeLightIconMarginLeft="unset"
            modeLightIconBottom="unset"
            modeLightIconLeft="unset"
            modeLightIconRight="unset"
            modeLightIconOverflow="unset"
          />
        </View>
      </View>
      <RNPTextInput
        style={[styles.frame2, styles.frame2Position]}
        placeholder="Search"
        mode="flat"
        left={<RNPTextInput.Icon style={{ marginTop: "50%" }} name="magnify" />}
        right={
          <RNPTextInput.Icon style={{ marginTop: "50%" }} name="microphone" />
        }
        placeholderTextColor="#6c7072"
        theme={{
          fonts: { regular: { fontFamily: "Inter", fontWeight: "Regular" } },
          colors: { text: "#6c7072" },
        }}
      />
      <View style={[styles.controlsChipsPillParent, styles.frame2Position]}>
        <View style={styles.controlsFlexBox}>
          <DropDownPicker
            style={styles.dropdownpicker}
            open={controlsChipsPillOpen}
            setOpen={setControlsChipsPillOpen}
            value={controlsChipsPillValue}
            setValue={setControlsChipsPillValue}
            placeholder="Sort By"
            items={controlsChipsPillItems}
            labelStyle={styles.controlsChipsPillValue}
            dropDownContainerStyle={styles.controlsChipsPilldropDownContainer}
          />
        </View>
        <View style={[styles.controlsChipsPill1, styles.controlsFlexBox]}>
          <Text style={[styles.chip, styles.chipFlexBox]}>Status</Text>
        </View>
        <View style={[styles.controlsChipsPill1, styles.controlsFlexBox]}>
          <Text style={[styles.chip, styles.chipFlexBox]}>Label</Text>
        </View>
      </View>
      <View style={[styles.frame3, styles.framePosition]}>
        <ModeLight
          dimensionsText={require("../assets/mobile-signal.png")}
          productDimensions={require("../assets/wifi.png")}
          productDimensionsCode={require("../assets/battery.png")}
          modeLightPosition="absolute"
          modeLightHeight={46}
          modeLightTop={0}
          modeLightRight="unset"
          modeLightLeft="50%"
          modeLightMarginLeft={-197.5}
          modeLightWidth={393}
          textMarginTop={-6.4}
          textLeft={32}
          textFontSize={16}
          textLineHeight={16}
          mobileSignalIconMarginTop={-1.7}
          mobileSignalIconRight={73}
          mobileSignalIconWidth={19}
          wifiIconMarginTop={-3.2}
          wifiIconRight={52}
          wifiIconWidth={16}
          wifiIconHeight={12}
          batteryIconMarginTop={-4.3}
          batteryIconRight={17}
          batteryIconWidth={28}
          batteryIconHeight={14}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fABBtn: {
    borderRadius: 100,
  },
  controlsChipsPillValue: {
    color: "#090a0a",
    fontSize: 16,
    fontFamily: "Inter-Regular",
  },
  controlsChipsPilldropDownContainer: {
    backgroundColor: "#f2f4f5",
  },
  chipFlexBox: {
    textAlign: "left",
    color: Color.colorGray_300,
  },
  framePosition1: {
    left: 24,
    position: "absolute",
  },
  framePosition: {
    left: -1,
    position: "absolute",
    overflow: "hidden",
  },
  partialsIconFlexBox: {
    marginLeft: 5.25,
    paddingVertical: 19,
    backgroundColor: Color.colorWhite,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout: {
    height: 21,
    width: 21,
  },
  frame2Position: {
    width: 343,
    left: 25,
    position: "absolute",
  },
  controlsFlexBox: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    borderRadius: Border.br_13xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
  },
  largeTitle: {
    marginTop: -18,
    fontSize: FontSize.title2_size,
    lineHeight: 36,
    fontWeight: "700",
    fontFamily: FontFamily.title2,
    width: 313,
    left: 24,
    position: "absolute",
    top: "50%",
  },
  viewsImagesAvatars: {
    marginTop: -12.2,
    right: 24,
    width: 32,
    height: 32,
    top: "50%",
    position: "absolute",
  },
  barsNavBarsLarge: {
    marginLeft: -196.5,
    top: 62,
    left: "50%",
    width: 393,
    height: 60,
    position: "absolute",
  },
  fab: {
    left: 289,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowRadius: 8,
    elevation: 8,
    justifyContent: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    alignItems: "center",
    flexDirection: "row",
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frame: {
    top: 692,
    width: 345,
    height: 56,
    overflow: "hidden",
  },
  partialsTabBarIconOnly: {
    paddingHorizontal: 54,
    paddingVertical: 19,
    backgroundColor: Color.colorWhite,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  activityIcon: {
    overflow: "hidden",
  },
  partialsTabBarIconOnly1: {
    paddingHorizontal: 53,
  },
  partialsTabBarIconOnly2: {
    paddingHorizontal: 52,
  },
  barsTabBarIconOnly: {
    shadowColor: "rgba(20, 20, 20, 0.02)",
    shadowRadius: 1.05,
    elevation: 1.05,
    paddingHorizontal: 0,
    paddingVertical: 1,
    backgroundColor: Color.colorWhite,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  barsTabBarIconOnlyParent: {
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  frame1: {
    top: 757,
    width: 394,
    height: 95,
  },
  frame2: {
    top: 133,
    height: 36,
    overflow: "hidden",
  },
  dropdownpicker: {
    backgroundColor: Color.skyLighter,
  },
  chip: {
    fontSize: FontSize.size_base,
    lineHeight: 16,
    fontFamily: FontFamily.largeNoneRegular,
  },
  controlsChipsPill1: {
    marginLeft: 8,
    backgroundColor: Color.skyLighter,
  },
  controlsChipsPillParent: {
    top: 177,
    alignItems: "center",
    flexDirection: "row",
    width: 343,
    left: 25,
  },
  frame3: {
    width: 395,
    height: 46,
    top: 0,
    left: -1,
  },
  homeScreen: {
    borderRadius: Border.br_11xl,
    backgroundColor: "#fffffd",
    width: "100%",
    height: 852,
    overflow: "hidden",
    flex: 1,
  },
});

export default HomeScreen;

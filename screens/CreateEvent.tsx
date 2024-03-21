import React, { useState } from "react";
import { Button, TextInput as RNPTextInput } from "react-native-paper";
import { StyleSheet, View, Image, TextInput, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Datepicker as RNKDatepicker } from "@ui-kitten/components";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import ModeLightSizeLargeTypeP from "../components/ModeLightSizeLargeTypeP";
import ModeLightImage from "../components/ModeLightImage";
import BarsNavBarsStandard from "../components/BarsNavBarsStandard";
import NativeStatusBar from "../components/NativeStatusBar";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const CreateEvent = () => {
  const [controlsTextFieldsOpen, setControlsTextFieldsOpen] = useState(false);
  const [controlsTextFieldsValue, setControlsTextFieldsValue] = useState();
  const [controlsTextFieldsItems, setControlsTextFieldsItems] = useState([
    { value: "Marriage", label: "Marriage" },
    { value: "Phot", label: "Phot" },
  ]);
  const [controlsTextFieldFloatin, setControlsTextFieldFloatin] =
    useState("Event Name");
  const [
    controlsTextFieldFloatin1DatePicker,
    setControlsTextFieldFloatin1DatePicker,
  ] = useState(undefined);
  const [controlsTextFields1Open, setControlsTextFields1Open] = useState(false);
  const [controlsTextFields1Value, setControlsTextFields1Value] = useState();
  const [controlsTextFields1Items, setControlsTextFields1Items] = useState([
    { value: "Confirmed", label: "Confirmed" },
    { value: "Deciding", label: "Deciding" },
    { value: "Not yet Decided", label: "Not yet Decided" },
  ]);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.createEvent}>
      <View style={styles.controlsButtonsParent}>
        <Button
          style={[styles.controlsButtons, styles.controlsButtonsFlexBox]}
          mode=""
          labelStyle={styles.controlsButtonsBtn}
          onPress={() => navigation.navigate("HomeScreen")}
          contentStyle={styles.controlsButtonsBtn1}
        >
          Cancel
        </Button>
        <ModeLightSizeLargeTypeP
          modeLightSizeLargeTypePPosition="unset"
          modeLightSizeLargeTypePBackgroundColor="unset"
          modeLightSizeLargeTypePPaddingHorizontal="unset"
          modeLightSizeLargeTypePPaddingVertical="unset"
          modeLightSizeLargeTypePFlex={1}
          modeLightSizeLargeTypePMarginLeft={8}
          modeLightSizeLargeTypePBottom="unset"
          modeLightSizeLargeTypePLeft="unset"
          onControlsButtonsPress={() => navigation.navigate("HomeScreen")}
        />
      </View>
      <ModeLightImage
        dimensionsData={require("../assets/native--home-indicator2.png")}
        modeLightIconPosition="absolute"
        modeLightIconWidth={393}
        modeLightIconHeight={36}
        modeLightIconMarginLeft={-196.5}
        modeLightIconBottom={1}
        modeLightIconLeft="50%"
        modeLightIconRight="unset"
        modeLightIconOverflow="unset"
      />
      <BarsNavBarsStandard
        createButtonText="Create Event"
        onLeftActionablePress={() => navigation.navigate("HomeScreen")}
      />
      <View style={[styles.frameParent, styles.framePosition]}>
        <View>
          <View style={styles.controlsLayout}>
            <DropDownPicker
              open={controlsTextFieldsOpen}
              setOpen={setControlsTextFieldsOpen}
              value={controlsTextFieldsValue}
              setValue={setControlsTextFieldsValue}
              placeholder="Event Category "
              items={controlsTextFieldsItems}
              labelStyle={styles.controlsTextFieldsValue}
            />
          </View>
          <TextInput
            style={[styles.controlsTextFieldFloatin, styles.controlsBorder]}
            value={controlsTextFieldFloatin}
            onChangeText={setControlsTextFieldFloatin}
            placeholder="Event Name"
            placeholderTextColor="#72777a"
          />
          <RNKDatepicker
            style={styles.controlsTextFieldFloatin1}
            placeholder={() => (
              <Text style={styles.controlsTextFieldFloatin1PlaceHolder}>
                Date
              </Text>
            )}
            date={controlsTextFieldFloatin1DatePicker}
            onSelect={setControlsTextFieldFloatin1DatePicker}
            controlStyle={styles.controlsTextFieldFloatin1Value}
          />
          <TextInput
            style={[styles.controlsTextFieldFloatin, styles.controlsBorder]}
            placeholder="Venue Address"
            placeholderTextColor="#72777a"
          />
          <View style={[styles.controlsTextFields1, styles.controlsLayout]}>
            <DropDownPicker
              open={controlsTextFields1Open}
              setOpen={setControlsTextFields1Open}
              value={controlsTextFields1Value}
              setValue={setControlsTextFields1Value}
              placeholder="Confirmed "
              items={controlsTextFields1Items}
              labelStyle={styles.controlsTextFields1Value}
            />
          </View>
        </View>
        <Text style={styles.additionalNotes}>Additional notes</Text>
      </View>
      <View style={[styles.frameGroup, styles.framePosition]}>
        <View style={styles.frameWrapper}>
          <View style={styles.controlsButtonsFlexBox}>
            <Text style={styles.presentationOfThe}>Host</Text>
          </View>
        </View>
        <View style={styles.controlsTextFieldFloatinParent}>
          <TextInput
            style={styles.controlsBorder}
            placeholder="Name"
            placeholderTextColor="#72777a"
          />
          <RNPTextInput
            style={styles.controlsTextFieldFloatin4}
            placeholder="Enter the phone number"
            mode="outlined"
            placeholderTextColor="#090a0a"
            theme={{
              fonts: {
                regular: { fontFamily: "Inter", fontWeight: "Regular" },
              },
              colors: { text: "#72777a" },
            }}
          />
          <TextInput
            style={[styles.controlsTextFieldFloatin, styles.controlsBorder]}
            placeholder="email"
            placeholderTextColor="#72777a"
          />
          <TextInput
            style={[styles.controlsTextFieldFloatin, styles.controlsBorder]}
            placeholder="Address"
            placeholderTextColor="#72777a"
          />
        </View>
      </View>
      <NativeStatusBar
        coordinatesText={require("../assets/wifi2.png")}
        dimensionsText={require("../assets/battery.png")}
        propBackgroundColor="#fff"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  controlsButtonsBtn: {
    color: "#6b4eff",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Inter-Medium",
  },
  controlsButtonsBtn1: {
    paddingHorizontal: 34,
    paddingVertical: 17,
    borderRadius: 50,
  },
  controlsButtons1Btn: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Inter-Medium",
  },
  controlsButtons1Btn1: {
    paddingHorizontal: 34,
    paddingVertical: 17,
    borderRadius: 50,
  },
  controlsTextFieldsValue: {
    color: "#72777a",
    fontSize: 16,
    fontFamily: "Inter-Regular",
  },
  controlsTextFieldFloatin1PlaceHolder: {
    fontFamily: "Inter-Regular",
    color: "#72777a",
    fontSize: 16,
  },
  controlsTextFieldFloatin1Value: {},
  controlsTextFields1Value: {
    color: "#090a0a",
    fontSize: 16,
    fontFamily: "Inter-Regular",
  },
  controlsButtonsFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  framePosition: {
    left: 24,
    position: "absolute",
  },
  controlsBorder: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.largeNoneRegular,
    borderColor: Color.skyLight,
    height: 52,
    width: 345,
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  controlsLayout: {
    height: 48,
    borderRadius: Border.br_5xs,
    width: 343,
  },
  controlsButtons: {
    borderColor: Color.primaryBase,
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  controlsButtonsParent: {
    marginLeft: -171.5,
    top: 1076,
    left: "50%",
    flexDirection: "row",
    position: "absolute",
    width: 343,
  },
  controlsTextFieldFloatin: {
    marginTop: 16,
  },
  controlsTextFieldFloatin1: {
    marginTop: 16,
  },
  controlsTextFields1: {
    marginTop: 16,
  },
  additionalNotes: {
    fontSize: FontSize.size_base_8,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: FontFamily.largeNoneMedium,
    color: Color.primaryBase,
    marginTop: 8,
    textAlign: "left",
    width: 343,
  },
  frameParent: {
    top: 129,
    alignItems: "flex-end",
  },
  presentationOfThe: {
    fontSize: 15,
    fontWeight: "700",
    fontFamily: FontFamily.title2,
    color: Color.colorGray_200,
    textAlign: "left",
  },
  frameWrapper: {
    width: 252,
  },
  controlsTextFieldFloatin4: {
    marginTop: 16,
    height: 52,
    width: 345,
    borderRadius: 8,
    borderStyle: "solid",
  },
  controlsTextFieldFloatinParent: {
    marginTop: 8,
  },
  frameGroup: {
    top: 465,
  },
  createEvent: {
    borderRadius: Border.br_11xl,
    width: "100%",
    height: 1163,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default CreateEvent;

import React, { useState } from "react";
import { Button, TextInput as RNPTextInput } from "react-native-paper";
import { StyleSheet, View, Image, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Button as RNKButton } from "@ui-kitten/components";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import ModeLightSizeLargeTypeP from "../components/ModeLightSizeLargeTypeP";
import ModeLightImage from "../components/ModeLightImage";
import BarsNavBarsStandard from "../components/BarsNavBarsStandard";
import NativeStatusBar from "../components/NativeStatusBar";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const CreateOccasions = () => {
  const [controlsTextFieldsOpen, setControlsTextFieldsOpen] = useState(false);
  const [controlsTextFieldsValue, setControlsTextFieldsValue] = useState();
  const [controlsTextFieldsItems, setControlsTextFieldsItems] = useState([
    { value: "Haldi", label: "Haldi" },
    { value: "Bridal Shower", label: "Bridal Shower" },
    { value: "", label: "" },
  ]);
  const [controlsTextFields1Open, setControlsTextFields1Open] = useState(false);
  const [controlsTextFields1Value, setControlsTextFields1Value] =
    useState("Choose a number");
  const [controlsTextFields1Items, setControlsTextFields1Items] = useState([
    { value: "<5", label: "<5" },
    { value: "", label: "" },
  ]);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.createOccasions}>
      <View style={styles.controlsButtonsParent}>
        <Button
          style={styles.controlsButtons}
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
        modeLightIconBottom={0}
        modeLightIconLeft="50%"
        modeLightIconRight="unset"
        modeLightIconOverflow="unset"
      />
      <BarsNavBarsStandard
        createButtonText="Create Occasion"
        propMarginLeft={-69.5}
        onLeftActionablePress={() => navigation.navigate("Occasions")}
      />
      <View style={styles.frameParent}>
        <View>
          <View style={styles.controlsLayout1}>
            <DropDownPicker
              open={controlsTextFieldsOpen}
              setOpen={setControlsTextFieldsOpen}
              value={controlsTextFieldsValue}
              setValue={setControlsTextFieldsValue}
              placeholder="Occasion Name"
              items={controlsTextFieldsItems}
              labelStyle={styles.controlsTextFieldsValue}
            />
          </View>
          <RNPTextInput
            style={[styles.controlsTextFieldFloatin, styles.controlsLayout]}
            mode="outlined"
            placeholderTextColor="#72777a"
            theme={{
              fonts: {
                regular: { fontFamily: "Inter", fontWeight: "Regular" },
              },
              colors: { text: "#72777a" },
            }}
          />
          <RNPTextInput
            style={[styles.controlsTextFieldFloatin, styles.controlsLayout]}
            mode="outlined"
            placeholderTextColor="#72777a"
            theme={{
              fonts: {
                regular: { fontFamily: "Inter", fontWeight: "Regular" },
              },
              colors: { text: "#72777a" },
            }}
          />
          <RNPTextInput
            style={[styles.controlsTextFieldFloatin2, styles.controlsLayout]}
            placeholder="Venue Map Link"
            mode="flat"
            placeholderTextColor="#72777a"
            theme={{
              fonts: {
                regular: { fontFamily: "Inter", fontWeight: "Regular" },
              },
              colors: { text: "#72777a" },
            }}
          />
          <View
            style={[styles.controlsTextFieldFloatin2, styles.controlsLayout]}
          >
            <View
              style={[styles.partialsTextFieldFloatin, styles.textPosition]}
            >
              <Text style={[styles.text, styles.textPosition]}>Date</Text>
            </View>
          </View>
          <RNPTextInput
            style={[styles.controlsTextFieldFloatin, styles.controlsLayout]}
            mode="outlined"
            placeholderTextColor="#72777a"
            theme={{
              fonts: {
                regular: { fontFamily: "Inter", fontWeight: "Regular" },
              },
              colors: { text: "#72777a" },
            }}
          />
          <View style={[styles.controlsTextFields1, styles.controlsLayout1]}>
            <DropDownPicker
              open={controlsTextFields1Open}
              setOpen={setControlsTextFields1Open}
              value={controlsTextFields1Value}
              setValue={setControlsTextFields1Value}
              placeholder="Team Members"
              items={controlsTextFields1Items}
              labelStyle={styles.controlsTextFields1Value}
            />
          </View>
        </View>
        <RNKButton
          style={styles.additionalNotes}
          title="Additional notes"
          appearance="ghost"
          color="#6b4eff"
          textStyle={styles.additionalNotesText}
        >
          Additional notes
        </RNKButton>
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
  controlsTextFields1Value: {
    color: "#72777a",
    fontSize: 16,
    fontFamily: "Inter-Regular",
  },
  additionalNotesText: {
    fontWeight: "500",
    fontFamily: "Inter-Medium",
  },
  controlsLayout: {
    height: 52,
    width: 345,
    borderRadius: 8,
    marginTop: 16,
    borderStyle: "solid",
  },
  textPosition: {
    height: 17,
    top: "50%",
    position: "absolute",
  },
  controlsLayout1: {
    height: 48,
    borderRadius: Border.br_5xs,
    width: 343,
  },
  controlsButtons: {
    borderColor: Color.primaryBase,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
    flex: 1,
  },
  controlsButtonsParent: {
    marginLeft: -171.5,
    top: 765,
    left: "50%",
    flexDirection: "row",
    width: 343,
    position: "absolute",
  },
  controlsTextFieldFloatin: {
    marginTop: 16,
  },
  controlsTextFieldFloatin2: {
    borderColor: Color.skyLight,
    marginTop: 16,
    borderWidth: 1,
    backgroundColor: Color.colorWhite,
    height: 52,
    width: 345,
    borderRadius: 8,
  },
  text: {
    marginTop: -8.4,
    left: 0,
    fontSize: FontSize.size_base,
    lineHeight: 16,
    fontFamily: FontFamily.largeNoneRegular,
    color: Color.colorGray_100,
    textAlign: "left",
    width: 310,
  },
  partialsTextFieldFloatin: {
    marginTop: -9.65,
    right: 19,
    left: 17,
  },
  controlsTextFields1: {
    marginTop: 16,
  },
  additionalNotes: {
    marginTop: 8,
  },
  frameParent: {
    top: 129,
    left: 24,
    alignItems: "flex-end",
    position: "absolute",
  },
  createOccasions: {
    borderRadius: Border.br_11xl,
    width: "100%",
    height: 852,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default CreateOccasions;

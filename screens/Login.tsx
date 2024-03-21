import * as React from "react";
import { Text, StyleSheet, Image, View, TextInput } from "react-native";
import { Input } from "@rneui/themed";
import { Button } from "react-native-paper";
import ModeLightImage from "../components/ModeLightImage";
import NativeStatusBar from "../components/NativeStatusBar";
import NativeKeyboard from "../components/NativeKeyboard";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.login}>
      <View style={styles.barsNavBarsStandard}>
        <Text style={[styles.title, styles.titleLayout]}>Log in</Text>
        <Text style={[styles.rightActionable, styles.actionablePosition]}>
          Forgot Password
        </Text>
        <Image
          style={[styles.leftActionableIcon, styles.actionablePosition]}
          resizeMode="cover"
          source={require("../assets/left-actionable1.png")}
        />
      </View>
      <View style={[styles.frame, styles.framePosition]}>
        <ModeLightImage
          dimensionsData={require("../assets/native--home-indicator1.png")}
          modeLightIconPosition="absolute"
          modeLightIconWidth={393}
          modeLightIconHeight={36}
          modeLightIconMarginLeft={-196.75}
          modeLightIconBottom={0}
          modeLightIconLeft="50%"
          modeLightIconRight="unset"
          modeLightIconOverflow="unset"
        />
        <NativeStatusBar
          coordinatesText={require("../assets/wifi.png")}
          dimensionsText={require("../assets/battery.png")}
        />
      </View>
      <View style={[styles.frame1, styles.framePosition]}>
        <NativeKeyboard
          dimensionsCode={require("../assets/dictation1.png")}
          productDimensionsCode={require("../assets/emoji1.png")}
          dimensionCoordinates={require("../assets/rectangle4.png")}
          dimensionCoordinatesText={require("../assets/rectangle5.png")}
          productDimensions={require("../assets/rectangle6.png")}
          dimensionCoordinatesText2={require("../assets/rectangle7.png")}
          dimensionCoordinatesText3={require("../assets/delete-button1.png")}
          productDimensions2={require("../assets/shift1.png")}
        />
        <Input
          style={styles.controlsBorder}
          value="Email"
          minLength={25}
          required={false}
          inputStyle={{ color: "#72777a" }}
          containerStyle={styles.controlsTextFieldFloatinInput}
        />
        <TextInput
          style={[styles.controlsTextFieldFloatin1, styles.controlsBorder]}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#72777a"
        />
        <Button
          style={styles.controlsButtons}
          mode="elevated"
          labelStyle={styles.controlsButtonsBtn}
          onPress={() => navigation.navigate("LoginEmail")}
          contentStyle={styles.controlsButtonsBtn1}
        >
          Log in
        </Button>
        <Text
          style={[styles.byContinuingYouContainer, styles.forgotPasswordLayout]}
        >
          <Text style={styles.byContinuingYouContainer1}>
            <Text
              style={styles.byContinuingYou}
            >{`By continuing, you agree to our `}</Text>
            <Text style={styles.termsOfService}>Terms of Service</Text>
            <Text style={styles.byContinuingYou}>{` and `}</Text>
            <Text style={styles.termsOfService}>Privacy Policy</Text>
            <Text style={styles.byContinuingYou}>.</Text>
          </Text>
        </Text>
        <Image
          style={[styles.logosIcon, styles.titlePosition]}
          resizeMode="cover"
          source={require("../assets/logos4.png")}
        />
        <Text style={[styles.forgotPassword, styles.forgotPasswordLayout]}>
          Forgot password?
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  controlsTextFieldFloatinInput: {
    left: 24,
    width: 345,
    height: 52,
    top: 158,
    position: "absolute",
  },
  controlsButtonsBtn: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Inter-Medium",
  },
  controlsButtonsBtn1: {
    borderRadius: 50,
    height: 50,
  },
  titleLayout: {
    lineHeight: 19,
    fontSize: FontSize.size_lg_9,
    marginTop: -9.6,
  },
  actionablePosition: {
    display: "none",
    top: "50%",
    position: "absolute",
  },
  framePosition: {
    width: 393,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  controlsBorder: {
    borderWidth: 1,
    borderColor: Color.skyLight,
    borderStyle: "solid",
    borderRadius: 8,
    backgroundColor: Color.colorWhite,
  },
  forgotPasswordLayout: {
    width: 343,
    textAlign: "left",
    lineHeight: 17,
    left: 25,
    position: "absolute",
  },
  titlePosition: {
    left: "50%",
    position: "absolute",
  },
  title: {
    marginLeft: -27.65,
    textAlign: "center",
    color: Color.colorGray_300,
    fontFamily: FontFamily.largeNoneRegular,
    left: "50%",
    position: "absolute",
    top: "50%",
    lineHeight: 19,
    fontSize: FontSize.size_lg_9,
    marginTop: -9.6,
  },
  rightActionable: {
    right: 26,
    textAlign: "right",
    color: Color.primaryBase,
    fontFamily: FontFamily.largeNoneMedium,
    fontWeight: "500",
    lineHeight: 19,
    fontSize: FontSize.size_lg_9,
    marginTop: -9.6,
    display: "none",
  },
  leftActionableIcon: {
    marginTop: -12.8,
    left: 19,
    width: 25,
    height: 25,
    overflow: "hidden",
  },
  barsNavBarsStandard: {
    top: 147,
    right: 0,
    height: 50,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  frame: {
    top: 0,
    height: 852,
  },
  controlsTextFieldFloatin1: {
    top: 224,
    left: 24,
    width: 345,
    height: 52,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.largeNoneRegular,
    position: "absolute",
    borderWidth: 1,
    borderColor: Color.skyLight,
    borderStyle: "solid",
    borderRadius: 8,
  },
  controlsButtons: {
    right: 25,
    bottom: 358,
    left: 25,
    position: "absolute",
  },
  byContinuingYou: {
    color: Color.colorGray_300,
  },
  termsOfService: {
    color: Color.primaryBase,
  },
  byContinuingYouContainer1: {
    width: "100%",
  },
  byContinuingYouContainer: {
    bottom: 429,
    fontSize: FontSize.size_smi_6,
    display: "flex",
    alignItems: "flex-end",
    fontFamily: FontFamily.largeNoneRegular,
  },
  logosIcon: {
    marginLeft: -83.45,
    width: 167,
    height: 34,
    top: 0,
  },
  forgotPassword: {
    top: 291,
    fontSize: FontSize.size_base_8,
    color: Color.primaryBase,
    fontFamily: FontFamily.largeNoneMedium,
    fontWeight: "500",
  },
  frame1: {
    top: 80,
    height: 1091,
  },
  login: {
    borderRadius: Border.br_11xl,
    flex: 1,
    overflow: "hidden",
    height: 852,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Login;

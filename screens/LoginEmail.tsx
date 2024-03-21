import * as React from "react";
import { Text, StyleSheet, View, Pressable, StatusBar } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import NativeKeyboard from "../components/NativeKeyboard";
import ModeLight from "../components/ModeLight";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const LoginEmail = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.loginEmail}>
      <Pressable
        style={[styles.controlsButtons, styles.barsLayout]}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Text style={[styles.text, styles.textClr]}>Log in</Text>
      </Pressable>
      <View style={[styles.controlsTextFieldFloatin, styles.controlsBorder]}>
        <View style={[styles.partialsTextFieldFloatin, styles.textPosition]}>
          <Text style={[styles.text1, styles.text1Position]}>Email</Text>
        </View>
      </View>
      <View style={[styles.controlsTextFieldFloatin1, styles.controlsBorder]}>
        <View style={[styles.partialsTextFieldFloatin, styles.textPosition]}>
          <Text style={[styles.text1, styles.text1Position]}>Password</Text>
        </View>
      </View>
      <Text
        style={[styles.byContinuingYouContainer, styles.forgotPasswordPosition]}
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
      <Text style={[styles.forgotPassword, styles.text4Typo]}>
        Forgot password?
      </Text>
      <View style={[styles.barsNavBarsStandard, styles.barsLayout]}>
        <Text style={[styles.title, styles.titleLayout]}>Log in</Text>
        <View style={[styles.rightActionable, styles.actionablePosition]}>
          <Text style={[styles.text4, styles.text4Typo]}>Action</Text>
        </View>
        <Text style={[styles.leftActionable, styles.actionablePosition]}>
          Action
        </Text>
      </View>
      <NativeKeyboard
        dimensionsCode={require("../assets/dictation.png")}
        productDimensionsCode={require("../assets/emoji.png")}
        dimensionCoordinates={require("../assets/rectangle.png")}
        dimensionCoordinatesText={require("../assets/rectangle1.png")}
        productDimensions={require("../assets/rectangle2.png")}
        dimensionCoordinatesText2={require("../assets/rectangle3.png")}
        dimensionCoordinatesText3={require("../assets/delete-button.png")}
        productDimensions2={require("../assets/shift.png")}
      />
      <ModeLight
        modeLightPosition="absolute"
        modeLightHeight={46}
        modeLightTop={0}
        modeLightRight={0}
        modeLightLeft={0}
        modeLightMarginLeft="unset"
        modeLightWidth="unset"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  barsLayout: {
    height: 50,
    position: "absolute",
  },
  textClr: {
    color: Color.colorWhite,
    textAlign: "center",
  },
  controlsBorder: {
    height: 52,
    borderWidth: 1,
    borderColor: Color.skyLight,
    borderStyle: "solid",
    borderRadius: 8,
    left: 24,
    right: 24,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  textPosition: {
    top: "50%",
    position: "absolute",
  },
  text1Position: {
    fontFamily: FontFamily.largeNoneRegular,
    top: "50%",
    position: "absolute",
  },
  forgotPasswordPosition: {
    width: 343,
    textAlign: "left",
    left: 25,
    position: "absolute",
  },
  text4Typo: {
    fontSize: FontSize.size_base_8,
    lineHeight: 17,
    fontFamily: FontFamily.largeNoneMedium,
    fontWeight: "500",
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
  text: {
    marginTop: -8.6,
    marginLeft: -23.75,
    textAlign: "center",
    fontFamily: FontFamily.largeNoneMedium,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.size_base,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  controlsButtons: {
    right: 25,
    bottom: 331,
    backgroundColor: Color.primaryBase,
    borderRadius: 50,
    left: 25,
  },
  text1: {
    marginTop: -8.4,
    color: Color.colorGray_100,
    width: 310,
    textAlign: "left",
    left: 0,
    height: 17,
    lineHeight: 16,
    fontSize: FontSize.size_base,
  },
  partialsTextFieldFloatin: {
    marginTop: -9.65,
    right: 19,
    left: 17,
    height: 17,
  },
  controlsTextFieldFloatin: {
    top: 112,
  },
  controlsTextFieldFloatin1: {
    top: 177,
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
    bottom: 401,
    fontSize: FontSize.size_smi_6,
    display: "flex",
    alignItems: "flex-end",
    lineHeight: 17,
    width: 343,
    fontFamily: FontFamily.largeNoneRegular,
  },
  forgotPassword: {
    top: 246,
    color: Color.primaryBase,
    width: 343,
    textAlign: "left",
    left: 25,
    position: "absolute",
  },
  title: {
    marginLeft: -27.65,
    color: Color.colorGray_300,
    fontFamily: FontFamily.largeNoneRegular,
    top: "50%",
    position: "absolute",
    textAlign: "center",
    left: "50%",
  },
  text4: {
    textAlign: "center",
    color: Color.colorWhite,
  },
  rightActionable: {
    marginTop: -17,
    right: 26,
    justifyContent: "center",
    paddingHorizontal: 17,
    paddingVertical: 8,
    alignItems: "flex-end",
    backgroundColor: Color.primaryBase,
    borderRadius: 50,
  },
  leftActionable: {
    lineHeight: 19,
    fontSize: FontSize.size_lg_9,
    marginTop: -9.6,
    color: Color.primaryBase,
    textAlign: "left",
    fontFamily: FontFamily.largeNoneMedium,
    fontWeight: "500",
    left: 25,
  },
  barsNavBarsStandard: {
    top: 46,
    right: 0,
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  loginEmail: {
    borderRadius: Border.br_11xl,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default LoginEmail;

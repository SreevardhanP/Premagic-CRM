import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import ModeLightImage from "../components/ModeLightImage";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import ProfileContainer from "../components/ProfileContainer";
import NativeStatusBar from "../components/NativeStatusBar";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Settings = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.settings}>
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
      <View style={[styles.barsNavBarsStandard, styles.barsPosition]}>
        <Text style={styles.settings1}>Settings</Text>
        <Pressable
          style={[styles.leftActionable, styles.actionableLayout]}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Image
            style={[styles.icon, styles.iconSpaceBlock]}
            resizeMode="cover"
            source={require("../assets/left-actionable2.png")}
          />
        </Pressable>
        <Image
          style={[styles.rightActionable2, styles.iconSpaceBlock]}
          resizeMode="cover"
          source={require("../assets/right-actionable-2.png")}
        />
      </View>
      <View style={[styles.viewsTablesParent, styles.barsPosition]}>
        <ProfileContainer
          dimensionsCode={require("../assets/mdicompany.png")}
          contentDescription="Company profile"
          productDimensionsCode={require("../assets/left-actionable3.png")}
        />
        <View style={styles.viewsDividers}>
          <View style={styles.divider} />
        </View>
        <ProfileContainer
          dimensionsCode={require("../assets/bxphotoalbum.png")}
          contentDescription="Signature album design"
          productDimensionsCode={require("../assets/left-actionable4.png")}
          propWidth={23}
          propHeight={23}
        />
        <View style={styles.viewsDividers}>
          <View style={styles.divider} />
        </View>
        <ProfileContainer
          dimensionsCode={require("../assets/materialsymbolslightleaderboardoutlinerounded.png")}
          contentDescription="Lead management"
          productDimensionsCode={require("../assets/left-actionable5.png")}
          propWidth={23}
          propHeight={23}
        />
        <View style={styles.viewsDividers}>
          <View style={styles.divider} />
        </View>
        <ProfileContainer
          dimensionsCode={require("../assets/carbonevent.png")}
          contentDescription="Event settings"
          productDimensionsCode={require("../assets/left-actionable6.png")}
          propWidth={23}
          propHeight={23}
        />
        <View style={styles.viewsDividers}>
          <View style={styles.divider} />
        </View>
        <ProfileContainer
          dimensionsCode={require("../assets/materialsymbolsattachmoney.png")}
          contentDescription="Event finance"
          productDimensionsCode={require("../assets/left-actionable7.png")}
          propWidth={23}
          propHeight={23}
        />
        <View style={styles.viewsDividers}>
          <View style={styles.divider} />
        </View>
        <ProfileContainer
          dimensionsCode={require("../assets/materialsymbolslightfolderoutline.png")}
          contentDescription={`Signature album & selection folder`}
          productDimensionsCode={require("../assets/left-actionable8.png")}
          propWidth={23}
          propHeight={23}
        />
        <View style={styles.viewsDividers}>
          <View style={styles.divider} />
        </View>
        <ProfileContainer
          dimensionsCode={require("../assets/streamlineweb.png")}
          contentDescription="Photo distribution"
          productDimensionsCode={require("../assets/left-actionable9.png")}
          propWidth={19}
          propHeight={19}
        />
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
  barsPosition: {
    left: "50%",
    position: "absolute",
  },
  actionableLayout: {
    height: 24,
    width: 24,
    top: "50%",
    position: "absolute",
  },
  iconSpaceBlock: {
    marginTop: -12.15,
    overflow: "hidden",
  },
  settings1: {
    marginTop: -9.15,
    marginLeft: -34.5,
    fontSize: FontSize.largeNoneMedium_size,
    lineHeight: 18,
    fontFamily: FontFamily.largeNoneRegular,
    color: Color.colorGray_300,
    textAlign: "center",
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
    marginTop: -12.15,
  },
  leftActionable: {
    left: 18,
  },
  rightActionable2: {
    right: 60,
    display: "none",
    height: 24,
    width: 24,
    top: "50%",
    position: "absolute",
  },
  barsNavBarsStandard: {
    marginLeft: -196.5,
    top: 64,
    width: 393,
    height: 50,
    backgroundColor: Color.colorWhite,
    left: "50%",
  },
  divider: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: Color.skyLighter,
    position: "absolute",
  },
  viewsDividers: {
    width: 375,
    height: 1,
  },
  viewsTablesParent: {
    marginLeft: -187.5,
    top: 130,
  },
  settings: {
    borderRadius: Border.br_11xl,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Settings;

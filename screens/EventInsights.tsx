import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import ModeLightImage from "../components/ModeLightImage";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import NativeStatusBar from "../components/NativeStatusBar";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const EventInsights = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.eventInsights, styles.iconLayout]}>
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
        <Text style={[styles.title, styles.titlePosition]}>Event Insights</Text>
        <Text
          style={[styles.rightActionable, styles.registrationTypo]}
        >{` `}</Text>
        <Pressable
          style={styles.leftActionable}
          onPress={() => navigation.navigate("EventDetails")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/left-actionable.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.gallery, styles.barsPosition]}>
        <View style={styles.imageLayout}>
          <Text style={[styles.registration, styles.textFlexBox]}>
            Registration
          </Text>
          <Text style={[styles.text, styles.textFlexBox]}>180,00</Text>
        </View>
        <View style={[styles.image15, styles.imageLayout]}>
          <Text style={[styles.registration, styles.textFlexBox]}>Photos</Text>
          <Text style={[styles.text, styles.textFlexBox]}>301,00</Text>
        </View>
        <View style={[styles.image15, styles.imageLayout]}>
          <Text style={[styles.registration, styles.textFlexBox]}>Views</Text>
          <Text style={[styles.text, styles.textFlexBox]}>2,093,00</Text>
        </View>
        <View style={[styles.image15, styles.imageLayout]}>
          <Text style={[styles.registration, styles.textFlexBox]}>Shares</Text>
          <Text style={[styles.text, styles.textFlexBox]}>35,00</Text>
        </View>
        <View style={[styles.image15, styles.imageLayout]}>
          <Text style={[styles.registration, styles.textFlexBox]}>
            Downloads
          </Text>
          <Text style={[styles.text, styles.textFlexBox]}>208,00</Text>
        </View>
        <View style={[styles.image15, styles.imageLayout]}>
          <Text style={[styles.registration, styles.textFlexBox]}>
            Bulk Downloads
          </Text>
          <Text style={[styles.text, styles.textFlexBox]}>0</Text>
        </View>
        <View style={[styles.image15, styles.imageLayout]}>
          <Text style={[styles.registration, styles.textFlexBox]}>
            Photo Delivey
          </Text>
          <Text style={[styles.text, styles.textFlexBox]}>79.7%</Text>
        </View>
        <View style={[styles.image15, styles.imageLayout]}>
          <Text style={[styles.registration, styles.textFlexBox]}>ROI</Text>
          <Text style={[styles.text, styles.textFlexBox]}>$ 1,498,039</Text>
        </View>
        <View style={[styles.image15, styles.imageLayout]}>
          <Text style={[styles.registration, styles.textFlexBox]}>
            Face Search
          </Text>
          <Text style={[styles.text, styles.textFlexBox]}>247,040</Text>
        </View>
      </View>
      <NativeStatusBar
        coordinatesText={require("../assets/wifi1.png")}
        dimensionsText={require("../assets/battery2.png")}
        propBackgroundColor="#fff"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  barsPosition: {
    position: "absolute",
    left: "50%",
  },
  titlePosition: {
    lineHeight: 18,
    marginTop: -9.15,
    fontSize: FontSize.largeNoneMedium_size,
    top: "50%",
    position: "absolute",
  },
  registrationTypo: {
    fontFamily: FontFamily.largeNoneMedium,
    fontWeight: "500",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  imageLayout: {
    padding: Padding.p_base,
    justifyContent: "center",
    height: 102,
    width: 176,
    borderWidth: 1,
    borderColor: Color.skyLight,
    borderStyle: "solid",
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  title: {
    marginLeft: -59.5,
    fontFamily: FontFamily.largeNoneRegular,
    color: Color.colorGray_300,
    textAlign: "center",
    left: "50%",
  },
  rightActionable: {
    right: 24,
    color: Color.primaryBase,
    textAlign: "right",
    lineHeight: 18,
    marginTop: -9.15,
    fontSize: FontSize.largeNoneMedium_size,
    top: "50%",
    position: "absolute",
  },
  icon: {
    marginTop: -12.15,
    height: "100%",
  },
  leftActionable: {
    left: 18,
    width: 24,
    height: 24,
    top: "50%",
    position: "absolute",
  },
  barsNavBarsStandard: {
    marginLeft: -196.5,
    top: 62,
    width: 393,
    height: 50,
    left: "50%",
    backgroundColor: Color.colorWhite,
  },
  registration: {
    fontSize: FontSize.size_sm,
    letterSpacing: 0.2,
    lineHeight: 18,
    fontFamily: FontFamily.largeNoneMedium,
    fontWeight: "500",
  },
  text: {
    letterSpacing: 0.3,
    lineHeight: 23,
    fontWeight: "700",
    fontFamily: FontFamily.title2,
    marginTop: 4,
    fontSize: FontSize.largeNoneMedium_size,
    color: Color.colorBlack,
  },
  image15: {
    marginLeft: 8,
  },
  gallery: {
    marginLeft: -177.5,
    top: 128,
    width: 356,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    left: "50%",
  },
  eventInsights: {
    borderRadius: Border.br_11xl,
    flex: 1,
    height: 852,
    backgroundColor: Color.colorWhite,
  },
});

export default EventInsights;

import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

export type EventContainer1Type = {
  productCode?: ImageSourcePropType;
};

const EventContainer1 = ({ productCode }: EventContainer1Type) => {
  return (
    <View style={[styles.event, styles.eventSpaceBlock]}>
      <View style={styles.today600PmWrapper}>
        <Text style={[styles.today600, styles.todayTypo]}>#EV-1</Text>
      </View>
      <View style={styles.eventSpaceBlock}>
        <View style={styles.icneventsmeetingParent}>
          <Image
            style={styles.icneventsmeetingIcon}
            resizeMode="cover"
            source={productCode}
          />
          <View
            style={[styles.presentationOfTheWrapper, styles.frameParentFlexBox]}
          >
            <Text style={styles.presentationOfThe}>Sample event</Text>
          </View>
        </View>
      </View>
      <View style={[styles.frameParent, styles.frameParentFlexBox]}>
        <View style={[styles.today600PmContainer, styles.frameParentFlexBox]}>
          <Text style={[styles.today6001, styles.todayTypo]}>Confirmed</Text>
        </View>
        <Text style={styles.today6002}>3 Occasions</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  eventSpaceBlock: {
    marginTop: 8,
    alignSelf: "stretch",
  },
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
  icneventsmeetingIcon: {
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
  icneventsmeetingParent: {
    flexDirection: "row",
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
  },
});

export default EventContainer1;

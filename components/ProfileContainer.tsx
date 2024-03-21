import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type ProfileContainerType = {
  dimensionsCode?: ImageSourcePropType;
  contentDescription?: string;
  productDimensionsCode?: ImageSourcePropType;

  /** Style props */
  propWidth?: number | string;
  propHeight?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ProfileContainer = ({
  dimensionsCode,
  contentDescription,
  productDimensionsCode,
  propWidth,
  propHeight,
}: ProfileContainerType) => {
  const mdicompanyIconStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
      ...getStyleValue("height", propHeight),
    };
  }, [propWidth, propHeight]);

  return (
    <View style={styles.viewsTables}>
      <View style={[styles.partialsTablesParent, styles.partialsFlexBox]}>
        <View style={[styles.partialsTables, styles.partialsFlexBox]}>
          <Image
            style={[styles.mdicompanyIcon, mdicompanyIconStyle]}
            resizeMode="cover"
            source={dimensionsCode}
          />
          <Text style={styles.companyProfile}>{contentDescription}</Text>
        </View>
        <Image
          style={styles.mdicompanyIcon}
          resizeMode="cover"
          source={productDimensionsCode}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  partialsFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  mdicompanyIcon: {
    width: 23,
    height: 23,
    overflow: "hidden",
  },
  companyProfile: {
    fontSize: FontSize.size_base_3,
    lineHeight: 19,
    fontFamily: FontFamily.largeNoneRegular,
    color: Color.colorGray_300,
    textAlign: "left",
    marginLeft: 7.63,
  },
  partialsTables: {
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: 10,
  },
  partialsTablesParent: {
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  viewsTables: {
    backgroundColor: Color.colorWhite,
    width: 375,
    paddingHorizontal: 23,
    paddingVertical: 11,
  },
});

export default ProfileContainer;

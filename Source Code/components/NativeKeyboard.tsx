import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageSourcePropType,
} from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

export type NativeKeyboardType = {
  dimensionsCode?: ImageSourcePropType;
  productDimensionsCode?: ImageSourcePropType;
  dimensionCoordinates?: ImageSourcePropType;
  dimensionCoordinatesText?: ImageSourcePropType;
  productDimensions?: ImageSourcePropType;
  dimensionCoordinatesText2?: ImageSourcePropType;
  dimensionCoordinatesText3?: ImageSourcePropType;
  productDimensions2?: ImageSourcePropType;
};

const NativeKeyboard = ({
  dimensionsCode,
  productDimensionsCode,
  dimensionCoordinates,
  dimensionCoordinatesText,
  productDimensions,
  dimensionCoordinatesText2,
  dimensionCoordinatesText3,
  productDimensions2,
}: NativeKeyboardType) => {
  return (
    <View style={styles.nativeKeyboard}>
      <View style={[styles.background, styles.backgroundPosition]}>
        <View style={[styles.background1, styles.backgroundPosition]} />
      </View>
      <View style={[styles.homeIndicator, styles.backgroundPosition]}>
        <View style={[styles.homeIndicator1, styles.keysPosition]} />
      </View>
      <View style={[styles.keys, styles.keysPosition]}>
        <Image
          style={styles.dictationIcon}
          resizeMode="cover"
          source={dimensionsCode}
        />
        <Image
          style={styles.emojiIcon}
          resizeMode="cover"
          source={productDimensionsCode}
        />
        <View style={[styles.return, styles.viewLayout1]}>
          <Image
            style={[styles.rectangleIcon, styles.rectanglePosition]}
            resizeMode="cover"
            source={dimensionCoordinates}
          />
          <Text style={styles.label}>Go</Text>
        </View>
        <View style={[styles.space, styles.spaceLayout]}>
          <Image
            style={[styles.rectangleIcon, styles.rectanglePosition]}
            resizeMode="cover"
            source={dimensionCoordinatesText}
          />
          <Text style={[styles.label1, styles.labelTypo]}>space</Text>
        </View>
        <View style={[styles.view, styles.viewLayout]}>
          <Image
            style={[styles.rectangleIcon, styles.rectanglePosition]}
            resizeMode="cover"
            source={productDimensions}
          />
          <Text style={[styles.label2, styles.viewLayout]}>123</Text>
        </View>
        <View style={[styles.delete, styles.shiftLayout]}>
          <View style={[styles.keyLight, styles.shiftLayout]}>
            <Image
              style={[styles.rectangleIcon, styles.rectanglePosition]}
              resizeMode="cover"
              source={dimensionCoordinatesText2}
            />
            <Text style={[styles.label3, styles.shiftLayout]}>{` `}</Text>
          </View>
          <Image
            style={styles.deleteButtonIcon}
            resizeMode="cover"
            source={dimensionCoordinatesText3}
          />
        </View>
        <View style={[styles.shift, styles.shiftLayout]}>
          <View style={[styles.keyLight, styles.shiftLayout]}>
            <View style={[styles.rectangle, styles.rectanglePosition]} />
            <Text style={[styles.symbol, styles.symbolTypo]}>{` `}</Text>
          </View>
          <Image
            style={[styles.shiftIcon, styles.keysPosition]}
            resizeMode="cover"
            source={productDimensions2}
          />
        </View>
        <View style={[styles.m, styles.mLayout]}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <Text style={[styles.symbol1, styles.symbolTypo]}>M</Text>
        </View>
        <View style={[styles.n, styles.mLayout]}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <Text style={[styles.symbol2, styles.symbolTypo]}>N</Text>
        </View>
        <View style={[styles.b, styles.mLayout]}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <Text style={[styles.symbol3, styles.symbolTypo]}>B</Text>
        </View>
        <View style={[styles.v, styles.mLayout]}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <Text style={[styles.symbol3, styles.symbolTypo]}>V</Text>
        </View>
        <View style={[styles.c, styles.mLayout]}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <Text style={[styles.symbol2, styles.symbolTypo]}>C</Text>
        </View>
        <View style={[styles.x, styles.mLayout]}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <Text style={[styles.symbol3, styles.symbolTypo]}>X</Text>
        </View>
        <View style={[styles.z, styles.mLayout]}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <Text style={[styles.symbol7, styles.symbolTypo]}>Z</Text>
        </View>
        <View style={[styles.l, styles.lPosition]}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <Text style={[styles.symbol8, styles.symbolTypo]}>L</Text>
        </View>
        <View style={[styles.k, styles.lPosition]}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <Text style={[styles.symbol3, styles.symbolTypo]}>K</Text>
        </View>
        <View style={[styles.j, styles.lPosition]}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <Text style={[styles.symbol10, styles.symbolTypo]}>J</Text>
        </View>
        <View style={[styles.h, styles.lPosition]}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <Text style={[styles.symbol2, styles.symbolTypo]}>H</Text>
        </View>
        <View style={[styles.g, styles.lPosition]}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <Text style={[styles.symbol2, styles.symbolTypo]}>G</Text>
        </View>
        <View style={[styles.f, styles.lPosition]}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <Text style={[styles.symbol7, styles.symbolTypo]}>F</Text>
        </View>
        <View style={[styles.d, styles.lPosition]}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <Text style={[styles.symbol3, styles.symbolTypo]}>D</Text>
        </View>
        <View style={[styles.s, styles.lPosition]}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <Text style={[styles.symbol3, styles.symbolTypo]}>S</Text>
        </View>
        <View style={[styles.a, styles.lPosition]}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <Text style={[styles.symbol3, styles.symbolTypo]}>A</Text>
        </View>
        <View style={[styles.p, styles.mLayout]}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <Text style={[styles.symbol7, styles.symbolTypo]}>P</Text>
        </View>
        <View style={[styles.o, styles.mLayout]}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <Text style={[styles.symbol18, styles.symbolTypo]}>O</Text>
        </View>
        <View style={[styles.i, styles.mLayout]}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <Text style={[styles.symbol19, styles.symbolTypo]}>I</Text>
        </View>
        <View style={[styles.u, styles.mLayout]}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <Text style={[styles.symbol2, styles.symbolTypo]}>U</Text>
        </View>
        <View style={[styles.y, styles.mLayout]}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <Text style={[styles.symbol3, styles.symbolTypo]}>Y</Text>
        </View>
        <View style={[styles.t, styles.mLayout]}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <Text style={[styles.symbol3, styles.symbolTypo]}>T</Text>
        </View>
        <View style={[styles.r, styles.mLayout]}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <Text style={[styles.symbol3, styles.symbolTypo]}>R</Text>
        </View>
        <View style={[styles.e, styles.mLayout]}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <Text style={[styles.symbol7, styles.symbolTypo]}>E</Text>
        </View>
        <View style={[styles.w, styles.mLayout]}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <Text style={[styles.symbol25, styles.symbolTypo]}>W</Text>
        </View>
        <View style={[styles.q, styles.mLayout]}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <Text style={[styles.symbol18, styles.symbolTypo]}>Q</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundPosition: {
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  keysPosition: {
    left: "50%",
    position: "absolute",
  },
  viewLayout1: {
    height: 44,
    left: "50%",
  },
  rectanglePosition: {
    borderRadius: 5,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
  },
  spaceLayout: {
    width: 191,
    position: "absolute",
  },
  labelTypo: {
    color: Color.colorGray_300,
    textAlign: "center",
    fontFamily: FontFamily.largeNoneRegular,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.size_base_8,
    top: "26.08%",
    left: 0,
  },
  viewLayout: {
    width: 91,
    position: "absolute",
  },
  shiftLayout: {
    width: 44,
    position: "absolute",
  },
  symbolTypo: {
    letterSpacing: -1,
    fontSize: FontSize.size_4xl_6,
    top: "50%",
    marginTop: -13.65,
    color: Color.colorGray_300,
    textAlign: "center",
    fontFamily: FontFamily.largeNoneRegular,
    position: "absolute",
  },
  mLayout: {
    width: 34,
    height: 44,
    left: "50%",
    position: "absolute",
  },
  lPosition: {
    top: 57,
    width: 34,
    height: 44,
    left: "50%",
    position: "absolute",
  },
  background1: {
    backgroundColor: Color.skyLight,
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  background: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  homeIndicator1: {
    marginLeft: -69.75,
    bottom: 9,
    borderRadius: 105,
    backgroundColor: Color.colorGray_300,
    width: 141,
    height: 5,
  },
  homeIndicator: {
    height: "11.69%",
    top: "88.34%",
    bottom: "-0.03%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  dictationIcon: {
    width: 16,
    height: 26,
  },
  emojiIcon: {
    width: 28,
    height: 28,
  },
  rectangleIcon: {
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  label: {
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.largeNoneRegular,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.size_base_8,
    top: "26.08%",
    width: 92,
    left: 0,
    position: "absolute",
  },
  return: {
    width: 92,
    height: 44,
    top: 170,
    marginLeft: 101.2,
    position: "absolute",
  },
  label1: {
    width: 191,
    position: "absolute",
  },
  space: {
    marginLeft: -96,
    height: 44,
    left: "50%",
    top: 170,
  },
  label2: {
    color: Color.colorGray_300,
    textAlign: "center",
    fontFamily: FontFamily.largeNoneRegular,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.size_base_8,
    top: "26.08%",
    left: 0,
  },
  view: {
    marginLeft: -193.6,
    height: 44,
    left: "50%",
    top: 170,
  },
  label3: {
    color: Color.colorGray_300,
    textAlign: "center",
    fontFamily: FontFamily.largeNoneRegular,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.size_base_8,
    top: "26.08%",
    left: 0,
  },
  keyLight: {
    marginLeft: -22.05,
    top: 0,
    height: 44,
    left: "50%",
  },
  deleteButtonIcon: {
    width: 24,
    height: 18,
  },
  delete: {
    marginLeft: 149.5,
    top: 113,
    height: 44,
    left: "50%",
  },
  rectangle: {
    backgroundColor: Color.colorWhite,
  },
  symbol: {
    left: "48.07%",
  },
  shiftIcon: {
    marginLeft: -9.85,
    top: 13,
    width: 20,
    height: 17,
  },
  shift: {
    top: 113,
    marginLeft: -193.6,
    height: 44,
    left: "50%",
  },
  symbol1: {
    left: "18.75%",
  },
  m: {
    marginLeft: 102.3,
    top: 113,
  },
  symbol2: {
    left: "22.02%",
  },
  n: {
    marginLeft: 62.4,
    top: 113,
  },
  symbol3: {
    left: "25%",
  },
  b: {
    marginLeft: 22.5,
    top: 113,
  },
  v: {
    marginLeft: -16.3,
    top: 113,
  },
  c: {
    marginLeft: -56.1,
    top: 113,
  },
  x: {
    marginLeft: -95,
    top: 113,
  },
  symbol7: {
    left: "27.98%",
  },
  z: {
    marginLeft: -134.8,
    top: 113,
  },
  symbol8: {
    left: "28.27%",
  },
  l: {
    marginLeft: 141.1,
  },
  k: {
    marginLeft: 101.2,
    top: 57,
  },
  symbol10: {
    left: "31.25%",
  },
  j: {
    marginLeft: 62.4,
  },
  h: {
    marginLeft: 22.5,
  },
  g: {
    marginLeft: -16.3,
  },
  f: {
    marginLeft: -56.1,
  },
  d: {
    marginLeft: -95,
  },
  s: {
    marginLeft: -134.8,
  },
  a: {
    marginLeft: -173.7,
  },
  p: {
    marginLeft: 160,
    top: 0,
  },
  symbol18: {
    left: "21.73%",
  },
  o: {
    marginLeft: 121.2,
    top: 0,
  },
  symbol19: {
    left: "40.48%",
  },
  i: {
    marginLeft: 81.3,
    top: 0,
  },
  u: {
    marginLeft: 42.5,
    top: 0,
  },
  y: {
    marginLeft: 2.6,
    top: 0,
  },
  t: {
    marginLeft: -36.2,
    top: 0,
  },
  r: {
    marginLeft: -76.1,
    top: 0,
  },
  e: {
    marginLeft: -114.9,
    top: 0,
  },
  symbol25: {
    left: "15.48%",
  },
  w: {
    marginLeft: -154.8,
    top: 0,
  },
  q: {
    marginLeft: -193.6,
    top: 0,
  },
  keys: {
    marginLeft: -193.85,
    top: 8,
    width: 387,
    height: 272,
  },
  nativeKeyboard: {
    height: 305,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
  },
});

export default NativeKeyboard;

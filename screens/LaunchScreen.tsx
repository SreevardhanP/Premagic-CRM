import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation, ParamListBase} from '@react-navigation/native';
import ModeLightImage from '../components/ModeLightImage';
import NativeStatusBar from '../components/NativeStatusBar';
import {FontSize, FontFamily, Color, Border} from '../GlobalStyles';

const LaunchScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.launchScreen}>
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require('../assets/group.png')}
      />
      <Image
        style={[styles.logosIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require('../assets/logos2.png')}
      />
      <Text style={[styles.manageEventsCrew, styles.controlsButtonsPosition]}>
        Manage Events, Crew and Payments With Ease
      </Text>
      <Image
        style={[styles.pexelsAiramDatoon15189445Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require('../assets/pexelsairamdatoon15189445.png')}
      />
      <Button
        style={[styles.controlsButtons, styles.controlsButtonsPosition]}
        uppercase={false}
        mode="contained"
        labelStyle={styles.controlsButtonsBtn}
        onPress={() => navigation.navigate('HomeScreen')}
        contentStyle={styles.controlsButtonsBtn1}>
        Get started
      </Button>
      <ModeLightImage
        dimensionsData={require('../assets/native--home-indicator3.png')}
        modeLightIconPosition="absolute"
        modeLightIconWidth="unset"
        modeLightIconHeight={36}
        modeLightIconMarginLeft="unset"
        modeLightIconBottom={0}
        modeLightIconLeft={0}
        modeLightIconRight={0}
        modeLightIconOverflow="hidden"
      />
      <NativeStatusBar
        coordinatesText={require('../assets/wifi.png')}
        dimensionsText={require('../assets/battery.png')}
        propBackgroundColor="unset"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  controlsButtonsBtn: {
    color: '#090a0a',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Inter-Medium',
  },
  controlsButtonsBtn1: {
    borderRadius: 50,
    height: 50,
  },
  iconLayout: {
    maxHeight: '100%',
    position: 'absolute',
  },
  controlsButtonsPosition: {
    left: 25,
    position: 'absolute',
  },
  groupIcon: {
    height: '195.49%',
    width: '423.79%',
    top: '-18.78%',
    right: '-221.76%',
    bottom: '-76.71%',
    left: '-102.04%',
    display: 'none',
    opacity: 0.7,
    maxWidth: '100%',
    maxHeight: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },
  logosIcon: {
    height: '3.94%',
    width: '42.47%',
    top: '9.27%',
    right: '28.78%',
    bottom: '86.78%',
    left: '28.75%',
    maxWidth: '100%',
    maxHeight: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },
  manageEventsCrew: {
    top: 129,
    fontSize: FontSize.title2_size,
    lineHeight: 36,
    fontWeight: '700',
    fontFamily: FontFamily.title2,
    color: Color.colorGray_300,
    textAlign: 'center',
    width: 343,
  },
  pexelsAiramDatoon15189445Icon: {
    height: '58.57%',
    marginLeft: -297.5,
    top: '41.67%',
    bottom: '-0.23%',
    left: '50%',
    width: 712,
    maxHeight: '100%',
    position: 'absolute',
  },
  controlsButtons: {
    right: 25,
    bottom: 40,
  },
  launchScreen: {
    borderRadius: Border.br_11xl,
    backgroundColor: '#dae2eb',
    flex: 1,
    width: '100%',
    height: 852,
    overflow: 'hidden',
  },
});

export default LaunchScreen;

import { View, Text, StyleSheet, useColorScheme, ScrollView } from 'react-native'
import React from 'react'

const FlatCards = () => {
  return (
    <ScrollView horizontal={true}>
    <View style={styles.myview}>
      <Text style={styles.HeadingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardred]}>
          <Text style={styles.mytext}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardblue]}>
          <Text style={styles.mytext}>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardgreen]}>
          <Text style={styles.mytext}>Green</Text>
        </View>
        <View style={[styles.card, styles.cardbrown]}>
          <Text style={styles.mytext}>Brown</Text>
        </View>
        <View style={[styles.card, styles.cardviolet]}>
          <Text style={styles.mytext}>Violet</Text>
        </View>
      </View>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  HeadingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center',
    padding:8 

  },
  card: {
    width: 100,
    height: 100,
    borderRadius: 8,
    margin: 8,
  },
  cardred: {
    backgroundColor: 'red',
  },
  cardgreen: {
    backgroundColor: 'green',
  },
  cardblue: {
    backgroundColor: 'blue',
  },
  cardbrown:{
    backgroundColor:'brown'
  },
  mytext: {
    color: 'white',
    textAlign: 'center', // Center text within the card
  },
  cardviolet:{
    backgroundColor:'violet'
  },
  myview: {
    backgroundColor: '#9d9d9c',
    flex: 1, // Make sure the parent view takes up all available space
  },
})

export default FlatCards

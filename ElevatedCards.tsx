import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.HeadingText}>Elevated Cards</Text>
        <ScrollView horizontal={true}>
          <View style={[styles.Card,styles.CardElevated]}>
            <Text style={styles.mytext}>Tap</Text>
          </View>
          <View style={[styles.Card,styles.CardElevated]}>
            <Text style={styles.mytext}>me</Text>
          </View>
          <View style={[styles.Card,styles.CardElevated]}>
            <Text style={styles.mytext}>to</Text>
          </View>
          <View style={[styles.Card,styles.CardElevated]}>
            <Text style={styles.mytext}>Scroll</Text>
          </View>
          <View style={[styles.Card,styles.CardElevated]}>
            <Text style={styles.mytext}>more...</Text>
          </View>
          <View style={[styles.Card,styles.CardElevated]}>
            <Text style={styles.mytext}>▶️</Text>
          </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    HeadingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
      },
      Card:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        height:100,
        width:100,
        borderRadius:4,
        margin:8
      },
      CardElevated:{
        backgroundColor:'gray',
        elevation:10,
        shadowOffset:{
          width:1,
          height:1
        },
        shadowColor:'red',
        shadowOpacity:1,
        shadowRadius:2
      },
      mytext:{
        color:'white'
      }
})
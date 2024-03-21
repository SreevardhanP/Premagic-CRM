import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.HeadingText}>Trending Places</Text>
      <View>
      <View>
        <Image source={{
            uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Taj_Mahal%2C_Agra%2C_India_edit3.jpg/1280px-Taj_Mahal%2C_Agra%2C_India_edit3.jpg'
        }}
        style={styles.CardImage}/>
      </View>
      <View style={styles.Container}>
        <Text style={styles.CardTitle}>Taj Mahal</Text>
        <Text style={styles.CardPlace}>Agra,Uttar Pradesh</Text>
        <Text style={styles.CardDescription}>The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India.</Text>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    HeadingText:{
        color:'gray',
        fontSize:24,
        fontWeight:'bold',
        paddingTop:4
    },
    CardImage:{
        width:'100%',
        height:250
    },
    Container:{
        backgroundColor:'#F9DDA4',
        height:300
    },
    CardTitle:{
        color:'blue',
        fontWeight:'bold',
        justifyContent:'space-between'
    },
    CardPlace:{
        paddingTop:10,
        color:'#E74292',
        fontStyle:'italic',
        fontSize:20,
        paddingBottom:10
    },
    CardDescription:{
        fontWeight:'bold',
        margin:8,
        borderRadius:5
    }
})
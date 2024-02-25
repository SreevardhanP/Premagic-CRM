import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const Contacts=[
        {
            uid:1,
            name:'Captain America',
            Job:'Captain of the SHIELD',
            imageurl:'https://upload.wikimedia.org/wikipedia/en/b/bf/CaptainAmericaHughes.jpg'
        },
        {
            uid:2,
            name:'Thor',
            Job:'King of Asgard',
            imageurl:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/M%C3%A5rten_Eskil_Winge_-_Tor%27s_Fight_with_the_Giants_-_Google_Art_Project.jpg/435px-M%C3%A5rten_Eskil_Winge_-_Tor%27s_Fight_with_the_Giants_-_Google_Art_Project.jpg'
        },
        {
            uid:3,
            name:'Hulk',
            Job:'Professor of Gamma rays',
            imageurl:'https://upload.wikimedia.org/wikipedia/en/a/aa/Hulk_%28circa_2019%29.png'
        },
        {
            uid:4,
            name:'Hawkeye',
            Job:'Master In Archery',
            imageurl:'https://upload.wikimedia.org/wikipedia/en/9/99/Hawkeye_%28Clinton_Barton%29.png'
        },
        {
            uid:5,
            name:'IronMan',
            Job:'SuperHero,PlayBoy,Billionaire',
            imageurl:'https://upload.wikimedia.org/wikipedia/en/4/47/Iron_Man_%28circa_2018%29.png'
        }               
    ]
  return (
    <View style={styles.HeadingView}>
      <Text style={styles.HeadingText}>ContactList</Text>
      <ScrollView horizontal
      style={styles.Container}
      scrollEnabled={true}>
        {Contacts.map(({uid,name,Job,imageurl}) =>(
            <View key={uid} style={styles.UserCard}>
                <Image
                source={{
                    uri:imageurl
                }}
                style={styles.ImageCard}/>
                <Text style={styles.ContactText}>{name}</Text>
                <Text style={styles.ContactText}>{Job}</Text>
            </View>
        ))}
      </ScrollView>
    </View>
    
  )
}

const styles = StyleSheet.create({
    HeadingText:
    {
        fontSize:20,
        color:'gray',
        fontWeight:'bold',
        paddingBottom:8,
    },
    HeadingView:{
        flex:1,
        alignItems:'center'
    },
    Container:{
        backgroundColor:'#FBD28B',
        flex:1,
        flexDirection:'row'
    },
    UserCard:{
        padding:10
    },
    ImageCard:{
        paddingHorizontal:16,
        width:100,
        height:100
    },
    ContactText:{
        fontWeight:'bold',
        color:'red'
    }
})
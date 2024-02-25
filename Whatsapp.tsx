import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Whatsapp() {
  return (
    <View style={styles.container}>
      <View style={styles.whatsappbg}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg'
            }}
            style={styles.imageStyle}
          />
        </View>
        <Text style={styles.whatsapphead}>Welcome to Whatsapp</Text>
        <Text style={styles.greeting}>Hey there! How can we assist you today?</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whatsappbg: {
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    marginBottom: 10,
  },
  imageStyle: {
    flex: 1,
    width: 100,
    height: 100,
  },
  whatsapphead: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  greeting: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
  },
})

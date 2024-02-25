import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native';
import React from 'react';

export default function ActionCard() {
  function OpenWebsite(WebsiteLink: string) {
    Linking.openURL(WebsiteLink);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={styles.cardContainer}>
        <View style={styles.headingView}>
          <Text style={styles.headingTitle}>What is JavaScript?</Text>
        </View>
        <View style={styles.blogImage}>
          <Image
            source={{
              uri: 'https://www.ankitweblogic.com/javascript/js_img/javascript.png',
            }}
            style={styles.imageCard}
          />
        </View>
        <View>
          <Text style={styles.headingDescription} numberOfLines={4}>
            JavaScript, often abbreviated as JS, is a programming language and core technology of the World Wide Web, alongside HTML and CSS
          </Text>
        </View>
        <View style={styles.linkFace}>
          <View style={styles.linkView1}>
            <TouchableOpacity onPress={() => OpenWebsite('https://www.javascript.com/')}>
              <Text style={styles.linkText}>Read More</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.linkView2}>
            <TouchableOpacity onPress={() => OpenWebsite('https://www.instagram.com/javascript.js/?hl=en')}>
              <Text style={styles.linkText}>Follow me</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  headingText: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
  },
  cardContainer: {
    backgroundColor: '#F0DF87',
    elevation: 10,
    margin: 16,
    borderRadius: 10,
    padding: 16,
  },
  headingView: {
    alignItems: 'center',
    marginBottom: 10,
  },
  headingTitle: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 20,
  },
  blogImage: {
    alignItems: 'center',
    marginVertical: 10,
  },
  imageCard: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  headingDescription: {
    marginTop: 10,
    fontSize: 16,
    color: '#555',
  },
  linkFace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  linkView1: {
    flex: 1,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    marginRight: 8,
  },
  linkView2: {
    flex: 1,
    backgroundColor: '#2196F3',
    borderRadius: 8,
    marginLeft: 8,
  },
  linkText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
  },
});

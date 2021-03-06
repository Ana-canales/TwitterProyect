import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";


const HomeScreen = ({ navigation}) => {

  const [tweetsData, setTweetsData] = useState([])

  
  const getTweets = async  () => {

      const resp = await fetch('https://jsonplaceholder.typicode.com/users')
      
      const data = await resp.json()

      setTweetsData(data)

  }


  useEffect(() => {
      getTweets()
  }, [])


  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 30 }}>Home Screen</Text>
          {
              tweetsData.map(tweet => (
                  <Text key={tweet.id}>{tweet.name}</Text>
              ))
          }
      </View>
  );
}

export default HomeScreen

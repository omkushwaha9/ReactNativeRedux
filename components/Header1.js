import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header } from 'react-native/Libraries/NewAppScreen'

const Header1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Text1}>0</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'stretch'
    },
    Text1:{
        fontSize:30,
        color:"#000000",
        fontWeight:'bold',
        padding:15,
        backgroundColor:'orange',
        textAlign:'right',

    },
    
})

export default Header1
// Header1File
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Header } from 'react-native/Libraries/NewAppScreen'
import { useSelector } from 'react-redux'
const Header1 = () => {


  const cartData = useSelector((state) => state.reducer)
  const [cartItems, setCartItems] = useState(0)

  useEffect(() => {
    setCartItems(cartData.length)
  }, [cartData])
  return (
    <View style={styles.container}>
      <Text>
        <View style={styles.cartItems}>
          <Text  style={styles.Text1}>
          {cartItems}
          </Text>
        </View>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#0202',
    alignItems:'flex-end',
    
  },
  cartItems:{
     backgroundColor:'grey',
     borderBottomLeftRadius:25,
     
    
  },
  Text1: {
    fontSize: 30,
    color: "#000000",
    fontWeight: 'bold',
    padding: 15,
    textAlign: 'right',
    

  },

})

export default Header1
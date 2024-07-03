import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import Header1 from './components/Header1'
import Product from './components/Product'


const App = () => {

  const products=[
    {
    name: 'Iphone 15',
    color: 'Pink',
    price: 100000,
    Image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-naturaltitanium-select_AV2?wid=724&hei=488&fmt=jpeg&qlt=95&.v=1693080287141'
  },
  {
    name: 'Iphone 14',
    color: 'Lavender',
    price: 80000,
    Image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708672572/Croma%20Assets/Communication/Mobiles/Images/261932_0_bieudy.png?tr=w-1000'
  },
  {
    name: 'Iphone 13',
    color: 'RoseGold',
    price: 60000,
    Image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708671239/Croma%20Assets/Communication/Mobiles/Images/243466_0_jepbxv.png?tr=w-1000'
  },
  {
    name: 'Iphone 12',
    color: 'white',
    price: 40000,
    Image: 'https://ik.imagekit.io/3dqckpw4d/upload/iphone_12___Purple1657182290iphone-12-purple.png'
  },
  ]

  return (
    <View style={styles.container}>
    
    <ScrollView>
    <Header1 />
   
       
       {
        products.map((item)=> <Product item={item} />)
        
       }
       
    </ScrollView>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    
  },
})
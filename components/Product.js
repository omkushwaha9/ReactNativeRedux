import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useDispatch} from 'react-redux'
import { addToCart } from './redux/Action'
const Product = (props) => {
    const item=props.item;
    const dispatch = useDispatch();

    const handleAddToCart = ()=>{
    
        dispatch (addToCart(item))
    }
  return (
    <View style={{alignItems:'center', borderBottomColor:'orange', borderBottomWidth:2, padding:10}}>
    <Text style={{fontSize:24}}>{item.name}</Text>
    <Text style={{fontSize:24}}>{item.price}</Text>
    <Text style={{fontSize:24}}>{item.color}</Text>
    <Image style={styles.image} source={{uri:item.Image}} />
    <Button title='Add to cart' onPress={()=> handleAddToCart(item)}/>
 </View>
  
)}

const styles = StyleSheet.create({
    container:{
        flex:1,
        
},
image:{
    height:200,
    width:200,
            
},
})

export default Product
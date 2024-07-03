import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from './redux/Action'

const Product = (props) => {
    const item = props.item;
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.reducer);
    const [isAdded, setIsAdded] = useState(false)
    const handleAddToCart = () => {

        dispatch(addToCart(item))
    }
    const handleRemoveFromCart = (item)=>{
        dispatch(removeFromCart(item.name))
    }
    useEffect(() => {
        let result = cartItems.filter((element)=>{
          return element.name === item.name
        });
            
                if (result.length) {
                    setIsAdded(true)
                } else {
                    setIsAdded(false)
                }
           
        
            },[cartItems])
    return (
        <View style={styles.container}>
            <Text style={styles.TextName}>{item.name}</Text>
            <Text style={styles.TextColor}>{item.color}</Text>
            <Text style={styles.TextPrice}>{item.price}</Text>
            <Image style={styles.image} source={{ uri: item.Image }} />
            {
                isAdded ?
                    <Button title='Remove From cart' onPress={() => handleRemoveFromCart(item)} />
                    :
                    <Button title='Add to cart' onPress={() => handleAddToCart(item)} />
            }

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        borderBottomColor: 'lavender',
        borderBottomWidth: 2,
        padding: 15,
    },
    image: {
        height: 250,
        width: 250,
        borderRadius:10,
        margin:15,


    },
    TextName:{
        fontSize:24,
        
        fontWeight:'bold',
        backgroundColor:'lightyellow',
        borderColor:'lavender',
        borderWidth:2,
        borderTopLeftRadius:30,
        borderBottomRightRadius:30,
        borderBottomLeftRadius:9,
        padding:7,
    },
    TextColor:{
        fontSize:24,
        fontWeight:'bold',
        color:'black',
        fontStyle:'italic',
    },
    TextPrice:{
        fontSize:24,
        fontWeight:'bold',
        color:'lightblue',
    },
})

export default Product
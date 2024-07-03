import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
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
            <Text style={{ fontSize: 24 }}>{item.name}</Text>
            <Text style={{ fontSize: 24 }}>{item.price}</Text>
            <Text style={{ fontSize: 24 }}>{item.color}</Text>
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
        marginBottom: 40,
    },
    image: {
        height: 200,
        width: 200,

    },
})

export default Product
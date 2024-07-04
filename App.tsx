// MainAppFile
import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import Header1 from './components/Header1'
import Product from './components/Product'

function App(): React.JSX.Element {
  
  const products=[
    {
    
    name: 'Apple iPhone 15',
    color: 'Blue',
    price: '₹1,00,000.00 - 77,000.00',
    Image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cHJOTXEwTU92OEtKVDV2cVB1R2FTSjlERndlRTljaUdZeHJGM3dlLzR2OGlYQ0tYMHd1OS9ZREtnNzFSR1owOHF2TWlpSzUzejRCZGt2SjJUNGl1VEtsS0dZaHBma3VTb3UwU2F6dkc4TGZPaDVjV2NEQVBZbTZldUQyWkpKRHk=&traceId=1',
  },
  {
   
    name: 'Apple iPhone 14',
    color: 'Yellow',
    price: '₹80,000.00 - 66,000.00',
    Image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-14-model-unselect-gallery-2-202303_GEO_EMEA?wid=5120&hei=2880&fmt=webp&qlt=70&.v=NjB6M3BqTGRudDZtakJrUG5tT2pHTGdzSmpObkZCM3MrNmJ5SkhESlNDZ1hBSXMwL2Jwdk9oTk42KzZHdTdNUXovdld4NkVCZ3JUZXJyZ1dUb1MwM0dKTG1lVWJJT2RXQWE0Mm9rU1V0V0IxZG1zQmhZY3FpN094bFJrYnF5eDR2azA1RzdtcFQ5a1dBaURTY0hJUEJBPT0=&traceId=1',
  },
  {
   
    name: 'Apple iPhone 13',
    color: 'Green',
    price: '₹60,000.00 - 48,000.00',
    Image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-13-finish-unselect-gallery-2-202207?wid=5120&hei=2880&fmt=webp&qlt=70&.v=WGQwVDZoTWdLODlMWERUbVY5M013dFgrSXpWVEhWaW9YTGlWRHFoSHU0OEZzSnVITG1JRUQvRFNkdFZtK2RYVGd2S3NaRzcrU0dmYjNHTUFiMnlsWFRocXAvNjVVaCtjTTZGTUNzOU8wNkhQM2N6WDhaeVlFWHpWOUdKN3RxR2Y=&traceId=1',
  },
  {
   
    name: 'Apple iPhone 12',
    color: 'White',
    price: '₹50,000.00 - 36,000.00',
    Image: 'https://i0.wp.com/cellbuddy.in/buddy/wp-content/uploads/2022/09/12-White.png?fit=800%2C800&ssl=1',
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


const styles = StyleSheet.create({
  container:{
    flex:1,
    
    
  },
})

export default App
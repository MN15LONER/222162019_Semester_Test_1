import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';

export default function DetailScreen({ navigation }) {
  const [item, setItem] = useState(null);

  useEffect(() => {
      const fetchProducts = async () => {
        setLoading(true);
        try {
          const response = await fetch('https://fakestoreapi.com/products');
          if (!response.ok) 
              {
                  alert("There was an error fetching your products");
              }
          const data = await response.json();
          console.log(data);
          setItem(data);
        } 
        catch (error) 
        {
          console.log(error);
          alert("There was an error fetching your products");
        }
      };
  
      fetchProducts();
    }, []);

  return (
    <View style={style.container}>
      <Image source={{ uri: item.image }} style={style.image} />
      <Text>{item.title}</Text>
      <Text>Price: R{item.price}</Text>
      <Text>{item.description}</Text>
    </View>
  );
}

const style = StyleSheet.create({
    container: {
        padding: 10,
    },
    image: {
        width: 150,
        height: 150,
    }
})
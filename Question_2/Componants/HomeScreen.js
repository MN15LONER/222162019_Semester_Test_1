import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity,StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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
        setProducts(data);
        setLoading(false);
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
    <FlatList
      data={products}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Detail', { id: item.id })}>
            <Image source={{ uri: item.image }} style={style.image}/>
            <Text>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const style = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
    }
})

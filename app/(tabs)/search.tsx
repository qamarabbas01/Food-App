import { SafeAreaView, StyleSheet, TextInput, View, Text, FlatList, Image } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { items } from '../data/foodItems';

const Search = () => {
  const allItems = Object.values(items).flat();

  const [searchQuery, setSearchQuery] = useState('');
  const filteredData = allItems.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="#aaa" />
        <TextInput
          placeholder="Search for food, drinks, snacks..."
          placeholderTextColor="#aaa"
          style={styles.input}
          keyboardType="default"
          returnKeyType="search"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>

      {filteredData.length > 0 ? (
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.resultItem}>
              <Image source={item.image} style={styles.image} />
              <View>
                <Text style={styles.resultTitle}>{item.title}</Text>
                <Text style={styles.resultPrice}>${item.price}</Text>
              </View>
            </View>
          )}
        />
      ) : (
        <Text style={styles.notFound}>No results found</Text>
      )}
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    backgroundColor: '#fff',
    padding: 12
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  input: {
    marginLeft: 10,
    fontSize: 16,
    flex: 1,
    color: '#000',
    fontFamily: 'Poppins_400Regular',
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 10,
  },
  resultTitle: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'Poppins_700Bold',
  },
  resultPrice: {
    fontSize: 14,
    color: '#888',
    fontFamily: 'Poppins_400Regular',
  },
  notFound: {
    fontSize: 16,
    color: '#aaa',
    textAlign: 'center',
    marginTop: 20,
  },
});
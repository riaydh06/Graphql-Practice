import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {getBooksQuery} from './Query/Query';
import {useQuery} from '@apollo/react-hooks';

const BookList = ({onChanges}) => {
  const {loading, error, data} = useQuery(getBooksQuery);
  console.log(data, loading, error);
  return (
    <View>
      <Text style={{fontSize: 20, color: 'red'}}>List Books</Text>
      {!loading &&
        data.books.map((item, index) => (
          <TouchableOpacity key={item.id} onPress={() => onChanges(item.id)}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        ))}
    </View>
  );
};

export default BookList;

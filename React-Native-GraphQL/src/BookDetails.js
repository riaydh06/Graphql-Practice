import React from 'react';
import {View, Text} from 'react-native';
import {getBookQuery} from './Query/Query';
import {useQuery} from '@apollo/react-hooks';

const BookDetails = ({id}) => {
  const {loading, error, data} = useQuery(getBookQuery, {
    variables: {id: id},
  });
  console.log(data);
  return (
    <View>
      <Text style={{fontSize: 20, color: 'red'}}>Book details</Text>
      {data && data.book && (
        <View>
          <Text style={{fontSize: 16, color: 'green'}}>{data.book.name}</Text>
          <Text style={{fontSize: 16, color: 'green'}}>{data.book.genre}</Text>
          <Text style={{fontSize: 16, color: 'green'}}>
            {data.book.author.name}
          </Text>
        </View>
      )}
    </View>
  );
};

export default BookDetails;

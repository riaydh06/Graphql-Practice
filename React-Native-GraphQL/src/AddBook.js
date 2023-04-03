import React, {useState} from 'react';
import {View, Text, TextInput, Picker, Button, Alert} from 'react-native';
import {getAuthorsQuery, addBookMutation, getBooksQuery} from './Query/Query';
import {useQuery} from '@apollo/react-hooks';
import {useMutation} from '@apollo/react-hooks';

const AddBook = () => {
  const {loading, error, data} = useQuery(getAuthorsQuery);
  const [addBook] = useMutation(addBookMutation);
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [authorId, setAuthorid] = useState('');
  const addData = () => {
    if (name != '') {
      addBook({
        variables: {name: name, genre: genre, authorId: authorId},
        refetchQueries: [{query: getBooksQuery}],
      }).then(() => {
        setName('');
        setGenre('');
        setAuthorid('');
      });
    }
  };
  return (
    <View>
      <Text style={{fontSize: 20, color: 'red'}}>Add Book</Text>

      <Text>Name</Text>
      <TextInput
        style={{height: 40}}
        placeholder="Name"
        onChangeText={text => setName(text)}
        value={name}
      />
      <Text>Gener</Text>
      <TextInput
        style={{height: 40}}
        placeholder="Name"
        onChangeText={text => setGenre(text)}
        value={genre}
      />
      <Text>AuthorId</Text>
      <Picker
        selectedValue={authorId}
        style={{height: 50, width: '100%'}}
        onValueChange={value => setAuthorid(value)}>
        {!loading &&
          data.authors.map((item, index) => (
            <Picker.Item key={item.id} label={item.name} value={item.id} />
          ))}
      </Picker>
      <Button title="Press me" color="#f194ff" onPress={() => addData()} />
    </View>
  );
};

export default AddBook;

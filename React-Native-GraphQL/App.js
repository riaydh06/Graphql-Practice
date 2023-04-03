import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import BookList from './src/BookList';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import AddBook from './src/AddBook';
import BookDetails from './src/BookDetails';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

const App = () => {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <ApolloProvider client={client}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View>
            <Text style={styles.sectionTitle}>
              Ninjas's Reading List {selected}
            </Text>
            <BookList onChanges={ids => setSelected(ids)} />
            <BookDetails id={selected} />
            <AddBook />
          </View>
        </SafeAreaView>
      </ApolloProvider>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;

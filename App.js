import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity 
} from 'react-native';

export default function App() {
  const [unos, postaviUnos] = useState('');
  const [ciljevi, postaviCiljeve] = useState([]);

  const noviUnos = (tekst) => {
    postaviUnos(tekst);
  };

  const noviCilj = () => {
    console.log(unos);

    const noviObjekt = {
      value: unos,
      key: Math.random().toString(),
    };
    postaviCiljeve((ciljevi) => [noviObjekt, ...ciljevi]);
    //postaviUnos('');
  };

  return (
    <View style={stilovi.ekran}>
      <View style={stilovi.viewUnos}>
        <TextInput
          placeholder="dodaj cilj"
          style={stilovi.unos}
          value={unos}
          onChangeText={noviUnos}
        />
        <Button title="Dodaj" onPress={noviCilj} />
      </View>
      <FlatList
        data={ciljevi}
        renderItem={(el) => (
          <TouchableOpacity onPress={() => console.log("Dodir")}>
          <View style={stilovi.lista}>
            <Text>{el.index}. {el.item.key} : {el.item.value} </Text>
          </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const stilovi = StyleSheet.create({
  ekran: {
    padding: 50,
  },
  unos: {
    width: '70%',
    marginBottom: 5,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  lista: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
  viewUnos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});

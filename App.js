import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  Image,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';
import { SectionGrid } from 'react-native-super-grid';

export default function Example() {
  const [items, setItems] = React.useState([
    {
      name: 'Metas',
      code: '#1abc9c',
      url: 'https://cdn-icons-png.flaticon.com/512/1458/1458515.png',
    },
    {
      name: 'Mis ejercicios',
      code: '#2ecc71',
      url: 'https://cdn-icons-png.flaticon.com/512/684/684065.png',
    },
    {
      name: 'Perfil',
      code: '#3498db',
      url: 'https://cdn-icons-png.flaticon.com/512/6073/6073874.png',
    },
    {
      name: 'Programa Ejercicios',
      code: '#9b59b6',
      url: 'https://cdn.pixabay.com/photo/2019/08/11/18/50/icon-4399684_960_720.png',
    },
  ]);

  function createButtonAlert(msg, title) {
    Alert.alert(
      title,
      msg,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    );
  }

  return (
    <SectionGrid
      itemDimension={100}
       staticDimension={370}
      // fixed
       spacing={30}
      sections={[
        {
          title: 'App Paz',
          data: items.slice(0, 6),
        },
        {
          title: 'www.apppaz.com',
          data: items.slice(0, 6),
        },
      ]}
      style={styles.gridView}
      renderItem={({ item, section, index }) => (
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDD"
          onPress={() => createButtonAlert(item.name, section.title)}>
          <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Image
              style={{ width: 90, height: 90 }}
              source={{ uri: item.url }}
            />
          </View>
        </TouchableHighlight>
      )}
      renderSectionHeader={({ section }) => (
        <Text style={styles.sectionHeader}>{section.title}</Text>
      )}
    />
  );
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'space-around',
    borderRadius: 5,
    padding: 30,
    height: 270,
    width:165,
    marginTop:25,
    marginHorizontal:10,
    alignItems: 'center',
  },
  itemName: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
    textAlign:'center'
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  sectionHeader: {
    flex: 1,
    fontSize: 25,
    fontWeight: '600',
    alignItems: 'center',
    backgroundColor: 'navy',
    color: 'white',
    padding: 20,
    textAlign:'center'
  },
});

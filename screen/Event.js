import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import mock from '../mock/index'
import Colors from '../constants/Color'

import { useRoute } from '@react-navigation/native';


class Event extends React.Component {



  render() {

    const { data } = this.props.route.params

    return (
      <ScrollView style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: data.image,
          }}
        />
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.speaker}>{data.speaker}</Text>
        <Text style={styles.description}>{data.description}</Text>
        <Text style={styles.date}>{data.date}/{data.time}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',

    padding: 8
  },
  image: {
    height: 320,
    alignSelf: 'stretch'
  },
  title: {
    marginTop: 32,
    fontSize: 18,
    fontWeight: '700'
  },
  speaker: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '500'
  },
  description: {

  },
  date: {
    marginTop: 8,
    fontSize: 16,
    color: Colors.accent
  }
});

export default function (props) {
  const route = useRoute();

  return <Event {...props} route={route} />;
}
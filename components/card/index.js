import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import Colors from '../../constants/Color'
import { useNavigation } from '@react-navigation/native';

class Card extends React.Component {

    toEvent = () => {
        this.props.navigation.navigate('Eventt', { data: this.props.data })
    }

    render() {

        const { data } = this.props

        return (

            <TouchableWithoutFeedback onPress={this.toEvent}>
                <View style={styles.warp}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: data.image,
                        }}
                    />
                    <View style={styles.right}>
                        <Text style={styles.title}>{data.title}</Text>
                        <Text style={styles.speaker}>{data.speaker}</Text>
                        <Text style={styles.date}>{data.date}/{data.time}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    warp: {
        height: 200,
        alignSelf: 'stretch',
        padding: 10,
        borderBottomColor: Colors.accent,
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 180,
        height: 180,
        marginRight: 10
    },
    right: {
        flex: 1
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
    },
    speaker: {
        flex: 1,
        marginTop: 4
    },
    date: {
        color: Colors.accent
    }
});
export default function (props) {
    const navigation = useNavigation();

    return <Card {...props} navigation={navigation} />;
}

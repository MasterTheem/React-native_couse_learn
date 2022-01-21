import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity ,TouchableWithoutFeedback} from 'react-native';
import Colors from '../../constants/Color';

class Tab extends React.Component {

    render() {

        return (
            <TouchableWithoutFeedback style = {styles.touchable} onPress = {this.props.onPress}>
                <View style={[styles.tab, this.props.selected ? styles.selected : false ]}>
                    <Text style={[this.props.selected ? styles.selected : styles.noneselect]}>{this.props.children}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({

    tab: {
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
        color: Colors.accent,
        borderLeftColor: Colors.accent,
        borderRightColor: Colors.accent,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        flex: 1
    },
    selected: {
        backgroundColor: Colors.accent,
        color: '#ffffff'
    },
    noneselect:{
        backgroundColor: '#ffffff',
        color: '#000000'
    },
    touchable:{
        flex: 1
    }
});
export default Tab
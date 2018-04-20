
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, Alert } from 'react-native';
import RadioButton from './radioButton';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#EEF4F7',
        borderRadius: 3,
        margin: 2,



    },
    text: {
        marginLeft: 12,
        fontSize: 13,
    },
    doneTodo: {
        textDecorationLine: 'line-through'

    }
});

class Row extends React.Component {
    constructor(props) {
        super(props);
    }
    _onPressButton(props) {
        props.selectItem(props);
    }
    render() {
        const props = this.props;
        return (
            <TouchableHighlight onPress={() => { this._onPressButton(props) }} underlayColor="white">
                <View style={[styles.container]}>
                    <RadioButton selected={props.selected} />
                    <Text
                        style={[styles.text, props.selected ? styles.doneTodo : '']}>
                        {`${props.category} `}
                    </Text>
                </View>
            </TouchableHighlight >
        );
    }
}

export default Row;

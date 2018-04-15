
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, Alert } from 'react-native';
import RadioButton from './radioButton';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#ededed',
        borderBottomWidth: 1,


    },
    text: {
        marginLeft: 12,
        fontSize: 20,
    },
    textSelected: {
        textDecorationLine: 'line-through',
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
        console.log(props);
        return (
            <TouchableHighlight onPress={() => { this._onPressButton(props) }} underlayColor="white">
                <View style={styles.container}>
                    <RadioButton selected={props.selected} />
                    <Text
                        style={[styles.text, props.selected ? styles.textSelected : '']}>
                        {`${props.firstName} ${props.lastName}`}
                    </Text>
                </View>
            </TouchableHighlight >
        );
    }
}

export default Row;

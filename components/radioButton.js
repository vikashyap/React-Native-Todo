import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default RadioButton = props => {
    return (
        <View style={[{
            height: 30,
            width: 30,
            borderRadius: 15,
            borderWidth: 2,
            borderColor: '#C7EFCF',
            alignItems: 'center',
            justifyContent: 'center',
        }, props.style]}>
            {
                props.selected ?
                    <View style={{
                        height: 15,
                        width: 15,
                        borderRadius: 6,
                        backgroundColor: '#C7EFCF',
                    }} />
                    : null
            }
        </View>
    );
}

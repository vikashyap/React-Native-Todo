import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default RadioButton = props => {
    return (
        <View style={[{
            height: 12,
            width: 12,
            borderRadius: 15,
            backgroundColor: '#D3D3D3',
            alignItems: 'center',
            justifyContent: 'center',
        }, props.style]}>
            {
                props.selected ?
                    <View style={{
                        height: 12,
                        width: 12,
                        borderRadius: 15,
                        backgroundColor: '#0286CE',
                    }} />
                    : null
            }
        </View>
    );
}

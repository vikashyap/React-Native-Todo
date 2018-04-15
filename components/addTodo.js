import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Platform } from 'react-native';

const renderWeb = Platform.select({
    web: true
});

const styles = StyleSheet.create({
    container: {
        paddingTop: '20%',
        paddingBottom: renderWeb ? '30%' : '80%',
        paddingLeft: '5%',
        paddingRight: '5%',
        flex: 1,
        backgroundColor: renderWeb ? '#fff7f8' : '#fff7f8',
        margin: 'auto',
        width: renderWeb && window.innerWidth > 700 ? '60%' : '100%',
        zIndex: 4,
    },
    title: {
        color: '#C7EFCF',
        margin: 'auto',
        fontSize: 45,
        fontWeight: "400",

    },
    input: {
        height: 40,
        //backgroundColor: 'white',
        marginBottom: 10,
        padding: 10,
        color: 'red',
        borderBottomColor: '#C7EFCF',
        borderBottomWidth: 2,
        borderTopColor: '#C7EFCF',
        borderTopWidth: 2,
        borderLeftColor: '#C7EFCF',
        borderLeftWidth: 2,
        borderRightColor: '#C7EFCF',
        borderRightWidth: 2,
    },
    textMulti: {
        height: 100
    },
    button: {
        borderColor: '#8E8E8E',
        borderWidth: StyleSheet.hairlineWidth,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginBottom: 10,
        height: 40
    },
    text: {
        color: '#8E8E8E',
        margin: 'auto',
    },
});
const data = {};

class AddTodo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: ''
        }
    }


    render() {
        const props = this.props.modal;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>ADD Todo</Text>
                <TextInput style={styles.input}
                    autoCapitalize="none"
                    //onSubmitEditing={() => this.passwordInput.focus()}
                    autoCorrect={false}
                    keyboardType='default'
                    returnKeyType="next"
                    placeholder='Category'
                    onChangeText={(value) => this.setState({ firstName: value })}
                    value={this.state.firstName}
                />

                <TextInput style={[styles.input, styles.textMulti]}
                    multiline={true}
                    numberOfLines={4}
                    keyboardType='default'
                    returnKeyType="next"
                    placeholder='Description'
                    onChangeText={(value) => this.setState({ lastName: value })}
                    value={this.state.lastName}
                />

                <TouchableOpacity style={styles.button}
                    onPress={() => {
                        props.todoModalSelect();
                    }}>
                    <Text style={styles.text}>CaNcEl</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={() => {
                        props.addTodoMethod({ ...data, firstName: this.state.firstName, lastName: this.state.lastName });
                    }}>
                    <Text style={styles.text}>AdD tOdO</Text>
                </TouchableOpacity>
            </View>

        )

    }
}

export default AddTodo;



import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput, Platform } from 'react-native';

const renderWeb = Platform.select({
    web: true
});
const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        marginTop: 22,
        width: '100%'
    },
    button: {
        borderColor: '#8E8E8E',
        borderWidth: StyleSheet.hairlineWidth,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,

    },
    inputContainer: {
        width: renderWeb && window.innerWidth > 700 ? '92%' : '77%',
    },
    input: {
        width: '100%',
        height: 30,
        flex: 1,
        paddingHorizontal: 8,
        fontSize: 15,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
    },
    text: {
        color: 'black',
        fontSize: 25,
        fontWeight: "100",

    },
    backGreen: {
        backgroundColor: '#C7EFCF',
    }
});
const data = {};

class AddList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: ''
        }
    }

    handleKeyDown = (e) => {
        if (e.nativeEvent.key == "Enter") {
            this.props.addTodoMethod({ ...data, firstName: this.state.firstName, lastName: this.state.lastName });
            this.setState({ firstName: '' });
        }

    }
    addTodo = () => {
        this.props.addTodoMethod({
            ...data, firstName: this.state.firstName, lastName: this.state.lastName
        });

        this.setState({ firstName: '' })
    }


    render() {
        const props = this.props;
        return (
            <View style={[styles.container]}>
                <View style={[styles.button, styles.inputContainer]}>
                    <TextInput
                        style={styles.input}
                        placeholder="Add Todo..."
                        autoCapitalize="sentences"
                        autoCorrect={true}
                        onChangeText={(value) => this.setState({ firstName: value })}
                        value={this.state.firstName}
                        keyboardType="default"
                        returnKeyType="done"
                        onKeyPress={this.handleKeyDown}

                    />
                </View>
                <TouchableOpacity style={[styles.button, styles.backGreen]} onPress={this.addTodo}>
                    <Text style={styles.text}>Add</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default AddList;

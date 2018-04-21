import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput, Platform, Animated } from 'react-native';

const renderWeb = Platform.select({
    web: true
});
const renderIos = Platform.select({
    ios: true
});
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'flex-end',
        backgroundColor: '#EFF0ED',
        justifyContent: 'center',
        height: 70,
        padding: 20,
        borderTopColor: '#fff',
        borderTopWidth: 2

    },
    input: {
        width: '100%',
        height: 50,
        flex: 1,
        paddingHorizontal: 8,
        fontSize: 15,
        backgroundColor: 'transparent',
        borderRadius: 2,
        fontSize: 20,
        fontWeight: "400",
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: "400",
    },
    textReset: {
        width: 120,
        color: 'grey',
        fontSize: 20,
        fontWeight: "600",
        marginTop: 15,
    },
    addTodo: {
        backgroundColor: '#0286CE',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        width: 120,
        height: 50,

    },
    setTodo: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderBottomColor: '#0286CE',
        borderBottomWidth: 2,
        borderTopColor: '#0286CE',
        borderTopWidth: 2,
        borderLeftColor: '#0286CE',
        borderLeftWidth: 2,
        borderRightColor: '#0286CE',
        borderRightWidth: 2,
        padding: 22,
        paddingRight: 5
    },
    btnTodo: {
        borderRadius: 5,
        backgroundColor: '#0286CE',
        padding: 10,
        width: '30%',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
const desktopStyles = renderWeb && StyleSheet.create({
    webOutline: {
        outline: 'none',
    },
});
const data = {};

class AddList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            category: '',
            addTodo: false
        }
        this.animateBox = this.animateBox.bind(this);
    }
    componentWillMount = () => {
        this.todoInputValue = new Animated.Value(0.8);
    }

    handleKeyDown = (e) => {
        if (this.state.category) {
            if (e.nativeEvent.key == "Enter") {
                this.props.addTodoMethod({ ...data, category: this.state.category });
                this.setState({ category: '' });
            }
        }
    }
    animateBox = () => {
        setTimeout(() => {
            Animated.spring(this.todoInputValue, {
                toValue: 1
            }).start();
        }, 10)
        this.setState({ 'addTodo': !this.state.addTodo })
    }

    addTodo = () => {
        if (this.state.category) {
            this.props.addTodoMethod({
                ...data, category: this.state.category
            });
            this.setState({ category: '' })
            this.animateBox();

        }
    }
    resetTodoList = () => {
        this.props.resetTodoList();
    }


    render() {
        const props = this.props;
        const animatedInputStyles = {
            transform: [{ scale: this.todoInputValue }]
        }
        return (
            <View style={[styles.container]}>

                {!this.state.addTodo && <View style={{
                    flexDirection: 'row'
                }}>
                    <TouchableOpacity style={{ width: 80 }} onPress={this.resetTodoList} >
                        <Text style={styles.textReset}>Reset </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addTodo} onPress={this.animateBox}>
                        <Text style={styles.text}>Add Todo</Text>
                    </TouchableOpacity>
                </View>
                }

                {this.state.addTodo &&
                    <Animated.View style={[styles.setTodo, animatedInputStyles]}>
                        <TextInput
                            style={[styles.input, (renderWeb ? desktopStyles.webOutline : '')]}
                            placeholder="Add Todo..."
                            autoCapitalize="sentences"
                            autoCorrect={true}
                            autoFocus={true}
                            onChangeText={(value) => this.setState({ category: value })}
                            value={this.state.category}
                            keyboardType="default"
                            returnKeyType="done"
                            onKeyPress={this.handleKeyDown}
                            onSubmitEditing={this.addTodo}
                            underlineColorAndroid='transparent'
                            onBlur={!renderWeb ?
                                this.animateBox : () => { return 0 }
                            }

                        />
                        <TouchableOpacity onPress={this.addTodo} style={styles.btnTodo}><Text style={styles.text}>Add </Text></TouchableOpacity>
                    </Animated.View>}
            </View>
        );
    }
}

export default AddList;

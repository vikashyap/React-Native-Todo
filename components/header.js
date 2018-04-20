
import React from 'react';
import { View, Text, StyleSheet, TextInput, Platform, Animated, TouchableOpacity } from 'react-native';

const renderIos = Platform.select({
    ios: true
});
const renderWeb = Platform.select({
    web: true
});

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',

    }, addTodo: {
        backgroundColor: '#C7EFCF',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        width: 50,
        height: 20

    },
    headerText: {
        fontSize: 45,
        fontWeight: "800",
        textAlign: 'center',
        color: '#0286CE',
        justifyContent: 'center',

    },
    input: {
        borderRadius: 5,
        height: 45,
        flex: 1,
        paddingHorizontal: 8,
        fontSize: 15,
        backgroundColor: '#EFF0ED',
        fontSize: 20,
        fontWeight: "400",
    },
});
const desktopStyles = renderWeb && StyleSheet.create({
    webOutline: {
        outline: 'none',
    },
});

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
        this.animateBox = this.animateBox.bind(this);
    }
    componentWillMount = () => {
        this.animatedValue = new Animated.Value(0.95);
    }
    searchTodo = (value) => {
        this.state.search = value.trim();
        this.forceUpdate();
        this.props.searchTodo(this.state.search)
    }
    animateBox = (value) => {
        Animated.spring(this.animatedValue, {
            toValue: value
        }).start();
    }
    render() {
        const props = this.props;
        const animatedStyles = {
            transform: [{ scale: this.animatedValue }]
        }
        return (
            <View>
                <View>
                    <Text style={styles.headerText}>Todos</Text>
                </View>
                <Animated.View style={[styles.container, animatedStyles]}>
                    <TextInput
                        style={[styles.input, (renderWeb ? desktopStyles.webOutline : '')]}
                        placeholder="Search..."
                        keyboardType="default"
                        returnKeyType="done"
                        value={this.state.search}
                        underlineColorAndroid='transparent'
                        onChangeText={(value) => this.searchTodo(value)}
                        onFocus={() => { this.animateBox(1) }}
                        onBlur={() => { this.animateBox(0.95) }}
                    />
                </Animated.View>
            </View>
        );
    }
}

export default Header;

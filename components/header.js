
import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
    container: {
        top: 10,
        flex: 1,
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#C7EFCF',
        marginBottom: 10
    },
    headerText: {
        fontSize: 45,
        fontWeight: "400",
        textAlign: 'center',
        color: 'rgba(175, 47, 47, 0.15)',
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        height: 30,
        flex: 1,
        paddingHorizontal: 8,
        fontSize: 15,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
    },
});

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }
    searchTodo = (value) => {
        this.state.search = value.trim();
        this.forceUpdate();

        this.props.searchTodo(this.state.search)

    }
    render() {
        const props = this.props;
        return (
            <View><Text style={styles.headerText}>WeEkly tOdOs</Text>
                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        placeholder="Search..."
                        autoFocus={true}
                        keyboardType="default"
                        returnKeyType="done"
                        value={this.state.search}
                        onChangeText={(value) => this.searchTodo(value)}
                    />
                </View>
            </View>
        );
    }
}

export default Header;

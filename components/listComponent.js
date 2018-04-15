import React from 'react';
import { View, ListView, StyleSheet, Text, Platform } from 'react-native';
import data from './data';
import Header from './header';
import Row from './Row';
import { formatData, keyGenerator, getDay } from './utility';
import SectionHeader from './sectionHeader';
import { loadTodoList, selectedData, addData, searchData } from '../action/todoList';
import AddList from './addList';
import { connect } from 'react-redux';
import { Motion, spring, presets } from 'react-motion';

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
        marginTop: 20
    }
});
let isModal = false;
let search = '';

const renderWeb = Platform.select({
    web: true
});

class ListViewDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModal: false
        }
        this.selectItem = this.selectItem.bind(this);
    }
    componentDidMount = () => {
        this.props.loadTodoList();
        search = '';
    }

    selectItem = (item) => {
        let tempObj = [...this.props.todoListData]
        tempObj.filter((filterItem, index) => {
            if (filterItem.uniqueId === item.uniqueId) {
                filterItem.selected = !item.selected;
                filterItem.day = getDay();
                filterItem.selected ? tempObj.move(index, tempObj.length - 1) : tempObj.move(index, 0);
            }
        });
        this.props.selectedData(tempObj);
    }
    todoModalSelect() {
        isModal = !isModal;
        this.setState({ isModal: !this.state.isModal });
    }
    searchTodo = (value) => {
        console.log(value);
        search = value;
        this.setState({ search: true });
        //let tempObj = [...this.props.todoListData];
        //this.props.searchData(tempObj, value);

    }
    addTodoMethod(newTodo) {
        let tempObj = [...this.props.todoListData];
        newTodo.day = getDay();
        newTodo.key = keyGenerator();
        tempObj.unshift(newTodo);
        this.props.addData(tempObj);
        this.todoModalSelect();
    }
    render() {
        let sessionStore = renderWeb && JSON.parse(sessionStorage.getItem('todos'));
        let ListData = renderWeb && sessionStore && sessionStore.length > 0 ? sessionStore : this.props.todoListData || [];
        //let ListData = this.props.todoListData || [];
        if (search) {
            debugger;
            ListData = ListData.filter(item => {
                const itemSearch = item.firstName ? item.firstName.toLowerCase() : '';
                if (
                    itemSearch.indexOf(search.toLowerCase()) !== -1
                ) {
                    return item;
                }
            });
        }

        const getSectionData = (dataBlob, sectionId) => dataBlob[sectionId];
        const getRowData = (dataBlob, sectionId, rowId) => dataBlob[`${rowId}`];

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
            getSectionData,
            getRowData,
        });

        const { dataBlob, sectionIds, rowIds } = formatData(ListData);
        this.state = {
            dataSource: ds.cloneWithRowsAndSections(dataBlob, sectionIds, rowIds),
        };
        return (
            <View>

                <ListView
                    style={styles.container}
                    dataSource={this.state.dataSource}
                    renderRow={(ListData) => {
                        return (
                            <Row {...ListData} selectItem={this.selectItem} />
                        )
                    }}
                    renderHeader={() => <Header searchTodo={this.searchTodo} />}
                    renderSectionHeader={(sectionData) => <SectionHeader {...sectionData} />}
                    renderFooter={() => <AddList todoModalSelect={this.todoModalSelect.bind(this)}
                        addTodoMethod={this.addTodoMethod.bind(this)} />}
                />
            </View>
        );
    }
}
const mapStateToProps = state => {
    console.log(state);
    return {
        todoListData: state.todoList.data,
        loading: state.todoList.loading
    };
};

const mapDispatchToProps = (dispatch) => ({
    loadTodoList: () => { dispatch(loadTodoList()); },
    selectedData: (data) => { dispatch(selectedData(data)); },
    addData: (data) => { dispatch(addData(data)) },
    searchData: (data, str) => { dispatch(searchData(data, str)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(ListViewDemo);

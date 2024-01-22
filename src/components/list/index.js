import React from "react";
import {styles} from './styles'
import { View, Image, Text, FlatList } from "react-native";



const DATA = [
    {
        id: '1',
        title: 'Data Structures',
        imageSource: require('../../assets/images/cr7.png'),
    },
    {
        id: '2',
        title: 'STL',
        imageSource: require('../../assets/images/m10.png'),
    },
    {
        id: '3',
        title: 'C++',
        imageSource: require('../../assets/images/cr7.png'),
    },
    {
        id: '4',
        title: 'Java',
        imageSource: require('../../assets/images/m10.png'),
    },
    {
        id: '5',
        title: 'Python',
        imageSource: require('../../assets/images/cr7.png'),
    },
    {
        id: '6',
        title: 'Java',
        imageSource: require('../../assets/images/m10.png'),
    },
    {
        id: '7',
        title: 'Data Structures',
        imageSource: require('../../assets/images/cr7.png'),
    },
    {
        id: '8',
        title: 'Data Structures',
        imageSource: require('../../assets/images/cr7.png'),
    },
];

const Item = ({title, imageSource}) => {
    return (
        <View style={styles.item}> 
            <Image source={imageSource} style={styles.avatar}></Image>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

const renderItem = ({item}) => (
    <Item imageSource={item.imageSource} title ={item.title}/>
);

const ListCourse = () => {
    return (
        <View style={styles.container}>
            <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            />
        </View>
    );
};
export default React.memo(ListCourse);
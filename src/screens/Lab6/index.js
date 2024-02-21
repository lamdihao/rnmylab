import Icon from 'react-native-vector-icons/FontAwesome';
import CustomDrawer from "../../components/CustomDrawer";
import Input from "../../components/input";
import { styles } from "./styles";

const { createDrawerNavigator } = require("@react-navigation/drawer");
const { NavigationContainer } = require("@react-navigation/native");
const { View, Button, Text } = require("react-native");


function HomeScreen({navigation}){
    return(
        <View style={{flex: 1, alightItems:'center', justifyContent:'center'}}>
            <Text style={styles.text1}>Chào bạn đây là màn hình chính</Text>
            <Input placeholder="Nhập tên của bạn"></Input>
            <View style={{alightItems:'center', justifyContent:'center',marginLeft: 50, marginRight: 50}}>
            <Button onPress={() => navigation.navigate('Article')} title="Đi tới màng hình chi tiết"></Button> 
            </View>
                     
        </View>
    );
};
function NotificationsScreen({navigation}){
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Button onPress={() => navigation.goBack()} title="Go back Home Screen"/>
        </View>
    );
};
function Chat({navigation}){
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Button onPress={() => navigation.goBack()} title="Go back Home Screen"/>
        </View>
    );
};
function Setting({navigation}){
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Button onPress={() => navigation.goBack()} title="Go back Home Screen"/>
        </View>
    );
};
function Help({navigation}){
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Button onPress={() => navigation.goBack()} title="Go back Home Screen"/>
        </View>
    );
};
 
const Drawer = createDrawerNavigator();
const Lab6 = () => {
    return (
        
    <NavigationContainer>
        <Drawer.Navigator 
            screenOptions={{drawerActiveBackgroundColor:'#FFCC00'}}
            drawerContent={props => <CustomDrawer {...props}/>}>
            
            <Drawer.Screen name="Home" component={HomeScreen}
                options={{
                drawerLabel: 'Home',
                drawerIcon: ({ color, size }) => (
                <Icon name="home" size={size} color={color} />
                    ),
                }} />
            <Drawer.Screen name="Article" component={NotificationsScreen}
                options={{
                drawerLabel: 'Article',
                drawerIcon: ({ color, size }) => (
                <Icon name="file-text" size={size} color={color} />
                    ),
                }} /> 
            <Drawer.Screen name="Chat" component={Chat} 
                options={{
                drawerLabel: 'Chat',
                drawerIcon: ({ color, size }) => (
                <Icon name="comment" size={size} color={color} />
                    ),
                }} /> 
            <Drawer.Screen name="Setting" component={Setting} 
                options={{
                drawerLabel: 'Settings',
                drawerIcon: ({ color, size }) => (
                <Icon name="gear" size={size} color={color} />
                    ),
                }} /> 
            <Drawer.Screen name="Help" component={Help} 
                options={{
                drawerLabel: 'Help',
                drawerIcon: ({ color, size }) => (
                <Icon name="question" size={size} color={color} />
                    ),
                }} /> 
        </Drawer.Navigator>
    </NavigationContainer>
    );
};

export default Lab6;
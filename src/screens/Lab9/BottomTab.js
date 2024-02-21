// import React, { useState } from 'react';
// import { createBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { MaterialCommunityIcons } from '@expo/vector-icons';

// const Tab = createBottomTabNavigator();

// const MyTabs = () => {
//   const [activeTab, setActiveTab] = useState('Home');

//   const renderTabBarIcon = ({ focused, color, size }) => {
//     switch (activeTab) {
//       case 'Home':
//         return <MaterialCommunityIcons name="home" size={size} color={color} />;
//       case 'Cho bạn':
//         return <MaterialCommunityIcons name="gift" size={size} color={color} />;
//       case 'Đặt hàng trực tiếp':
//         return <MaterialCommunityIcons name="cart" size={size} color={color} />;
//       case 'Trò chơi':
//         return <MaterialCommunityIcons name="gamepad" size={size} color={color} />;
//       default:
//         return <MaterialCommunityIcons name="home" size={size} color={color} />;
//     }
//   };

//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       tabBarOptions={{
//         activeTintColor: '#000',
//         inactiveTintColor: '#ccc',
//         style: {
//           height: 60,
//           backgroundColor: '#fff',
//         },
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={() => <Home />}
//         options={{
//           tabBarLabel: 'Trang chủ',
//           tabBarIcon: renderTabBarIcon,
//         }}
//       />
//       <Tab.Screen
//         name="Cho bạn"
//         component={() => <ChoBan />}
//         options={{
//           tabBarLabel: 'Cho bạn',
//           tabBarIcon: renderTabBarIcon,
//         }}
//       />
//       <Tab.Screen
//         name="Đặt hàng trực tiếp"
//         component={() => <DatHangTrucTiep />}
//         options={{
//           tabBarLabel: 'Đặt hàng trực tiếp',
//           tabBarIcon: renderTabBarIcon,
//         }}
//       />
//       <Tab.Screen
//         name="Trò chơi"
//         component={() => <TroChoi />}
//         options={{
//           tabBarLabel: 'Trò chơi',
//           tabBarIcon: renderTabBarIcon,
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default MyTabs;
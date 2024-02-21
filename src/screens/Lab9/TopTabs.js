// import React from 'react';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { MaterialCommunityIcons } from '@expo/vector-icons';

// const Tab = createMaterialTopTabNavigator();

// const MyTabs = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName="AllTVChannels"
//       tabBarOptions={{
//         activeTintColor: '#000',
//         inactiveTintColor: '#ccc',
//         style: {
//           height: 40,
//           backgroundColor: '#fff',
//         },
//       }}
//     >
//       <Tab.Screen
//         name="AllTVChannels"
//         component={() => <AllTVChannels />}
//         options={{
//           tabBarLabel: 'Tất cả kênh',
//           tabBarIcon: ({ focused, color, size }) => (
//             <MaterialCommunityIcons name="tv" size={size} color={color} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Favorites"
//         component={() => <Favorites />}
//         options={{
//           tabBarLabel: 'Yêu thích',
//           tabBarIcon: ({ focused, color, size }) => (
//             <MaterialCommunityIcons name="heart" size={size} color={color} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Settings"
//         component={() => <Settings />}
//         options={{
//           tabBarLabel: 'Cài đặt',
//           tabBarIcon: ({ focused, color, size }) => (
//             <MaterialCommunityIcons name="cog" size={size} color={color} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default MyTabs;
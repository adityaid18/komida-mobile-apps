import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import  Icons from 'react-native-vector-icons/MaterialCommunityIcons';

//import components
import {homeScreen, Splash} from './components/homeScreen'
import {tambah }from './components/tambah'
import {hapus } from './components/hapus'
import {update } from './components/update'
import {view } from './components/view'
import {viewAll } from './components/viewAll'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const homes = createStackNavigator();
const Drawer =createDrawerNavigator();


// function DrawerScreen(){
//   <Drawer.Navigator>
//     <Drawer.Screen />
//   </Drawer.Navigator>
// }

function StackScreen(){
  return(
      <Stack.Navigator initialRouteName="Main" headerMode='none'>
          <Stack.Screen name="Main" component={Main}/>
          {/* <Stack.Screen name="setting" component={settingScreen}/>   */}
      </Stack.Navigator>
  );
  }

function Main(){
  return(
    <homes.Navigator >
    <homes.Screen name="submit" component={homeScreen} options={{title:'KOMIDA MOBILE APPS'}} />
    <homes.Screen name="tambah" component={tambah} options={{title:'KOMIDA MOBILE APPS'}} />
    <homes.Screen name="update" component={update} options={{title:'KOMIDA MOBILE APPS'}}/>
    <homes.Screen name="hapus" component={hapus} options={{title:'KOMIDA MOBILE APPS'}} />
    <homes.Screen name="view" component={view} options={{title:'KOMIDA MOBILE APPS'}} /> 
    <homes.Screen name="viewAll" component={viewAll} options={{title:'KOMIDA MOBILE APPS'}} /> 
    </homes.Navigator>
  );
  }


// function tabScreen() {
//   return(
// <Tab.Navigator >
//    <Tab.Screen 
//           name="Home" 
//           component={tambah} options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({ color }) => (
//           <Icons name="home" color={color} size={26}/> ), }}/>
//    <Tab.Screen name="list" 
//           component={view} options={{
//           tabBarLabel: 'List Karyawan',
//           tabBarIcon: ({ color }) => (
//           <Icons name="nature-people" color={color} size={26}/> ), }}/>
// </Tab.Navigator>
// );
// }

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect( ()=> {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  },[]);

if (isLoading){
  return <Splash />
}
  return (
    <SafeAreaProvider>
    <NavigationContainer >
      <StackScreen />
    </NavigationContainer>
    </SafeAreaProvider>
  );
}




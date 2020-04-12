import * as React from 'react';
import {Text, View, SafeAreaView, Image, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProjectsPage from './src/components/ProjectsPage';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';

function CustomHeader({title, navigation}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 50,
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            style={{width: 30, height: 30, marginLeft: 5}}
            source={require('./src/images/menu.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <Text style={{textAlign: 'center'}}>{title}</Text>
      </View>
      <View
        style={{
          flex: 1,
        }}
      />
    </View>
  );
}

function ProjectsScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Projects" navigation={navigation} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ProjectsPage />
      </View>
    </SafeAreaView>
  );
}

function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Home" navigation={navigation} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home!</Text>
      </View>
    </SafeAreaView>
  );
}
function ProfieScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Profile" navigation={navigation} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Profile!</Text>
      </View>
    </SafeAreaView>
  );
}

function TimeScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Time" navigation={navigation} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Time!</Text>
      </View>
    </SafeAreaView>
  );
}

function BudgeScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Budge" navigation={navigation} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Budge!</Text>
      </View>
    </SafeAreaView>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{height: 150, alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={require('./src/images/iconuser.png')}
          style={{height: 120, width: 120}}
        />
      </View>
      <ScrollView style={{marginLeft: 5}}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('MenuTab')}
          style={{marginTop: 20}}>
          <Text> Menu Tab </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Notifications')}
          style={{marginTop: 20}}>
          <Text> Notifications </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Projects') {
            iconName = focused
              ? require('./src/images/project.png')
              : require('./src/images/concept.png');
          } else if (route.name === 'Home') {
            iconName = focused
              ? require('./src/images/home.png')
              : require('./src/images/home.png');
          } else if (route.name === 'Profile') {
            iconName = focused
              ? require('./src/images/userColor.png')
              : require('./src/images/user.png');
          } else if (route.name === 'Time') {
            iconName = focused
              ? require('./src/images/clockColor.png')
              : require('./src/images/clock.png');
          } else if (route.name === 'Budge') {
            iconName = focused
              ? require('./src/images/moneyColor.png')
              : require('./src/images/budget.png');
          }

          // You can return any component that you like here!
          return (
            <Image
              source={iconName}
              style={{width: 20, height: 20}}
              resizeMode="contain"
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Projects" component={ProjectsScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfieScreen} />
      <Tab.Screen name="Time" component={TimeScreen} />
      <Tab.Screen name="Budge" component={BudgeScreen} />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="MenuTab"
        drawerContent={props => CustomDrawerContent(props)}>
        <Drawer.Screen name="MenuTab" component={TabNavigator} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

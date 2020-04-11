import ProjectsPage from './src/components/ProjectsPage';
import React from 'react';
import {View, Text} from 'react-native';
import NotFound from './src/components/NotFound';
import Footer from './src/components/Footer';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
const navigationStak = createStackNavigator({
  ProjectsPage: {screen: ProjectsPage},
  NotFound: {screen: NotFound},
  Footer: {screen: Footer},
});

const Navigation = createAppContainer(navigationStak);

const App = () => {
  return <Navigation />;
};

export default App;

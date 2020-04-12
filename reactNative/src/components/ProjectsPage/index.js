import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
  Button,
} from 'react-native';
import Projects from '../Projects';
import Skills from '../Skills';
import Personal from '../Personal';
import Footer from '../Footer';

class ProjectsPage extends React.Component {
  static navigationOptions = {
    header: null,
  };

  moveTo = () => {
    this.props.navigation.navigate('NotFound');
  };

  render() {
    console.log('hi');

    return (
      <ScrollView>
        <View style={styles.page}>
          <Personal />
          <Skills />
          <Projects />
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  page: {
    margin: 0,
    padding: 0,
  },
  menu: {
    width: 50,
    borderColor: 'gray',
    borderWidth: 1,
    height: 30,
    padding: 1,
    marginBottom: '4%',
  },
});

export default ProjectsPage;

/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import data from '../../data/info.js';

class Projects extends React.Component {
  state = {
    projects: data.projects,
  };

  render() {
    return (
      <View style={styles.projects}>
        <ScrollView>
          <Text style={{marginLeft: '1%', fontSize: 16}}>projects</Text>
          {this.state.projects.length === 0 ? (
            <Text>Loading</Text>
          ) : (
            <View style={styles.container}>
              {this.state.projects.map((item, i) => (
                <View style={styles.photos_view} key={i}>
                  <Text>{item.name}</Text>
                  <Image
                    style={styles.category_photo}
                    source={{
                      uri: item.imgProject,
                    }}
                  />
                </View>
              ))}
            </View>
          )}
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
    width: '98%',
    marginLeft: '1%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '4%',
  },
  category_photo: {
    backgroundColor: 'blue',
    width: '100%',
    height: 80,
    borderColor: 'grey',
    borderWidth: 2,
  },
  photos_view: {
    width: '28%',
  },
});

export default Projects;

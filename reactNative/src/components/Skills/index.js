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

class Skills extends React.Component {
  state = {
    skills: ['skill 1', 'skill 2', 'skill 3'],
  };

  render() {
    return (
      <View style={styles.projects}>
        <ScrollView>
          <Text style={{marginLeft: '1%', fontSize: 16}}>Skills</Text>
          {this.state.skills.length === 0 ? (
            <Text>Loading</Text>
          ) : (
            <View style={styles.container}>
              {this.state.skills.map((item, i) => (
                <View style={styles.photos_view} key={i}>
                  <Text
                    style={{
                      textAlign: 'center',
                      marginTop: '38%',
                      fontSize: 16,
                    }}>
                    {item}
                  </Text>
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
    marginBottom: '4%',
  },
  photos_view: {
    width: 70,
    height: 70,
    borderRadius: 100,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

export default Skills;

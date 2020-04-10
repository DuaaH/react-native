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

class Personal extends React.Component {
  state = {};

  render() {
    return (
      <View style={styles.projects}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.picture_view}>
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: '38%',
                  fontSize: 16,
                }}>
                Picture
              </Text>
            </View>
            <View style={styles.info_view}>
              <Text>Name</Text>
              <Text>Mobile</Text>
              <Text>ID number</Text>
            </View>
          </View>
          <View style={styles.other_view}>
            <View>
              <Text style={styles.score_view}>Score</Text>
              <Text style={styles.availbile_view}>Availabilty</Text>
            </View>
            <View>
              <Text style={{marginLeft: '5%'}}>Education</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: '4%',
    marginLeft: '3%',
  },
  picture_view: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: 'grey',
    borderWidth: 2,
  },
  info_view: {
    flex: 1,
    justifyContent: 'space-between',
    height: 100,
    marginLeft: '1%',
  },
  other_view: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: '3%',
    marginBottom: '2%',
  },
  score_view: {
    width: 100,
    textAlign: 'center',
  },
  availbile_view: {
    width: 100,
    color: '#fff',
    borderWidth: 1,
    borderColor: '#44BCD9',
    backgroundColor: '#44BCD9',
    textAlign: 'center',
    borderRadius: 4,
  },
});

export default Personal;

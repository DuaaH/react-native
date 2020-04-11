import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

class Footer extends React.Component {
  render() {
    return (
      <View style={styles.footer_view}>
        <TouchableOpacity style={styles.btn} onPress={this.props.moveTo}>
          <Text style={styles.text_home}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={this.props.moveTo}>
          <Text style={styles.text_home}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text
            style={{
              fontSize: 16,
              textAlign: 'center',
              backgroundColor: 'green',
              height: '100%',
            }}>
            Projects
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={this.props.moveTo}>
          <Text style={styles.text_home}>Time</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={this.props.moveTo}>
          <Text style={styles.text_home}>Budge</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer_view: {
    flex: 1,
    flexDirection: 'row',
    left: 0,
    right: 0,
    height: 40,
    paddingVertical: 0,
  },
  btn: {
    width: '20%',
    height: 40,
    backgroundColor: '#fff',
    borderColor: 'black',
    borderWidth: 0.5,
    marginVertical: 10,
  },
  text_home: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Footer;

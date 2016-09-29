import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { NavigatorContainer } from '~/containers';

export default class AppContainer extends Component {
  // static propTypes = {
  //
  // }
  render() {
    return (
      <View style={{ flex:1 }}>
        <NavigatorContainer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

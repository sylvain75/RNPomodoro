import React, { Component } from 'react';
import {
  View,
  Text,
  Navigator,
  StyleSheet,
} from 'react-native';
import { SplashContainer } from '~/containers';

// const {
//    CardStack: NavigationCardStack,
//    StateUtils: NavigationStateUtils
//   } = NavigationExperimental

export default class NavigatorContainer extends Component {
  renderScene(route, navigator) {
    // if (route.home) {
    //   return <HomeContainer navigator={navigator} />;
    // } else if (route.notifications) {
    //   return <NotificationsConainer navigator={navigator} />;
    // } else {
    //   return <FooterTabsContainer navigator={navigator} />;
    // }
    return <SplashContainer navigator={navigator}/>
  }

  configureScene(route) {

  }

  render() {
    return (
      <Navigator
        renderScene={this.renderScene}
        configureScene={this.configureScene}
        />
    );
  }
}

const styles = StyleSheet.create({

});

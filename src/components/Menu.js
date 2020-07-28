/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground
} from 'react-native';


import { NativeRouter, Route, Link } from "react-router-native";

import Home from './Home';
import Characters from './Characters';
import Spells from './Spells';


export default Menu = () => {
  return (
    <NativeRouter>
    <View style={styles.container}>
      <ImageBackground source={require("../images/home.jpg")} style={{width: '100%', height: '100%'}}>
        <View style={styles.nav}>
          <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text style={styles.navItemText}>Home</Text>
          </Link>
          <Link
            to="/characters"
            underlayColor="#f0f4f7"
            style={styles.navItem}
          >
            <Text style={styles.navItemText}>Characters</Text>
          </Link>
          <Link
            to="/spells"
            underlayColor="#f0f4f7"
            style={styles.navItem}
          >
            <Text style={styles.navItemText}>Spells</Text>
          </Link>
        </View>

        <Route exact path="/" component={Home} />
        <Route path="/characters" component={Characters} />
        <Route path="/spells" component={Spells} />
        
      </ImageBackground>      
    </View>
  </NativeRouter>
  );
};

const styles = StyleSheet.create({
  container: {
    
    
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    backgroundColor: "#7292F2",
    opacity: 0.8
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  navItemText: {
      fontWeight: 'bold',
      color: "white",
      fontFamily: "sans-serif",
      fontSize: 15
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
})



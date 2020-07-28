import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

export default Home = () => {
    return (
        <View style={styles.textContainerMain}>
            <View style={styles.textContainer}>
                <Text style={styles.headerText}>Welcome to the Harry Potter App!</Text>
                <Text style={styles.bodyText}>Here you can look for the information of your favorite characters or your favorite spells.</Text>
                <Text style={styles.bodyText}>Please, select the respective menu option above and don't forget "Wingardium Leviosa"</Text>
            </View>
        </View>
    )
}


const styles = {
    textContainerMain: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainer: {
      backgroundColor: '#151B40',
      opacity: 0.75
    },
    headerText: {        
      fontWeight: 'bold',
      color: "white",
      fontFamily: "sans-serif",
      fontSize: 25,
      textAlign: 'center'
    },
    bodyText: {
      color: "white",
      fontFamily: "sans-serif",
      fontSize: 20,
      textAlign: 'center',
      marginTop: 20
    }
}

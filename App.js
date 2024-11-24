import React from "react";
import { View, Text, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      {/* Component 1: Text in the center */}
      <Text style={styles.text}>Hi, welcome to my DPM task
        
      </Text>

      {/* Component 2: Animated Boxes with Flexbox layout */}
      <View style={styles.boxContainer}>
        <View style={[styles.box, styles.box1]} />
        <View style={[styles.box, styles.box2]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',  
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20, 
    flexDirection: 'column', 
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "blue", 
    textShadowColor: 'rgba(0, 0, 0, 0.5)', 
    textShadowOffset: { width: 2, height: 2 }, 
    textShadowRadius: 4, 
    marginBottom: 20, 
  },
  boxContainer: {
    flexDirection: 'row',  
    justifyContent: 'space-evenly',  
    width: '100%', 
    paddingHorizontal: 20, 
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 10, 
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.2, 
    shadowRadius: 6, 
    transform: [{ scale: 0.9 }], 
  },
  box1: {
    backgroundColor: 'green', // green box
  },
  box2: {
    backgroundColor: 'yellow', // yellow box
  },
});

export default App;
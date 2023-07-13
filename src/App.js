import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet, Platform } from "react-native";
import StageOne from "./components/StageOne";
import StageTwo from "./components/StageTwo";
import { MyContext } from "./contexts";

class App extends Component {
  static contextType = MyContext;
  render() {
    //  alert(`${this.context}`)
    return (
      <ScrollView>
        <View style={styles.container}>
          {this.context.state.stage === 1 ? <StageOne /> : <StageTwo />}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginTop: Platform.OS === "ios" ? 80 : 30
  }
});

export default App;

import React, { useContext } from "react";
import { Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";
import { MyContext } from "../contexts";

const StageTwo = () => {
  const context = useContext(MyContext);

  return (
    <>
      <Text>Who pays the bill ?</Text>
      <Text>The looser is</Text>
      <Text style={styles.looserWrapper}>{context.state.result}</Text>
      <Button
        buttonStyle={styles.button}
        title="Try again"
        onPress={() => context.getNewLooser()}
      />
      <Button
        buttonStyle={styles.button}
        title="Start over"
        onPress={() => context.resetGame()}
      />
    </>
  );
};

const styles = StyleSheet.create({
  looserWrapper: {
    fontSize: 30,
    marginTop: 30
  },
  button: {
    backgroundColor: "#41b6e6",
    marginTop: 20
  }
});

export default StageTwo;

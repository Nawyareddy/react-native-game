import { Formik } from "formik";
import * as Yup from "yup";
import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { MyContext } from "../contexts";
import { Input } from "react-native-elements/dist/input/Input";
import { Button } from "react-native-elements/dist/buttons/Button";

const StageOne = () => {
  const context = useContext(MyContext);

  const renderPlayers = () =>
    context.state.players.map((item, i) => (
      <Text key={i} onPress={() => context.removePlayers(i)}>
        {item}
      </Text>
    ));
  return (
    <>
      <Formik
        initialValues={{ player: "" }}
        validationSchema={Yup.object({
          player: Yup.string()
            .min(3, "Must be more than 3 char")
            .max(15, "Must be 15 char or less")
            .required("Sorry, the name is required")
        })}
        onSubmit={(values, { resetForm }) => {
          context.addPlayer(values.player);
          resetForm();
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors
        }) => (
          <>
            <Text>Who pays the bill ?</Text>
            <Input
              placeholder="Add name here"
              leftIcon={{ type: "antdesign", name: "adduser" }}
              inputContainerStyle={{
                marginHorizontal: 50,
                marginTop: 50
              }}
              renderErrorMessage={errors.player && touched.player}
              errorMessage={errors.player}
              errorStyle={{
                marginHorizontal: 50
              }}
              onChangeText={handleChange("player")}
              onBlur={handleBlur("player")}
              value={values.player}
            />
            <Button
              buttonStyle={styles.button}
              title="Add player"
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
      <View style={{ padding: 20, width: "100%" }}>
        {context.state.players && context.state.players.length > 0 ? (
          <>
            <Text>List of players:</Text>
            {renderPlayers()}
            <Button
              buttonStyle={styles.button}
              title="Get the looser"
              onPress={() => context.next()}
            />
          </>
        ) : null}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#DB3EB1",
    marginTop: 20
  }
});

export default StageOne;

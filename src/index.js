import { AppRegistry } from "react-native";
import Toast from "react-native-toast-message";
import App from "./App";
import { MyProvider } from "./contexts";

const provider = () => (
  <MyProvider>
    <App />
    <Toast ref={(ref) => Toast.setRef(ref)} />
  </MyProvider>
);

AppRegistry.registerComponent("App", () => provider);

AppRegistry.runApplication("App", {
  rootTag: document.getElementById("root")
});

import React, { Component } from "react";
import { AppRegistry, View } from "react-native";
import Component2 from "./components/Component2";
import Component1 from "./components/Component1";
/* 
//import FirstPage from "../app/pages/FirstPage";

export default class App extends Component {
  render() {
    return (
      <View>
        <Component2 />
      </View>
    );
  }
}

AppRegistry.registerComponent("App", () => App);
 */
import { createStackNavigator, createAppContainer } from "react-navigation";

const MainNavigator = createStackNavigator({
  Home: { screen: Component1 },
  Profile: { screen: Component2 }
});

const App = createAppContainer(MainNavigator);

export default App;

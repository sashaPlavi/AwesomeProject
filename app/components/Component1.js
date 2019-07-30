import React, { Component } from "react";
import {
  AppRegistry,
  View,
  Text,
  TextInput,
  Switch,
  Button
} from "react-native";

export default class Component1 extends Component {
  constructor() {
    super();
    this.state = {
      TextValue: "",
      switchValue: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSwitch = this.onSwitch.bind(this);
  }
  handleChange(value) {
    this.setState({
      TextValue: value
    });
  }
  onSwitch(value) {
    this.setState({
      switchValue: value
    });
  }
  render() {
    console.log(this.state.switchValue);

    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>new component</Text>
        <TextInput
          placeholder="enter text"
          value={this.state.TextValue}
          onChangeText={this.handleChange}
        />
        <Text>{this.state.TextValue}</Text>
        <Switch value={this.state.switchValue} onValueChange={this.onSwitch} />
        {<Button title="Checkout users" onPress={() => navigate("Profile")} />}
      </View>
    );
  }
}

AppRegistry.registerComponent("Component1", () => Component1);

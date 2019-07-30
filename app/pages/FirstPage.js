import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";
import { white } from "ansi-colors";

export default class FirstPage extends Component {
  constructor() {
    super();
    this.state = {
      name: "Sasha",
      showName: true
    };
  }

  handlePress() {
    console.log("pressed!!!");
  }
  HandleOpacity() {
    console.log("Opaciti pressed");
  }

  render() {
    console.log("hi there");

    const name = this.state.showName ? this.state.name : "";
    return (
      <View style={styles.Myview}>
        <Text>Hello, world!</Text>
        <Text style={styles.myText}>juuutuuhoooo....konacno</Text>
        <Text>{name}</Text>
        <Text>{this.props.mesage}</Text>
        <View style={styles.container}>
          <TouchableHighlight onPress={this.handlePress}>
            <View style={styles.v1}>
              <Text>view 1</Text>
            </View>
          </TouchableHighlight>
          <TouchableOpacity onPress={this.HandleOpacity}>
            <View style={styles.v2}>
              <Text>view 2</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.v3}>
            <Text>view 3</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Myview: {
    backgroundColor: "gray"
  },
  myText: {
    color: "white"
  },
  container: {
    flexDirection: "row",
    height: 100,
    backgroundColor: "white"
  },
  v1: {
    flex: 1,
    backgroundColor: "orange",
    padding: 10
  },
  v2: {
    flex: 1,
    backgroundColor: "green",
    padding: 10
  },
  v3: {
    flex: 1,
    backgroundColor: "red",
    padding: 10
  }
});

AppRegistry.registerComponent("FirstPage", () => FirstPage);

import React, { Component } from "react";
import { AppRegistry, View, Text, FlatList } from "react-native";

const users = [
  { name: "Perica Peric " },
  { name: "Laza Lazic" },
  { name: "Jovica Jovanovic" }
];
export default class Component2 extends Component {
  constructor() {
    super();
    this.state = {
      apiUsers: []
    };
    //this.renderNewUsers = this.renderNewUsers.bind(this);
  }

  componentDidMount() {
    this.fetchUsers();
  }
  fetchUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(res => {
        this.setState({
          apiUsers: res
        });

        //console.log(this.state.apiUsers);
      });
  }

  render() {
    return (
      <View>
        <Text>component2</Text>
        <FlatList
          data={users}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          horizontal={false}
        />
        <Text>new users</Text>
        <View>
          <FlatList
            data={this.state.apiUsers}
            renderItem={({ item }) => (
              <Text>
                {item.name} : => {item.email}
              </Text>
            )}
          />
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent("Component2", () => Component2);

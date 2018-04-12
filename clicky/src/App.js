import React from "react";
import FriendCard from "./components/FriendCard";
import HeaderCard from "./components/HeaderCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {
  state = {
    friends,
    points: 0,
  }

  onClick = id => {
    console.log(this.state.friends[id]);
    if (this.state.friends[id].clicked) {
      let friends = this.state.friends;
      friends = this.randomize(friends);
      this.setState({friends, points: 0});
    } else {
      let newFriends = this.state.friends;
      newFriends[id].clicked = true;
      newFriends = this.randomize(newFriends);
      this.setState({friends: newFriends, points: this.state.points + 1})
    }
  }

  randomize = friends => {
    for (var i = friends.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = friends[i];
      friends[i] = friends[j];
      friends[j] = temp;
  }
  return friends;
  }

  render() {
    return (
      <div>
        <HeaderCard points = {this.state.points}/>      
        <Wrapper>
          {this.state.friends.map(friends => <FriendCard
            image={friends.image}
            key={friends.id}
            id={friends.id}
            click={this.onClick}
          />)}
        </Wrapper>
      </div>
    )
  }
};

export default App;

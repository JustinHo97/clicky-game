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
    let newFriend = this.state.friends.filter(friend => friend.id === id);
    console.log(newFriend[0]);
    if (newFriend[0].clicked) {
      let resetFriend = this.state.friends;
      for (let i = 0; i < friends.length; i++) {
        resetFriend[i].clicked = false;
      }
      console.log(resetFriend);
      this.setState({friends: this.randomize(resetFriend), points: 0});
    } else {
      const index = this.state.friends.findIndex(friend => friend.id === id);
      console.log(index);
      let newFriends = this.state.friends;
      newFriends[index].clicked = true;
      newFriends = this.randomize(newFriends);
      this.setState({friends: newFriends, points: this.state.points + 1})
    }
  }

  randomize = randofriends => {
    for (var i = randofriends.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = randofriends[i];
      randofriends[i] = randofriends[j];
      randofriends[j] = temp;
  }
  return randofriends;
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

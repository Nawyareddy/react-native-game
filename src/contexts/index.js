import React, { Component } from "react";
import Toast from "react-native-toast-message";

const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    stage: 1,
    players: [],
    result: ""
  };

  handleAddPlayers = (name) => {
    this.setState((prevState, props) => ({
      players: [...prevState.players, name]
    }));
  };

  handleRemovePlayers = (i) => {
    let newArray = this.state.players;
    newArray.splice(i, 1);
    this.setState({ players: newArray });
  };

  handleNextPage = () => {
    const { players } = this.state;
    if (players.length < 2) {
      Toast.show({
        type: "error",
        text1: "Sorry",
        text2: "you need at least 2 players",
        position: "bottom"
      });
    } else {
      this.setState(
        {
          stage: 2
        },
        () => {
          this.handleGenerateLooser();
        }
      );
    }
  };

  handleGenerateLooser = () => {
    const { players } = this.state;
    this.setState({
      result: players[Math.floor(Math.random() * players.length)]
    });
  };

  handleResetGame = () => {
    this.setState({
      stage: 1,
      players: [],
      result: ""
    });
  };

  render() {
    return (
      <>
        <MyContext.Provider
          value={{
            state: this.state,
            addPlayer: this.handleAddPlayers,
            removePlayers: this.handleRemovePlayers,
            next: this.handleNextPage,
            getNewLooser: this.handleGenerateLooser,
            resetGame: this.handleResetGame
          }}
        >
          {this.props.children}
        </MyContext.Provider>
      </>
    );
  }
}

export { MyContext, MyProvider };

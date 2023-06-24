import React, { Component } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);

   // State for this class containing a Person
    this.state = {
      person: {
        fullName: "Terra Sarr",
        bio: "Lorem ipsum dolor sit amet.",
        imgSrc: "/img/terra.jpg",
        profession: "Apprenti codeur"
      },
      show: false,
      intervalId: null,
      elapsedTime: 0
    };
  }
  //field that shows the time interval since the last component was mounted using the component lifecycle & setInterva used here.
  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState((prevState) => ({
        elapsedTime: prevState.elapsedTime + 1
      }));
    }, 1000);

    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show
    }));
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, elapsedTime } = this.state;

//button that toggles the show state

    return (
      <div className="app-container">
        <button onClick={this.toggleShow}>WIEW MY PROFILE </button>
        <p>Elapsed time: {elapsedTime} seconds</p>
        {show && (
          <div className="person-container">
            <h1>{fullName}</h1>
            <p>{bio}</p>
            <img src={imgSrc} alt={fullName} />
            <p style={{fontSize:'25px'}}>{profession}</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;


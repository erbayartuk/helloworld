import React, { Component } from "react";

export default class component_class extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {
      weekDays: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      weekIndex: this.props.index,
      date: new Date(),
      isLoggedIn: false,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }
  handleSubmit() {
    console.log("Clicked", this.state.date);
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <>
        <div style={{ color: this.props.color }}>component_class</div>
        <div>
          <ul>
            {this.state.weekDays.map((weekDay, index) => (
              <li key={index}>{weekDay}</li>
            ))}
          </ul>
        </div>
        <div>İndex:{this.state.weekIndex}</div>
        <div>Time: {this.state.date.toLocaleTimeString()}</div>
        <div>
          <button onClick={() => this.handleSubmit()}>Submit</button>
        </div>
        <div>{button}</div>
      </>
    );
  }
}

function LoginButton(props) {
  return <button onClick={props.onClick}>Giriş Yap</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Çıkış Yap</button>;
}

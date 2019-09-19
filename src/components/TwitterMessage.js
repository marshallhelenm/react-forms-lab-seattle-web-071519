import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweet: ''
    };
  }

  remainingChar = () => {
    return 140 - this.state.tweet.length
  }

  handleChange = (event) => {
    this.setState({
      tweet: event.target.value
    })
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.tweet} onChange={this.handleChange} />
        <p>Remaining Characters: {this.remainingChar()}</p>
      </div>
    );
  }
}

export default TwitterMessage;

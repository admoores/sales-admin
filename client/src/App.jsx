import React from 'react'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      testNum: 0
    }
  }

  updateNum() {
    this.setState({
      testNum: this.state.testNum + 1
    })
  }

  render () {
    return (
      <div>
        <p>The Number is: {this.state.testNum}</p>
        <a onClick={this.updateNum.bind(this)}>Increment Number</a>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));


// Write your code here

import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}

  eatMango = () => {
    // const {mangoes} = this.state
    this.setState(prevState => ({mangoes: prevState.mangoes + 1}))
  }

  eatBanana = () => {
    // const {bananas} = this.state
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }

  render() {
    const {mangoes, bananas} = this.state
    return (
      <div className="main">
        <div className="card-2">
          <h1>
            Bob ate {mangoes} mangoes {bananas} bananas
          </h1>
          <div className="fruits-cont">
            <div className="fruit-card">
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button className="btn" onClick={this.eatMango} type="button">
                Eat mango
              </button>
            </div>
            <div className="fruit-card">
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button onClick={this.eatBanana} className="btn" type="button">
                Eat banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter

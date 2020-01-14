import React, {Component} from 'react'

class SmokeCounter extends Component {

    state = {
        count: 0
      }
    
      handleIncrement = () => {
        this.setState(prevState => {
          return {
            count: ++prevState.count
          }
        })
      }
    
      handleDecrement = () => {
        this.setState(prevState => {
          return {
            count: --prevState.count
          }
        })
      }

      handleReset = () => {
          this.setState(prevState => {
              return{
                  count: 0
              }
          })
      }
    
      componentDidUpdate() {
        localStorage.setItem('_increment', JSON.stringify(this.state))  
      }
    
      componentDidMount() {
        const data = localStorage.getItem('_increment')
        if(data) {
          this.setState(prevState => {
            return JSON.parse(data)
          })
        }
      }
    
      render() {
          if (this.state.count === 10) {
              return <div>
                  <p>Vse gg</p>
                  <button onClick={this.handleReset}>Reset</button>
              </div>
          } else if (this.state.count === -1) {
                return <div>
                  <p>vashe bolnoy?</p>
                  <button onClick={this.handleReset}>Reset</button>
                </div>
          }
        return <div>
                  <button onClick={this.handleIncrement}>+</button>
                  <h2>{this.state.count}</h2>
                  
                  <button onClick={this.handleDecrement}>-</button>
               </div> 
      }
}

export default SmokeCounter
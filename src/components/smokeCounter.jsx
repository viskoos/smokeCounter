import React, {Component} from 'react'
import './smokeCounter.css'

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
              return <div className="question">
                  <p className="title">Сегодня все, гг. Покуришь завтра.</p>
                  <button className="reset-btn" onClick={this.handleReset}>Уже завтра</button>
              </div>
          } else if (this.state.count === -1) {
                return <div className="question">
                  <p className="title">vashe bolnoy?</p>
                  <button className="reset-btn" onClick={this.handleReset}>Покурить</button>
                </div>
          }
        return <div className="conteinerok">
                  <div className="jojo">
                    <button onClick={this.handleIncrement} className="increment">+</button>
                    <button onClick={this.handleDecrement} className="decrement">-</button>
                  </div>
                  <h2 className="counter">{this.state.count}</h2>
               </div> 
      }
}

export default SmokeCounter
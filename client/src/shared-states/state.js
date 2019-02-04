import Broker from './broker'

class State {
  constructor(initial = null) {
    this._broker = new Broker()
    this._state = initial
  }
  
  subscribe(...args) {
    return this._broker.subscribe(...args)
  }
  
  setValue(val) {
    this._state = val
    return this._broker.publish(this._state)
  }
  
  getValue() {
    return this._state
  }
}

export default State
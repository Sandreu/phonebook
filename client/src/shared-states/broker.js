export default class Broker {
  constructor() {
    this._listeners = []
  }
  
  subscribe(fn) {
    this._listeners.push(fn)
    return () => {
      let i = this._listeners.indexOf(fn)
      if (i>-1) this._listeners.splice(i, 1)
    }
  }
  
  publish(...args) {
    return Promise.all(this._listeners.map(fn => fn(...args)))
  }
}
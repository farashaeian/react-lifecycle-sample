import { Component } from 'react';
// import Clock from './components/Clock';
import SecondClock from './components/SecondClock';
import './App.css';

/**
 *  // Note Mounting Lifecycle In Class Componenets
 *  - constructor()
 *  - static getDerivedStateFromProps(props, state) : will change states if props were changed.
 *  - render()
 *  - componentDidMount()
 *  
 */

class App extends Component {

  constructor() {
    super();

    console.log("App.js - constructor()");
    this.state = { date: new Date(), showClock: true, color: false };
    this.clockChange = this.clockChange.bind(this);
    this.colorChange = this.colorChange.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    console.log("App.js - getDerivedStateFromState()");
    return state;
  }

  componentDidMount() {
    console.log("App.js - componentDidMount()");
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    console.log("App.js - componentWillUnmount()")
    clearInterval(this.timer);
  }

  tick() {
    // can be commented to see console logs results and preventing updating clock:
    this.setState({ date: new Date() });
  }

  clockChange() {
    this.setState({ showClock: !this.state.showClock });
  }

  colorChange() {
    this.setState({ color: !this.state.color});
  }

  render() {
    console.log("App.js - render()");
    const { date, showClock, color } = this.state;
    return (
      <div className='App'>
        <p>
          سلام دوست عزیز
        </p>
        {/* {showClock ? <Clock date={date} color={color} /> : null} */}
        {showClock ? <SecondClock date={date} color={color} /> : null}
        <hr />
        <button onClick={this.clockChange} >
          نمایش ساعت
        </button>
        <button onClick={this.colorChange} >
          تغییر رنگ ساعت
        </button>
      </div>
    );
  }
}

export default App;

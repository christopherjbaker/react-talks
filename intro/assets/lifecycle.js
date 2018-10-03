class MyComponent extends Component {
  componentDidMount() {
    this._interval = setInterval(() => {
      // ...
    }, 1000);
  }

  componentWillUnmount() {
    this._interval = clearInterval(this._interval);
  }

  render() {
    return (
      <div>Hello, World!</div>
    );
  }
}

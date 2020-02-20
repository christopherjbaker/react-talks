class Timer extends React.Component {
  state = {
    value: false,
  }

  componentWillMount() {
    this._timer = setTimeout(() =>
      this.setState({ value: true }), 2500)
  }

  componentWillUnmount() {
    this._timer = clearTimeout(this._timer)
  }

  render() {
    const { value } = this.state;

    return (
      <div>{value ? 'Done!' : 'Waiting...'}</div>
    )
  }
}

class Timer extends React.Component {
  state = {
    value1: false,
    value2: false,
  }

  componentWillMount() {
    this._timer1 = setTimeout(() =>
      this.setState({ value1: true }), 1500)
    this._timer2 = setTimeout(() =>
      this.setState({ value2: true }), 2500)
  }

  componentWillUnmount() {
    this._timer1 = clearTimeout(this._timer1)
    this._timer2 = clearTimeout(this._timer2)
  }

  render() {
    const { value1, value2 } = this.state;

    return (
      <>
        <div>{value1 ? 'Done!' : 'Waiting...'}</div>
        <div>{value2 ? 'Done!' : 'Waiting...'}</div>
      </>
    )
  }
}

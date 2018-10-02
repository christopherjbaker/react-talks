class Counter extends Component {
  onDecrement() => {
    const { value, onChange } = this.props;

    return onChange(value - 1);
  }

  onIncrement() => {
    const { value, onChange } = this.props;

    return onChange(value + 1);
  }

  render() {
    const { value } = this.props;

    return (
      <div>
        <button onClick={this.onDecrement}>--</button>
        <span>{value}</span>
        <button onClick={this.onIncrement}>++</button>
      </div>
    );
  }
}

function Hello({ name }) {
  return (
    <div>{name}</div>
  );
};

class Hello extends Component {
  render() {
    const { name } = this.props;

    return (
      <div>{name}</div>
    );
  }
}

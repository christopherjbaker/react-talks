setValue(value) {
  this.setState({ value });
  this.state.value !== value
}

setValue(value) {
  this.setState({ value }, () => {
    this.state.value === value
  });
}

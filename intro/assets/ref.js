class Map extends Component {
  onRef(el) => {
    if (!el) {
      this._map = null;
      return null;
    }

    this._map = new GoogleMap(el);
    // ...
  }

  render() {
    return (
      <div ref={this.onRef} />
    );
  }
}

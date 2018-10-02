class UncontrolledContactForm extends Component {
  state = {
    name: '',
    email: '',
    message: '',
  }

  // not strictly necessary if you don't need to allow initial values
  componentDidMount() {
    const { name, email, message } = this.state;
    const { initialName, initialEmail, initialMessage } = this.props;

    return this.setState({
      name: initialName || name,
      email: initialEmail || email,
      message: initialMessage || message,
    });
  }

  // possibly some initial validation
  setName(e) => this.setState({ name: e.target.value })
  setEmail(e) => this.setState({ email: e.target.value })
  setMessage(e) => this.setState({ message: e.target.value })

  onSubmit() => {
    const { onSubmit } = this.props;
    const { name, email, message } = this.state;

    // final validation

    return onSubmit({ name, email, message })
  }

  render() {
    const { name, email, message } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>Name></label>
          <input type="text" value={name} onChange={this.setName} />
        </div>
        <div>
          <label>Email></label>
          <input type="email" value={email} onChange={this.setEmail} />
        </div>
        <div>
          <label>Message></label>
          <textarea value={message} onChange={this.setMessage} />
        </div>
      </form>
    );
  }
}

class UncontrolledContactForm extends Component {
  constructor(props) {
    super(props);

    // not strictly necessary if you don't need to allow initial values
    const { initialName, initialEmail, initialMessage } = props;

    this.state = {
      name: initialName || '',
      email: initialEmail || '',
      message: initialMessage || '',
    };
  }

  // possibly some initial validation
  setName(e) => this.setState({ name: e.target.value })
  setEmail(e) => this.setState({ email: e.target.value })
  setMessage(e) => this.setState({ message: e.target.value })

  onSubmit() => {
    const { onSubmit } = this.props;
    const { name, email, message } = this.state;

    // final validation

    return onSubmit({ name, email, message });
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

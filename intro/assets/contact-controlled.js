class ControlledContactForm extends Component {
  // possibly some initial validation
  setName(e) => this.props.setName(e.target.value)
  setEmail(e) => this.props.setEmail(e.target.value)
  setMessage(e) => this.props.setMessage(e.target.value)

  onSubmit() => {
    const { onSubmit } = this.props;
    const { name, email, message } = this.props;

    // final validation

    return onSubmit({ name, email, message })
  }

  render() {
    const { name, email, message } = this.props;

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

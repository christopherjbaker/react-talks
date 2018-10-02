class ContactForm extends Component {
  refName(el) => this._name = el

  onSubmit() => {
    const { email, onSubmit } = this.props;
    const name = this._name.value;

    return onSubmit({ email, name });
  }

  render() {
    const { email, setEmail } = this.props;

    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>Name (Uncontrolled)</label>
          <input
            type="text"
            defaultValue="Christopher"
            ref={this.refName}
          />
        </div>
        <div>
          <label>Email (Controlled)</label>
          <input
            type="email"
            value={email}
            onChange={setEmail}
          />
        </div>
      </form>
    );
  }
}

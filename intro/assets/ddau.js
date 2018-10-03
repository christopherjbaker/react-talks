function ContactForm({ email, setEmail }) {
  return (
    <input
      type="email"
      value={email}
      onChange={setEmail}
    />
  );
}

import styles from './css-modules.css';

function Thing() {
  const { bar } = this.props;

  let className = styles.foo;
  if (bar) {
    className += ' ' + styles.bar;
  }

  return (
    <div className={className}>Hello World!</div>
  );
}

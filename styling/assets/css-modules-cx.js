import styles from './css-modules.css';
import cx from 'classnames';

function Thing() {
  const { bar } = this.props;

  return (
    <div className={cx(styles.foo, bar && styles.bar)}>
      Hello World!
    </div>
  );
}

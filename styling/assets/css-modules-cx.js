import styles from './css-modules.css';
import cx from 'classnames';

function Thing() {
  const { bar, active } = this.props;

  return (
    <div className={cx(
      styles.foo,
      bar && styles.bar,
      { 'active': active },
    )}>
      Hello World!
    </div>
  );
}

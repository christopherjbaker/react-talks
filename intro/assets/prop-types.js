class Component1 extends Component {
  static propTypes = {
    optionalString: PropTypes.string,
    optionalNumber: PropTypes.number,
    requiredFunc: PropTypes.func.isRequired,
    requiredBool: PropTypes.bool.isRequired,
  }

  // ...
}

class Component2 extends Component {
  // ...
}

Component2.propTypes = {
  optionalNode: PropTypes.node,
  optionalElement: PropTypes.element,
  optionalEnum: PropTypes.oneOf([ 'News', 'Photos' ]),
  optionalUnion: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Message)
  ]),
  requiredArrayOf: PropTypes.arrayOf(PropTypes.number).isRequired,
  requiredObjectOf: PropTypes.objectOf(PropTypes.number).isRequired,
  optionalObjectWithShape: PropTypes.shape({
    optionalProperty: PropTypes.string,
    requiredProperty: PropTypes.number.isRequired
  }),
};

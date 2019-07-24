import React from 'react';

class Foo extends React.PureComponent {
  render() {
    return <div>{this.props.name}</div>;
  }
}

const Foo = React.memo(({ name }) => {
  return <div>{this.props.name}</div>;
});

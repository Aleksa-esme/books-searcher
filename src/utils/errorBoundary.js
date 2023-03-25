import { Component } from 'react';

export class ErrorBoundary extends Component {
 state = {
    error: null,
  };

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      if (this.props.component) {
        return this.props.component;
      } else {
        return <p>Произошла ошибка :(</p>;
      }
    }

    return this.props.children;
  }
}

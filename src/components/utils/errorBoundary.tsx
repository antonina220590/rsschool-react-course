import { Component } from 'react';
import { IProps, IState } from './interface';
import style from './errorBoundary.module.css';

class ErrorBoundary extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error) {
    if (error) {
      this.setState({ hasError: true });
    }
  }

  refreshPage() {
    window.location.reload();
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return (
        <div className={style.errorBox}>
          <h1>Something went wrong...</h1>
          <button
            className={style.reloadBtn}
            type="button"
            onClick={this.refreshPage}
          >
            Reload Page
          </button>
        </div>
      );
    }
    const { children } = this.props;
    return children;
  }
}

export default ErrorBoundary;

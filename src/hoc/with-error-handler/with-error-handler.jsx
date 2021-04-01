import React, { Component } from 'react';

import Modal from '../../components/UI/modal/modal.component';
import Fragment from '../fragment/fragment.hoc';

const WithErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };

    componentDidMount() {
      this.reqInter = axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });
      this.resInter = axios.interceptors.response.use(
        ((res) => res,
        (error) => {
          this.setState({ error: this.props.error });
        })
      );
    }

    componentWillUnmount = () => {
      axios.interceptors.request.eject(this.reqInter);
      axios.interceptors.response.eject(this.resInter);
    };

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <Fragment>
          <Modal
            show={this.props.error}
            modalClosed={this.errorConfirmedHandler}
          >
            {this.props.error ? 'Purchase Successful' : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Fragment>
      );
    }
  };
};

export default WithErrorHandler;

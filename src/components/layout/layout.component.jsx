import React, { Component } from 'react';
import { connect } from 'react-redux';

import Fragment from '../../hoc/fragment/fragment.hoc';
import SideDrawer from '../navigation/side-drawer/side-drawer.component';
import Toolbar from '../navigation/toolbar/toolbar.component';

import './layout.styles.css';

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  render() {
    return (
      <Fragment>
        <Toolbar
          isAuth={this.props.isAuthenticated}
          drawerToggleClicked={this.drawerToggleClickHandler}
        />
        <SideDrawer
          isAuth={this.props.isAuthenticated}
          open={this.state.showSideDrawer}
          closed={this.sideDrawerCloseHandler}
        />
        <main className='content'>{this.props.children} </main>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(Layout);

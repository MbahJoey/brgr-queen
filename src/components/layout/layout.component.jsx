import React, { Component } from 'react';

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
        <Toolbar drawerToggleClicked={this.drawerToggleClickHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerCloseHandler}
        />
        <main className='content'>{this.props.children} </main>
      </Fragment>
    );
  }
}
export default Layout;

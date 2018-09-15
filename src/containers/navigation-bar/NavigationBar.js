import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

@observer
export default class NavigationBar extends Component {
  @observable
  selectedTab = 'home';

  render() {
    return (
      <div />
    );
  }
}

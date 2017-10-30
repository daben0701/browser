import React from 'react';
import classnames from 'classnames';
import { Icon, Popover, Badge, Avatar, Input } from 'antd';
import styles from './layout.less';
const Search = Input.Search;

class Header extends React.Component {

  render() {
    return (
      <div>
        <img src={require('../../../images/biaoti.png')} style={{display: 'inline-block', }}/>
        <div style={{position: 'relative'}}>
          <span style={{position: 'absolute', right: 50, top: -60}}>
            <img src={require('../../../images/ic_search.png')} style={{marginRight: 30}}/>
            <img src={require('../../../images/ic_down.png')} />
          </span>
        </div>
      </div>
    )
  }
}

export default Header;

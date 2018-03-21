import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/mpulse_logo.svg';
import styles from './Header.css';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false}

    this.setWrapperRef = this.setWrapperRef.bind(this);           
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({open: false});
    }
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  };

  componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
  };

  render() {
    return (
      <div id={styles.header} ref={this.setWrapperRef}>
        <FlatButton
          icon={<FontIcon className="material-icons">menu</FontIcon>}
          onClick={this.handleToggle}
          style={
            {
              position: 'absolute',
              top: '50%',
              right: '0px',
              transform: 'translate(0%, -50%)'
            }
          }
        />

        <Drawer openSecondary={true} open={this.state.open}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    )
  }
}

export default Header;
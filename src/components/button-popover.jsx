

import React from 'react';
import { Popover } from 'antd';
import Button from './button';


class ButtonPopover extends React.Component {


  static propTypes = {
    active: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    title: React.PropTypes.string,
    children: React.PropTypes.element,
    label: React.PropTypes.oneOfType( [
      React.PropTypes.string,
      React.PropTypes.element
    ] ).isRequired,

    // block type
    type: React.PropTypes.string.isRequired
  };


  constructor ( props ) {
    super( props );
    this.state = {
      visible: false
    };
  }


  handleToggle = () => {
    this.setState( {
      visible: !this.state.visible
    } );
  };


  handleVisibleChange = ( visible ) => {

    // 关闭气泡
    if ( this.state.visible && !visible ) {
      this.setState( {
        visible: false
      } );
    }
  };


  render () {

    return (
      <Popover
        placement="top"
        visible={this.state.visible}
        content={this.props.children}
        onVisibleChange={this.handleVisibleChange}>
        <Button
          type={this.props.type}
          title={this.props.title}
          label={this.props.label}
          active={this.props.active}
          disabled={this.props.disabled}
          onToggle={this.handleToggle} />
      </Popover>
    );
  }
}


export default ButtonPopover;

import React, { Component } from 'react';
import { menuStyle  , fixedMenuStyle } from '../helpers/styleHelper';
import { Link } from 'react-router-dom';
import {
    Container, Menu , Image , Visibility
  } from 'semantic-ui-react'

 class Header extends Component {
    state = {
        menuFixed: null,
        overlayFixed: false,
      }

      stickTopMenu = () => this.setState({ menuFixed: true })
      unStickTopMenu = () => this.setState({ menuFixed: null })
      
    render(){
        const { menuFixed} = this.state
    return (
        <div>
             <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}
        >
          <Menu
            borderless
            fixed={menuFixed ? 'top' : undefined}
            style={menuFixed ? fixedMenuStyle : menuStyle}
          >
            <Container text>
              <Menu.Item>
                <Image size='mini' src='https://react.semantic-ui.com/logo.png' />
              </Menu.Item>
              <Menu.Item header>Movies App</Menu.Item>
              <Menu.Item>
                <Link to="movies">Movies</Link>
              </Menu.Item>
              <Menu.Item as='a'>Add New</Menu.Item>

            </Container>
          </Menu>
        </Visibility>
            
        </div>
    )
}
}

export default Header;
import React, {Component} from 'react';
import './_Header.scss';
import Menu from '../Menu/Menu';
import Logo from '../Logo/Logo';

class Header extends Component {

    render () {
        return (
            <div className='container'>
                <Menu />
                <Logo />
            </div>
        )
    }
}

export default Header;
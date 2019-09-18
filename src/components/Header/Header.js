import React, {Component} from 'react';
import './_Header.scss';
import Menu from '../Menu/Menu';

class Header extends Component {

    render () {
        return (
            <div className='container'>
                <Menu />
            </div>
        )
    }
}

export default Header;
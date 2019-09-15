import React, {Component} from 'react';
import './_Header.scss';

class Header extends Component {

    render () {
        return (
            <header className='container'>
                <ul className='menu main-width'>
                    <li className='menu__element'>START</li>
                    <li className='menu__element'>O NAS</li>
                    <li className='menu__element'>KONTAKT</li>
                </ul>
            </header>
        )
    }
}

export default Header;
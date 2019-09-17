import React, {Component} from 'react';
import './_Header.scss';

class Header extends Component {

    render () {
        return (
            <div className='container'>
                <ul className='menu main-width'>
                    <li className='menu__element'>START</li>
                    <li className='menu__element'>O NAS</li>
                    <li className='menu__element'>KONTAKT</li>
                </ul>
            </div>
        )
    }
}

export default Header;
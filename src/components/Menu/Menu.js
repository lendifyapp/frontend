import React, {Component, Fragment} from 'react';
import './_Menu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: true
        }
    }

    handleClick = () => {
        this.setState({
            isClicked: !this.state.isClicked
        })
    }

    render () {
        const { isClicked } = this.state;

        return (
            <Fragment>
                { isClicked ?
                    <FontAwesomeIcon
                        icon={faTimes}
                        onClick={this.handleClick}
                        className='cross-sign'
                    />
                    :
                    <FontAwesomeIcon 
                        icon={faBars}
                        onClick={this.handleClick} 
                        className='hamburger-sign'
                    />
                }
                <div
                   className={
                        isClicked ? 'menu-visible' : 'menu-hidden'
                    }
                >
                    <ul className='menu'>
                        <li className='menu__element'>START</li>
                        <li className='menu__element'>O NAS</li>
                        <li className='menu__element'>APLIKACJA</li>
                        <li className='menu__element'>KONTAKT</li>
                    </ul>
                </div>
            </Fragment>
        )
    }
}

export default Menu;
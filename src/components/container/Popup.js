import React from 'react'
import './popup.css'

class Popup extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <div className='popup_img'>
                        <img src={this.props.img} /> <br></br>
                        <button onClick={this.props.closePopup}>close</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Popup;
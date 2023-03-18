import { Component } from 'react'
import { FaShare } from 'react-icons/fa'
import product from '../../images/drawers.jpg'
import profile from '../../images/avatar-michelle.jpg'
import './card.styles.css'

class Card extends Component {
  render() {
    return (
      <div>
        <div className='card'>
          <img src={product} alt='Product' />
          <div className='card-content'>
            <h3>
              Shift the overall look and feel by adding these wonderful touches to furniture in your
              home
            </h3>
            <p>
              Ever been in a room and felt like something was missing? Perhaps it felt slightly bare
              and uninviting. I've got some simple tips to help you make any room feel complete.
            </p>
          </div>
        </div>
        <div className='user-content'>
          <div className='user-details'>
            <img src={profile} alt='User Avatar' />
            <div className='user-info'>
              <p className='user-name'>Michelle Appleton</p>
              <p className='user-date'>28 June 2020</p>
            </div>
          </div>
          <div className='share-wrapper'>
            <FaShare className='share-icon' />
          </div>
        </div>
      </div>
    )
  }
}

export default Card

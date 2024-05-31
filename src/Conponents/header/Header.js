import React from 'react'
import './header.css'
import Logo from './../../assets/icons/Лого.png';
import tel from '../../assets/icons/icons8_phone_2 1.png';
import bg from '../../assets/img/Фон.png'
import right from '../../assets/img/Бесплатная консультация.png'
import litzenza from '../../assets/icons/litzenz.png'



const Header = () => {
  return (
    <>
    <nav className='nav'>

      <div className='title'>
        <h1>VeraVla edu!</h1>
        <p>Переквалифицируйся в разработчика искусственного интеллекта <br/>и получи высокооплачиваемую работу</p>
      </div>

      <div className='litzenza'>
        <div>
          <img src={litzenza} alt=''/>
        </div>

        <div className='knop'>
          <button> Записаться на ознакомительный вебинар</button>
        </div>

        <div>
          <h4>Мы обучаем с гарантией!</h4>
          <p>Первый месяц действует гарантия 100% возврата <br/> денег, если тебя не устроят наши курсы</p>
        </div>
      </div>

        <div className='img'>
          <img className='bg' src={bg} alt=''/>
          <div className='logo'>
          <img src={Logo} alt=''/>
        </div>

        <div className='logo1'>
        <div>
        <img src={tel} alt=''/>
        </div>

        <div>
          <h3>+99895 100 10 66</h3>
        </div>
        </div>
        </div>

        <div className='air'>
          <img src={right} alt=''/>
        </div>
    </nav>
    </>
  )
}

export default Header
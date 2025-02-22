import { Link } from 'react-router-dom'
import logoSpotify from '../assets/logo/spotify-logo.png'

function Header() {
  return <div className='header'>
    <Link to={"/"}>
      <img src={logoSpotify} alt="Logo do Spotify" />
    </Link>

    <Link className='header__link' to="/">
        <h1>VM Spotify</h1>
    </Link>
  </div>
}

export default Header
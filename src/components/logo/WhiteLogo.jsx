import logoUrl from '../../assets/logo/whitelogo.svg'
import { Link } from 'react-router'

export default function WhiteLogo({ height = 32 }) {
  return <>
    <Link to="/" aria-label="mavı home">
      <img src={logoUrl} alt="mavı" height={height} />
    </Link>
  </>
}
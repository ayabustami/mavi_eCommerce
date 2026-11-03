import logoUrl from '../../assets/logo/logo.svg'
import { Link } from 'react-router'

export default function Logo() {
  return <>
    <Link to="/" aria-label="mavı home">
      <img src={logoUrl} alt="mavı" height={40} />
    </Link>
  </>
}
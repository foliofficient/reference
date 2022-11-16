import Image from 'next/image'

import foliofficient_green from '../../public/images/foliofficient_green.png'
import foliofficient_small from '../../public/images/foliofficient_small.png'
import foliofficient_mark from '../../public/images/foliofficient_mark.png'

export function LogomarkGreen(props) {
  return <Image src={foliofficient_green} />
}

export function Logomark(props) {
  return <Image height={100} width={100} src={foliofficient_mark} />
}

export function Logo(props) {
  return <Image height={100} width={100} src={foliofficient_small} />
}

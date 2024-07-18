//import {Link} from 'react-router-dom'
import {Link as RRLink} from 'react-router-dom'
import {Link} from '../../components'
import {useAuth} from '../../contexts'
import logo from '../../images/heartSignal.jpg'

export default function NavigationBar() {
  const {loggedUser} = useAuth()
  // prettier-ignore
  return (
    <div className="flex justify-between bg-base-100">
      <div className="flex p-2 navBar">
        <Link to="/" className="btn btn-link ml-10 animate-pulse"><img src={logo}/></Link>
        <Link to="/" className="btn btn-link text-black ml-10 text-xl">고객지원</Link>
        <Link to="/" className="btn btn-link text-black ml-10 text-xl">정보</Link>
        {loggedUser && (<Link to="/board" className="ml-4 btn mb-5 bg-red-200 text-white">매칭하기</Link>)}
      </div>
      <div className="flex items-center p-2 mr-10">
        {!loggedUser && (<RRLink to="/login" className="btn mb-5 bg-red-200 text-white">로그인</RRLink>)}
        {!loggedUser && (<RRLink to="/signup" className="ml-4 btn mb-5 bg-red-200 text-white">가입하기</RRLink>)}
        {loggedUser && (<RRLink to="/logout" className="ml-4 btn mb-10 btn-outline btn-primary">LOGOUT</RRLink>)}
      </div>
    </div>
  )
}

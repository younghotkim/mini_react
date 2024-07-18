import {Link} from 'react-router-dom'
import {Div} from '../../components'
import {Button} from '../../theme/daisyui'
import * as D from '../../data'
import heart2 from '../../images/heart2.jpg'
import heart4 from '../../images/heart4.jpg'
import heart5 from '../../images/heart5.jpg'
import heart1 from '../../images/heart1.jpg'
import logo2 from '../../images/main_logo.jpg'
import couple1 from '../../images/couple1.jpg'
import YouTubePlayer from './YoutubePlayer'
import aespa from '../../images/aespa2-removebg-preview.png'
import {Link as RRLink} from 'react-router-dom'
import {useAuth} from '../../contexts'
import logo from '../../images/heartSignal.jpg'

export default function Hero() {
  const {loggedUser} = useAuth()

  return (
    <div className="flex flex-col items-center p-4 bg-base-100">
      {/* <div className="flex flex-row w-full bg-base-100 h-full">
        <Div
          src={heart1}
          className="flex flex-auto bg-contain bg-no-repeat w-full h-full"
          minHeight="30rem"
          minWidth="20rem"
        />
        <Div
          src={heart2}
          className="flex flex-auto bg-contain bg-no-repeat w-full h-full"
          minHeight="30rem"
          minWidth="30rem"
        />
      </div> */}

      {loggedUser && (
        <>
          <p className="text-7xl text-left mt-10 mb-10 font-tenada">
            새로운 인연을 만나보세요!
          </p>
          <Link to="/board" className="ml-4 btn mb-5 bg-red-200 text-white">
            매칭하기
          </Link>
        </>
      )}

      {!loggedUser && (
        <>
          <p className="text-7xl text-left mt-10 mb-5 font-tenada">
            하트시그널에 오신것을 환영합니다.
          </p>
          <p className="text-3xl text-left mt-10 mb-10 font-tenada text-gray-500">
            이 곳에서 운명의 상대를 만나보세요!
          </p>
          <RRLink to="/signup" className="ml-4 btn mb-5 bg-red-200 text-white">
            가입하기
          </RRLink>
        </>
      )}

      <Div
        className="bg-black w-full flex flex-col justify-center"
        minHeight="30rem"
        height="30rem">
        <p className="text-white text-5xl font-extrabold mt-20 ml-10">Match System</p>
        <p className="text-gray-400 font-bold text-1xl mt-5 ml-10">
          99.5%의 매칭율을 자랑하는
          <br /> 하트시그널의 놀라운 매칭력을 즐겨보세요
        </p>
        <div
          className="flex flex-row justify-end min-h-88"
          style={{
            backgroundImage: `url(${aespa})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right',
            height: '100%'
          }}
        />
      </Div>
      <YouTubePlayer width="100%" height="860px" videoId="tkoy249-AVg" />
      <Div
        className="bg-black w-full flex flex-col items-end justify-center"
        minHeight="30rem"
        height="30rem">
        <p className="text-white text-5xl font-extrabold mt-20 mr-10">Nearby</p>
        <p className="text-gray-400 font-bold text-1xl mt-5 mr-10">
          언제나 당신의 근처에서
          <br /> 원하는 상대를 만나세요!
        </p>
        <div
          className="flex flex-row justify-end min-h-88"
          style={{
            backgroundImage: `url(${aespa})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left',
            height: '100%'
          }}
        />
      </Div>
      <Div
        className="bg-black w-full flex flex-col justify-center"
        minHeight="30rem"
        height="30rem">
        <p className="text-white text-5xl font-extrabold mt-20 ml-10">Idealistic</p>
        <p className="text-gray-400 font-bold text-1xl mt-5 ml-10">
          원하는 상대를
          <br /> 하트시그널에서 만나보세요!
        </p>
        <div
          className="flex flex-row justify-end min-h-88"
          style={{
            backgroundImage: `url(${aespa})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right',
            height: '100%'
          }}
        />
      </Div>
      <Div
        className="bg-black w-full flex flex-col items-end justify-center"
        minHeight="30rem"
        height="30rem">
        <p className="text-white text-5xl font-extrabold mt-20 mr-10">Community</p>
        <p className="text-gray-400 font-bold text-1xl mt-5 mr-10">
          다양한 친목 활동을
          <br /> 즐겨보세요!
        </p>
        <div
          className="flex flex-row justify-start min-h-88"
          style={{
            backgroundImage: `url(${aespa})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '100%'
          }}
        />
      </Div>
    </div>
  )
}

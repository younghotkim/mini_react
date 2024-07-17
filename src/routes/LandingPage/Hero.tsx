import {Link} from 'react-router-dom'
import {Div} from '../../components'
import {Button} from '../../theme/daisyui'
import * as D from '../../data'
import heart2 from '../../images/heart2.jpg'
import logo2 from '../../images/main_logo.jpg'
import couple1 from '../../images/couple1.jpg'
import YouTubePlayer from './YoutubePlayer'
import aespa from '../../images/aespa-removebg-preview.png'

export default function Hero() {
  return (
    <div className="flex flex-col items-center p-4 bg-base-100">
      <Div
        src={heart2}
        className="flex flex-auto bg-cover w-full"
        minHeight="60rem"
        height="20rem"
      />
      <p className="text-7xl text-left mt-10 mb-10">하트시그널에 오신것을 환영합니다!</p>
      <Link to="/board">
        <Button className="btn mb-10 bg-red-200 text-white">가입하기</Button>
      </Link>
      <Div
        className="bg-black w-full flex flex-col justify-center"
        minHeight="30rem"
        height="30rem">
        <p className="text-white text-5xl font-extrabold mt-20 ml-10">
          믿을 수 있는 Match System
        </p>
        <p className="text-gray-400 font-bold text-1xl mt-5 ml-10">
          99.5%로 악성, 허위 유저를 잡는
          <br /> 하트시그널의 놀라운 기술력으로 안심하고 즐겨보세요
        </p>
        <Div
          className="flex flex-row-reverse"
          style={{
            backgroundImage: `url(${aespa})`
          }}></Div>
      </Div>
      <YouTubePlayer width="100%" height="860px" videoId="tkoy249-AVg" />
      <Div className="bg-red-200 w-full" minHeight="60rem" height="30rem" />
    </div>
  )
}

import {useMemo} from 'react'
import CustomerComment from './CustomerComment'
import {Div} from '../../components'
import * as D from '../../data'
import '../../styles/ImageSlider.css'

export default function Promotion() {
  const comments = useMemo(() => D.makeArray(3).map(D.makeRandomCustomerComment), [])
  const children = useMemo(
    () =>
      comments.map(comment => (
        <CustomerComment key={comment.uuid} customerComment={comment} />
      )),
    [comments]
  )
  return (
    <section className="w-full mt-4 bg-base-100">
      <div className="section-wrapper flex justify-around w-full p-4">
        <Div
          width="15%"
          minWidth="15%"
          minHeight="20rem"
          className="section-item flex-col items-center justify-center text-black bg-base-100">
          <p className="font-extrabold text-center mb-10">이재욱 & 카리나</p>

          <p>
            꿈에 그리던 이상형을 만났습니다.
            <br /> 사건은 다가와 ah, oh, ayy 거세게 커져가 ah, oh, ayy <br />
            질문은 계속돼 ah, oh, ayy <br /> 우린 어디서 왔나 oh, ayy <br />
            사건은 다가와 ah, oh, ayy <br />
            거세게 커져가 ah, oh, ayy ,tell me, oh, ayy <br />
            우린 어디서 왔나 oh, ayy <br />
            우린 어디서 왔나 oh, ayy
          </p>
        </Div>
        <Div
          width="15%"
          minWidth="15%"
          minHeight="20rem"
          className="section-item flex-col items-center justify-center text-black bg-base-100">
          <p className="font-extrabold text-center mb-10">이재욱 & 카리나</p>

          <p>
            꿈에 그리던 이상형을 만났습니다.
            <br /> 사건은 다가와 ah, oh, ayy 거세게 커져가 ah, oh, ayy <br />
            질문은 계속돼 ah, oh, ayy <br /> 우린 어디서 왔나 oh, ayy <br />
            사건은 다가와 ah, oh, ayy <br />
            거세게 커져가 ah, oh, ayy ,tell me, oh, ayy <br />
            우린 어디서 왔나 oh, ayy <br />
            우린 어디서 왔나 oh, ayy
          </p>
        </Div>
        <Div
          width="15%"
          minWidth="15%"
          minHeight="20rem"
          className="section-item flex-col items-center justify-center text-black bg-base-100">
          <p className="font-extrabold text-center mb-10">이재욱 & 카리나</p>

          <p>
            꿈에 그리던 이상형을 만났습니다.
            <br /> 사건은 다가와 ah, oh, ayy 거세게 커져가 ah, oh, ayy <br />
            질문은 계속돼 ah, oh, ayy <br /> 우린 어디서 왔나 oh, ayy <br />
            사건은 다가와 ah, oh, ayy <br />
            거세게 커져가 ah, oh, ayy ,tell me, oh, ayy <br />
            우린 어디서 왔나 oh, ayy <br />
            우린 어디서 왔나 oh, ayy
          </p>
        </Div>
        <Div
          width="15%"
          minWidth="15%"
          minHeight="20rem"
          className="section-item flex-col items-center justify-center text-black bg-base-100">
          <p className="font-extrabold text-center mb-10">이재욱 & 카리나</p>

          <p>
            꿈에 그리던 이상형을 만났습니다.
            <br /> 사건은 다가와 ah, oh, ayy 거세게 커져가 ah, oh, ayy <br />
            질문은 계속돼 ah, oh, ayy <br /> 우린 어디서 왔나 oh, ayy <br />
            사건은 다가와 ah, oh, ayy <br />
            거세게 커져가 ah, oh, ayy ,tell me, oh, ayy <br />
            우린 어디서 왔나 oh, ayy <br />
            우린 어디서 왔나 oh, ayy
          </p>
        </Div>
        <Div
          width="15%"
          minWidth="15%"
          minHeight="20rem"
          className="section-item flex-col items-center justify-center text-black bg-base-100">
          <p className="font-extrabold text-center mb-10">이재욱 & 카리나</p>

          <p>
            꿈에 그리던 이상형을 만났습니다.
            <br /> 사건은 다가와 ah, oh, ayy 거세게 커져가 ah, oh, ayy <br />
            질문은 계속돼 ah, oh, ayy <br /> 우린 어디서 왔나 oh, ayy <br />
            사건은 다가와 ah, oh, ayy <br />
            거세게 커져가 ah, oh, ayy ,tell me, oh, ayy <br />
            우린 어디서 왔나 oh, ayy <br />
            우린 어디서 왔나 oh, ayy
          </p>
        </Div>
        <Div
          width="15%"
          minWidth="15%"
          minHeight="20rem"
          className="section-item flex-col items-center justify-center text-black bg-base-100">
          <p className="font-extrabold text-center mb-10">이재욱 & 카리나</p>

          <p>
            꿈에 그리던 이상형을 만났습니다.
            <br /> 사건은 다가와 ah, oh, ayy 거세게 커져가 ah, oh, ayy <br />
            질문은 계속돼 ah, oh, ayy <br /> 우린 어디서 왔나 oh, ayy <br />
            사건은 다가와 ah, oh, ayy <br />
            거세게 커져가 ah, oh, ayy ,tell me, oh, ayy <br />
            우린 어디서 왔나 oh, ayy <br />
            우린 어디서 왔나 oh, ayy
          </p>
        </Div>
        <Div
          width="15%"
          minWidth="15%"
          minHeight="20rem"
          className="section-item flex-col items-center justify-center text-black bg-base-100">
          <p className="font-extrabold text-center mb-10">이재욱 & 카리나</p>

          <p>
            꿈에 그리던 이상형을 만났습니다.
            <br /> 사건은 다가와 ah, oh, ayy 거세게 커져가 ah, oh, ayy <br />
            질문은 계속돼 ah, oh, ayy <br /> 우린 어디서 왔나 oh, ayy <br />
            사건은 다가와 ah, oh, ayy <br />
            거세게 커져가 ah, oh, ayy ,tell me, oh, ayy <br />
            우린 어디서 왔나 oh, ayy <br />
            우린 어디서 왔나 oh, ayy
          </p>
        </Div>
        <Div
          width="15%"
          minWidth="15%"
          minHeight="20rem"
          className="section-item flex-col items-center justify-center text-black bg-base-100">
          <p className="font-extrabold text-center mb-10">이재욱 & 카리나</p>

          <p>
            꿈에 그리던 이상형을 만났습니다.
            <br /> 사건은 다가와 ah, oh, ayy 거세게 커져가 ah, oh, ayy <br />
            질문은 계속돼 ah, oh, ayy <br /> 우린 어디서 왔나 oh, ayy <br />
            사건은 다가와 ah, oh, ayy <br />
            거세게 커져가 ah, oh, ayy ,tell me, oh, ayy <br />
            우린 어디서 왔나 oh, ayy <br />
            우린 어디서 왔나 oh, ayy
          </p>
        </Div>
        <Div
          width="15%"
          minWidth="15%"
          minHeight="20rem"
          className="section-item flex-col items-center justify-center text-black bg-base-100">
          <p className="font-extrabold text-center mb-10">이재욱 & 카리나</p>

          <p>
            꿈에 그리던 이상형을 만났습니다.
            <br /> 사건은 다가와 ah, oh, ayy 거세게 커져가 ah, oh, ayy <br />
            질문은 계속돼 ah, oh, ayy <br /> 우린 어디서 왔나 oh, ayy <br />
            사건은 다가와 ah, oh, ayy <br />
            거세게 커져가 ah, oh, ayy ,tell me, oh, ayy <br />
            우린 어디서 왔나 oh, ayy <br />
            우린 어디서 왔나 oh, ayy
          </p>
        </Div>
        <Div
          width="15%"
          minWidth="15%"
          minHeight="20rem"
          className="section-item flex-col items-center justify-center text-black bg-base-100">
          <p className="font-extrabold text-center mb-10">이재욱 & 카리나</p>

          <p>
            꿈에 그리던 이상형을 만났습니다.
            <br /> 사건은 다가와 ah, oh, ayy 거세게 커져가 ah, oh, ayy <br />
            질문은 계속돼 ah, oh, ayy <br /> 우린 어디서 왔나 oh, ayy <br />
            사건은 다가와 ah, oh, ayy <br />
            거세게 커져가 ah, oh, ayy ,tell me, oh, ayy <br />
            우린 어디서 왔나 oh, ayy <br />
            우린 어디서 왔나 oh, ayy
          </p>
        </Div>
        <Div
          width="15%"
          minWidth="15%"
          minHeight="20rem"
          className="section-item flex-col items-center justify-center text-black bg-base-100">
          <p className="font-extrabold text-center mb-10">이재욱 & 카리나</p>

          <p>
            꿈에 그리던 이상형을 만났습니다.
            <br /> 사건은 다가와 ah, oh, ayy 거세게 커져가 ah, oh, ayy <br />
            질문은 계속돼 ah, oh, ayy <br /> 우린 어디서 왔나 oh, ayy <br />
            사건은 다가와 ah, oh, ayy <br />
            거세게 커져가 ah, oh, ayy ,tell me, oh, ayy <br />
            우린 어디서 왔나 oh, ayy <br />
            우린 어디서 왔나 oh, ayy
          </p>
        </Div>
        <Div
          width="15%"
          minWidth="15%"
          minHeight="20rem"
          className="section-item flex-col items-center justify-center text-black bg-base-100">
          <p className="font-extrabold text-center mb-10">이재욱 & 카리나</p>

          <p>
            꿈에 그리던 이상형을 만났습니다.
            <br /> 사건은 다가와 ah, oh, ayy 거세게 커져가 ah, oh, ayy <br />
            질문은 계속돼 ah, oh, ayy <br /> 우린 어디서 왔나 oh, ayy <br />
            사건은 다가와 ah, oh, ayy <br />
            거세게 커져가 ah, oh, ayy ,tell me, oh, ayy <br />
            우린 어디서 왔나 oh, ayy <br />
            우린 어디서 왔나 oh, ayy
          </p>
        </Div>
      </div>
    </section>
  )
}

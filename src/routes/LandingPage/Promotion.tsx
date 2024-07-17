import {useMemo} from 'react'
import CustomerComment from './CustomerComment'
import {Div} from '../../components'
import * as D from '../../data'

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
      <h2 className="ml-4 font-bold text-5xl">유저 후기:</h2>
      <div className="flex justify-around w-full p-4">
        <Div
          width="15%"
          minWidth="15%"
          className="flex items-center justify-center text-white bg-blue-400">
          Your message here
        </Div>
        <Div
          width="15%"
          minWidth="15%"
          minHeight="20rem"
          className="flex items-center justify-center text-white bg-blue-400">
          Your message here
        </Div>
        <Div
          width="15%"
          minWidth="15%"
          className="flex items-center justify-center text-white bg-blue-400">
          Your advertizement here
        </Div>
        <Div
          width="15%"
          minWidth="15%"
          className="flex items-center justify-center text-white bg-blue-400">
          Your advertizement here
        </Div>
      </div>
    </section>
  )
}

import { FaRegCheckCircle } from 'react-icons/fa'
import { BiErrorCircle } from 'react-icons/bi'

function ResultsSend({ typeModal }) {
  if (typeModal === 'success') {
    return (
      <div className="px-6">
        <div className="flex flex-col items-center gap-1 text-emerald-500">
          <div className="text-3xl">
            <FaRegCheckCircle />
          </div>
          <div className="text-xl">Success!</div>
        </div>
      </div>
    )
  } else if (typeModal === 'failed') {
    return (
      <div className="px-6">
        <div className="flex flex-col items-center gap-1 text-red-500">
          <div className="text-3xl">
            <BiErrorCircle />
          </div>
          <div className="text-xl">Failed!</div>
        </div>
      </div>
    )
  } else return
}

export default ResultsSend
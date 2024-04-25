import ButtonLink from '~/components/ButtonLink/ButtonLink'
import { AiFillMessage } from 'react-icons/ai'
import { useRef, useState } from 'react'
import { useSwiper } from 'swiper/react'
import { IoMdClose } from 'react-icons/io'

function FormContact({ classAnimate }) {
  const swiper = useSwiper()
  const [showForm, setShowForm] = useState(false)
  const formRef = useRef(null)

  const handleShowForm = () => {
    swiper.disable()
    setShowForm(true)
  }

  const handleHideForm = () => {
    swiper.enable()
    setShowForm(false)
  }

  const handleClickLayer = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      handleHideForm()
    }
  }

  return (
    <div
      className={classAnimate}
    >
      <ButtonLink onClick={handleShowForm} link={'#form'} title={'Send message'} icon={<AiFillMessage />} />
      {showForm &&
        <div
          onClick={(e) => handleClickLayer(e)}
          className="fixed top-0 right-0 left-0 bottom-0 bg-black/80 z-[9999] grid place-content-center px-4"
        >
          <div
            ref={formRef}
            style={{
              background: 'linear-gradient(#1d2238, #1d2238) padding-box, linear-gradient(145deg, transparent 20%,#e81cff, #40c9ff) border-box'
            }}
            className="animate-scale-up-center max-w-[500px] w-full border-4 border-transparent py-6 px-4 text-sm text-white box-border rounded-lg relative"
          >
            <div
              onClick={handleHideForm}
              className="absolute top-1 right-1 size-6 rounded-full text-lg text-ct-text-color
             hover:bg-red-400 hover:text-[#212121] grid place-content-center cursor-pointer"
            >
              <IoMdClose />
            </div>
            <form className='flex flex-col gap-3'>
              <div className="flex flex-col gap-[2px]">
                <label className='block mb-1 text-ct-text-color text-xs font-medium' htmlFor="email">Your Email</label>
                <input
                  className='w-full px-2 py-1 bg-transparent rounded border border-ct-secondary-color-900 focus:outline-none focus:border-ct-active-color'
                  type="email"
                  id='email'
                  name='email'
                  required
                />
              </div>
              <div className="flex flex-col gap-[2px]">
                <label className='block mb-1 text-ct-text-color text-xs font-medium' htmlFor="email">Your Message</label>
                <textarea
                  className='w-full px-2 py-1 bg-transparent rounded border border-ct-secondary-color-900 focus:outline-none focus:border-ct-active-color h-24 resize-none'
                  name="textarea"
                  id="textarea"
                  rows="5"
                  cols="40"
                  required
                >
                </textarea>
              </div>
              <button
                className='active:scale-95 text-ct-text-color font-medium w-2/5 bg-ct-secondary-color-950 border border-ct-secondary-color-900
                px-2 py-1 rounded mt-2 cursor-pointer hover:bg-ct-active-color hover:text-[#212121]'
                type='submit'
              >
                Send
              </button>
            </form>
          </div>
        </div>
      }
    </div>
  )
}

export default FormContact
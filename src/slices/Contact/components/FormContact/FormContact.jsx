import ButtonLink from '~/components/ButtonLink/ButtonLink'
import { AiFillMessage } from 'react-icons/ai'
import { useRef, useState } from 'react'
import { useSwiper } from 'swiper/react'
import { IoMdClose } from 'react-icons/io'
import emailjs from '@emailjs/browser'
import ResultsSend from './ResultsSend/ResultsSend'
import { env } from '~/config/environment'

function FormContact({ classAnimate }) {
  const swiper = useSwiper()
  const [showModal, setShowModal] = useState(false)
  const [typeModal, setTypeModal] = useState('')
  const [loading, setLoading] = useState(false)
  const modalFrom = useRef(null)

  const handleShowForm = () => {
    swiper.disable()
    setTypeModal('')
    setShowModal(true)
  }

  const handleHideForm = () => {
    swiper.enable()
    setShowModal(false)
  }

  const handleClickLayer = (event) => {
    if (modalFrom.current && !modalFrom.current.contains(event.target)) {
      handleHideForm()
    }
  }

  // Chức năng gửi tin nhắn
  const formContact = useRef()

  const sendEmail = (e) => {
    setLoading(true)
    e.preventDefault()
    emailjs
      .sendForm(env.EMAIL_SERVICE_ID, env.EMAIL_TEMPLATE_ID, formContact.current, {
        publicKey: env.EMAIL_PUBLIC_KEY
      })
      .then(
        () => {
          setLoading(false)
          setTypeModal('success')
          console.log('SUCCESS!')
        },
        (error) => {
          setLoading(false)
          setTypeModal('failed')
          console.log('FAILED...', error.text)
        }
      )
  }

  return (
    <div
      className={classAnimate}
    >
      <ButtonLink onClick={handleShowForm} link={'#form'} title={'Send message'} icon={<AiFillMessage />} />
      {showModal &&
        <div
          onClick={(e) => handleClickLayer(e)}
          className="fixed top-0 right-0 left-0 bottom-0 bg-black/80 z-[9999] grid place-content-center px-4"
        >
          <div
            ref={modalFrom}
            style={{
              background: 'linear-gradient(#1d2238, #1d2238) padding-box, linear-gradient(145deg, transparent 16%,#e81cff, #40c9ff) border-box'
            }}
            className="animate-scale-up-center max-w-[500px] w-full border-4 border-transparent py-6 px-4 text-sm text-white box-border rounded-lg relative"
          >

            {typeModal ? <ResultsSend typeModal={typeModal} /> :
              <div className="">
                <div
                  onClick={handleHideForm}
                  className="absolute top-1 right-1 size-6 rounded-full text-lg text-ct-text-color
             hover:bg-red-400 hover:text-[#212121] grid place-content-center cursor-pointer"
                >
                  <IoMdClose />
                </div>
                <form ref={formContact} onSubmit={sendEmail} className='flex flex-col gap-3'>
                  <div className="flex flex-col gap-[2px]">
                    <label className='block mb-1 text-ct-text-color text-xs font-medium' htmlFor="from_name">Name</label>
                    <input
                      className='w-full px-2 py-1 bg-transparent rounded border border-ct-secondary-color-900 focus:outline-none focus:border-ct-active-color'
                      type="text"
                      id='from_name'
                      name='from_name'
                      autoFocus
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <label className='block mb-1 text-ct-text-color text-xs font-medium' htmlFor="from_email">Email</label>
                    <input
                      className='w-full px-2 py-1 bg-transparent rounded border border-ct-secondary-color-900 focus:outline-none focus:border-ct-active-color'
                      type="email"
                      id='from_email'
                      name='from_email'
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <label className='block mb-1 text-ct-text-color text-xs font-medium' htmlFor="message">Message</label>
                    <textarea
                      className='w-full px-2 py-1 bg-transparent rounded border border-ct-secondary-color-900 focus:outline-none focus:border-ct-active-color h-24 resize-none'
                      name="message"
                      id="message"
                      rows="5"
                      cols="40"
                      required
                    >
                    </textarea>
                  </div>
                  <button
                    className='active:scale-95 h-7 grid place-content-center text-ct-text-color font-medium w-2/5 bg-ct-secondary-color-950 border border-ct-secondary-color-900
                  rounded mt-2 cursor-pointer hover:bg-ct-active-color hover:text-[#212121]'
                    type='submit'
                  >
                    {loading ?
                      <div className="size-4 rounded-full border-2 border-ct-text-color border-t-ct-active-color animate-spin"></div> :
                      <div className="">Send</div>
                    }
                  </button>
                </form>
              </div>
            }

          </div>

        </div>
      }
    </div>
  )
}

export default FormContact
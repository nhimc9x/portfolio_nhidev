import { TypeAnimation } from 'react-type-animation'

function TextTyping({ className }) {
  return (
    <TypeAnimation
      sequence={[
        '',
        600,
        'FrontEnd Developer',
        1800
      ]}
      wrapper='div'
      speed={50}
      repeat={Infinity}
      className={className}
    />
  )
}

export default TextTyping
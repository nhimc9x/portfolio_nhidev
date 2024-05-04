import MainSlider from '~/slider/MainSlider/MainSlider'
import AnimatedCursor from 'react-animated-cursor'

function App() {

  return (
    <>
      <AnimatedCursor
        innerSize={12}
        outerSize={34}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: '#ffffff70'
        }}
        outerStyle={{
          border: '1px solid #eeeeee80'
        }}
      />
      <MainSlider />
    </>
  )
}

export default App

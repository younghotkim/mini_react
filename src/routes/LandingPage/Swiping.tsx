import React from 'react'
import ImageSwiper from '../../components/ImageSwiper'
import main3 from '../../images/main3.jpg'
import main4 from '../../images/main4.jpg'
import main5 from '../../images/main5.jpg'
import main6 from '../../images/main6.jpg'
import main7 from '../../images/main7.jpg'

const Swiping: React.FC = () => {
  const images = [main3, main4, main5, main6, main7]

  return <ImageSwiper images={images} />
}

export default Swiping

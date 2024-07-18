import React, {useState, useEffect} from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import '../../src/styles/ImageSlider.css' // 애니메이션을 위한 CSS 파일

interface ImageSwiperProps {
  images: string[]
}

const ImageSwiper: React.FC<ImageSwiperProps> = ({images}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalImages = images.length
  const intervalTime = 3000 // 이미지 전환 간격 (3초)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % totalImages)
    }, intervalTime)

    return () => clearInterval(interval)
  }, [totalImages])

  const nextImage = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % totalImages)
  }

  const prevImage = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? totalImages - 1 : prevIndex - 1))
  }

  return (
    <div className="image-swiper">
      <TransitionGroup className="image-container">
        <CSSTransition key={currentIndex} timeout={5000} classNames="slide">
          <img src={images[currentIndex]} alt={`Image ${currentIndex}`} />
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}

export default ImageSwiper

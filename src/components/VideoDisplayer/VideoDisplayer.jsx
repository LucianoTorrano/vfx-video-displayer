import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { vfxData } from '../../Data/vfxData'
import './style.css'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

export function VideoDisplayer () {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  return (
    <div className='VideoDisplayer'>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={5}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper'
      >
        {vfxData && vfxData.map(vfx => (
          <SwiperSlide key={vfx.vfxId}>
            <img src={vfx.image} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff'
        }}
        spaceBetween={10}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper2'
      >
        {vfxData && vfxData.map(vfx => (
          <SwiperSlide key={vfx.vfxId}>
            <video loop muted autoPlay disablePictureInPicture>
              <source src={vfx.video} type='video/mp4' />
            </video>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

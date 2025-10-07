import {useState} from 'react'
import { motion , AnimatePresence } from "motion/react"
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
const Dashboard = () => {
  const box = {
    width: 100,
    height: 100,
    backgroundColor: "#ff0088",
    borderRadius: 5,
  }
  const[isVisible,setIsVisible] = useState(true);
  return (
    <div className='container'>
       <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>

      <motion.div
        style={box}
        animate={{ rotate: 360 }}
        transition={{ duration: 1 }}
      />
          <br /><br /><br /><br />
                <AnimatePresence initial={false}>
                {isVisible ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        style={box}
                        key="box"
                    />
                ) : null}
            </AnimatePresence>
            <motion.button
                className='button'
                onClick={() => setIsVisible(!isVisible)}
                whileTap={{ y: 1 }}
            >
                {isVisible ? "Hide" : "Show"}
            </motion.button>
        </div>


  )
}

export default Dashboard
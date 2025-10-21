"use client"

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules"; 
import "swiper/css";
import { motion } from 'motion/react';

export default function HeroSection() {
  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        // effect="fade"
        // fadeEffect={{ crossFade: true }}
        spaceBetween={0}
        slidesPerView={1}
        // loop={true}
        // autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: false}}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="md:h-[550px] lg:h-[650px] h-[250px] bg-[url('/assets/pic1.jpg')] bg-cover bg-center flex items-start justify-start relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-start top-0">
              <div className="pt-20 md:pt-30 px-4">
                <motion.h1
                  className="text-center text-amber-400 mb-2 font-bold text-md md:text-4xl"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  Discover the Latest Smartphones
                </motion.h1>
                
                <motion.p
                  className="text-xs md:text-lg text-gray-200 text-center md:font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                >
                  Shop authentic Apple, Samsung, Xiaomi, Vivo, Google, OnePlus, Motorola, and more. <br />
                  High-quality phones delivered right to your doorstep.
                </motion.p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="md:h-[550px] lg:h-[650px] h-[250px] bg-[url('/assets/pic2.jpg')] bg-cover bg-center flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center">
              <div className="pt-20 md:pt-30 px-4">
                <h1
                  className="text-center text-amber-400 mb-2 font-bold text-md text-shadow-2xs md:text-4xl"
                >
                  Premium Accessories for Your Devices
                </h1>
                
                <p
                  className="text-xs md:text-lg text-gray-200 text-center md:font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                >
                  From cases and chargers to headphones and screen protectors, <br /> find genuine accessories for all major smartphone brands.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="md:h-[550px] lg:h-[650px] h-[250px] bg-[url('/assets/pic3.jpg')] bg-cover bg-center flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center">
              <div className="pt-20 md:pt-30 px-4">
                <motion.h1
                  className="text-center text-amber-400 mb-2 font-bold text-sm md:text-3xl"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  Fast & Reliable Home Delivery
                </motion.h1>
                
                <motion.p
                  className="text-xs md:text-lg text-gray-200 text-center md:font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                >
                  Order your favorite smartphones and accessories online with confidence.  
                  We ensure fast delivery and 100% authentic products every time.
                </motion.p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

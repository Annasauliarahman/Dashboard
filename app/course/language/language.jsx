"use client"

import Layout from "./layout"
import Javascript from "./bahasa/javascript"
import Css from "./bahasa/css"
import Html from "./bahasa/html"

import {Swiper, SwiperSlide} from 'swiper/react'
import {EffectFade, Autoplay, Navigation, Pagination} from 'swiper/modules'

import 'swiper/css'

import 'swiper/css/pagination'
import 'swiper/css/effect-fade';


const Language = () => {

	return (
		<>
			<Layout>
				<Swiper
				style={{
  "--swiper-pagination-color": "#451A03",
  "--swiper-pagination-bullet-inactive-color": "#888888",
  "--swiper-pagination-bullet-inactive-opacity": "1",
  "--swiper-pagination-bullet-size": "12px",
  "--swiper-pagination-bullet-horizontal-gap": "6px",
  "--swiper-navigation-color": "#451A03",
  "--swiper-pagination-size": "30px"
  
}}
				spaceBetween={30}
				centeredSlides={true}
				effect={'fade'}
				autoplay={{
				  delay: 5000,
				  disableOnInteraction: false,
				}}
				pagination={{
				  clickable: true,
				}}
				
				modules={[EffectFade, Autoplay, Pagination, Navigation]}
				className="w-full rounded-lg"
				>
					<SwiperSlide>
						<Javascript />
					</SwiperSlide>
					
					<SwiperSlide>
						<Css />
					</SwiperSlide>
					
					<SwiperSlide>
						<Html />
					</SwiperSlide>
				</Swiper>
			</Layout>
		</>
	)
}

export default Language;
import React, {useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {
    RxCrop,
    RxDesktop,
    RxPencil2,
    RxReader,
    RxRocket,
    RxAccessibility,
  } from "react-icons/rx";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode'

import {FreeMode, Pagination} from 'swiper/modules'
import {RxArrowTopRight} from 'react-icons/rx'

const SwiperImage = () => {
    const ServiceData = [
        {
          icon: RxCrop,
          title: "Development",
          content: "This is Amazon Development.",
          backgroundImage: "https://www.w3schools.com/aws/images/awscert.png",
          linkTo: "/Deals"
        },
        {
          icon: RxPencil2,
          title: "Branding",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          backgroundImage: "https://intellectualpoint.com/wp-content/uploads/2019/04/AWS-Cloud-Practitioner.jpg",
          linkTo: "/Deals"
        },
        {
          icon: RxDesktop,
          title: "Design",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          backgroundImage: "https://kodekloud.com/community/uploads/db1265/original/3X/2/c/2c29ae1625169ad21fad71beb14faec6ff97a858.jpeg",
          linkTo: "/Deals"
        },
        {
          icon: RxReader,
          title: "Seo",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          backgroundImage: "https://towardsthecloud.com/wp-content/uploads/aws-cloud-practitioner.webp",
          linkTo: "/Deals"
        },
        {
          icon: RxAccessibility,
          title: "Management",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          backgroundImage: "https://media.amazonwebservices.com/blog/2017/tc_transcript_1.png",
          linkTo: "/Deals"
        },
        {
          icon: RxRocket,
          title: "Production",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          backgroundImage: "https://miro.medium.com/v2/resize:fit:1400/1*Iq0Akc5KjUn3vre7SSMkSA.jpeg",
          linkTo: "/Deals"
        },
      ];

  return (
    <div className="bg-gray-600">
        <div className="flex items-center justify-center flex-col h-screen">
        <h1 className="text-white font-bold text-[20px] mb-6">My Art Gallery</h1>
            <Swiper breakpoints={{
                350: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                700: {
                    slidesPerView: 3,
                    spaceBetween: 10
                }
            }}
        
            freeMode={true}
            pagination={{
                clickable: true
            }}
            modules={[FreeMode, Pagination]}
            className="max-w-[90%] lg:max-w-[80%]"
            >
            {ServiceData.map((item) => (
                <SwiperSlide key={item.title} className="flex items-center justify-center">
                  <div className="group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[300px] lg:w-[250px] overflow-hidden cursor-pointer">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${item.backgroundImage})` }}
                    />
                    <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                    <div className="relative flex flex-col gap-3">
                      <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
                      <h1 className="text-xl lg:text-2xl">{item.title} </h1>
                      <p className="lg:text-[18px]">{item.content} </p>
                    </div>
                    <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
                  </div>
                </SwiperSlide>
              ))}
        </Swiper>
        </div>
    </div>
  )
}

export default SwiperImage
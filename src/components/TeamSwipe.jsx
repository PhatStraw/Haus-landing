'use client';
import { useRouter } from 'next/router';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper';
import Image from 'next/image';
import { teamDescriptions } from '@/data/teamDescriptions';
import StarIcon from '@/assets/icons/star';
import star from '../../public/images/star.png';

export default function TeamSwipe() {
  return (
    <Swiper
      pagination={{
        type: 'fraction',
      }}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
      style={{ display: 'flex', justifyContent: 'center', color: 'white' }}
    >
      {teamDescriptions.map((i) => (
        <SwiperSlide key={i.id}>
          <div
            sx={{
              width: '100%',
              backgroundColor: 'black',
              color: 'white',
            }}
            className="team-swipe-container"
          >
            <div className="images-class" id="team-img">
              <Image src={i.image} fill={true} alt="Picture of the author" />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div
                style={{
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <h6 className="team-name">
                  <Image height={20} width={20} alt="star" src={star} />
                  {i.name.toUpperCase()}
                  <Image height={20} width={20} alt="star" src={star} />
                </h6>
                <div variant="body2" color="white" className="team-description">
                  {i.description}
                </div>
              </div>
              <div
                style={{
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <button
                  size="large"
                  className="team-community-button"
                  style={{
                    fontFamily: 'mono',
                    borderRadius: 'none',
                    border: 'none',
                  }}
                >
                  JOIN THE COMMUNITY:
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

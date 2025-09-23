import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import testimonial from "../../../assets/customer-top.png";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    name: "Awlad Hossain",
    role: "Senior Product Designer",
  },
  {
    id: 2,
    text: "This product has improved my posture and reduced my back pain significantly. Highly recommended!",
    name: "Rasel Ahamad",
    role: "CTO",
  },
  {
    id: 3,
    text: "Wearing this posture corrector daily made a huge difference in my comfort at work.",
    name: "Nasir Uddin",
    role: "CEO",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16   relative">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Top Illustration */}
        <img src={testimonial} alt="testimonial" className="mx-auto mb-6 text-white" />

        {/* Section Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-white-800 mb-4">
          What our customers are saying
        </h2>
        <p className="text-white-600 max-w-2xl mx-auto mb-12">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          centeredSlides={true}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper pb-12"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="testimonial-card bg-white shadow-md rounded-xl p-6 h-full flex flex-col justify-between border border-gray-100 transition-all">
                <div>
                  <p className="text-gray-600 italic mb-6">“{t.text}”</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-800">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Pagination Dots */}
          <div className="swiper-pagination mt-8"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

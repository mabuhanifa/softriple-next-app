import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useRef } from "react";
import { useSelector } from "react-redux";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function Slider() {
  const { products } = useSelector((state) => state.products);

  const findAvg = (arr) => arr.reduce((a, b) => b.rating + a, 0) / arr.length;

  const topProducts = products.slice().sort((a, b) => {
    return findAvg(b.reviews) - findAvg(a.reviews);
  });
  const swiperRef = useRef();
  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {topProducts &&
          topProducts.slice(0, 10).map((product) => (
            <SwiperSlide key={product.id}>
              <div className="flex justify-center items-center">
                <div></div>

                <div>
                  <img
                    src={product.product.images[0]}
                    alt={product.title}
                    className="h-80 w-80 object-cover my-10 rounded cursor-pointer"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="flex justify-around items-center ">
        <button onClick={() => swiperRef.current?.slidePrev()}>
          <HiOutlineArrowSmLeft size={30} className="mt-1 text-2xl cursor-pointer" />
        </button>
        <button onClick={() => swiperRef.current?.slideNext()}>
          <HiOutlineArrowSmRight size={30} className="mt-1 text-2xl" />
        </button>
      </div>
    </div>
  );
}

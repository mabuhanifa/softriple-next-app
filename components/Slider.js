import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useRef } from "react";
import { useSelector } from "react-redux";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import SliderItems from "./SliderItems";

export default function Slider() {
  const { products } = useSelector((state) => state.products);

  const findAvg = (arr) => arr.reduce((a, b) => b.rating + a, 0) / arr.length;

  const topProducts = products.slice().sort((a, b) => {
    return findAvg(b.reviews) - findAvg(a.reviews);
  });

  const swiperRef = useRef();
  return (
    <div className="relative border rounded-md m-5">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
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
              <SliderItems product={product} />
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="flex justify-around items-center pb-5">
        <button onClick={() => swiperRef.current?.slidePrev()}>
          <HiOutlineArrowSmLeft
            size={30}
            className="mt-1 text-2xl cursor-pointer"
          />
        </button>
        <button onClick={() => swiperRef.current?.slideNext()}>
          <HiOutlineArrowSmRight size={30} className="mt-1 text-2xl" />
        </button>
      </div>
    </div>
  );
}

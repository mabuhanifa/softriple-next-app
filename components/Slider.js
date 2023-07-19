import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useSelector } from "react-redux";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function Slider() {
  const { products } = useSelector((state) => state.products);

  const findAvg = (arr) => arr.reduce((a, b) => b.rating + a, 0) / arr.length;

  const topProducts = products.slice().sort((a, b) => {
    return findAvg(a.reviews) - findAvg(b.reviews);
  });

  return (
    <>
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
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {products &&
          products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="flex justify-center items-center">
                <img
                  src={product.product.images[0]}
                  alt={product.title}
                  className="h-80 w-80 object-cover my-10 rounded cursor-pointer"
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}

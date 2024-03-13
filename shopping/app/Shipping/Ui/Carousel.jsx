import React from "react";
import Image from "next/image";
import BannerCarousel from "./Banner";



const HeroCarousel = () => {
        const imageUrls = [
          "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1698900201/utilities/b292e3e9f1084999386da464aa1e557b_iny161.jpg",
          "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1698900201/utilities/delicious-food-banner-template-design-cd3994e39458960f4f33e73b8c60edb9_screen_mwh00d.jpg",
          "https://res.cloudinary.com/dcb4ilgmr/image/upload/v1698898818/utilities/healthy-food-restaurant-banner-design-template-5d8526f015d6a01027536b17714b98d3_screen_mvmcok.jpg",
        ];
      
        return (
          <div>
            <BannerCarousel imageUrls={imageUrls} />
          </div> );
}
 
export default HeroCarousel;
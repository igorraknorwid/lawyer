import React from "react";
import Slider from "react-slick";
import "../styles/slider.css";

const MySlider = () => {
  const customSlider = React.useRef<Slider>(null);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider ref={customSlider} {...settings}>
        <div className='py-5 px-20  '>
          <img className='' src={"/stars.png"} alt={"starts"} />
          <div class='w-10 h-1 bg-[#cdb171] my-10 mx-auto'></div>
          <p className='text-center  text-xl'>
            Firma przeprowadziła mnie przez bardzo trudny okres w moim życiu.
            Pan Berenji towarzyszył mi na każdym kroku i udzielał mi
            niesamowitych porad prawnych.
          </p>
          <div class='w-10 h-1 bg-[#cdb171] my-10 mx-auto'></div>
          <p className='text-center'>Paulina K.</p>
        </div>
        <div className='py-5 px-20'>
          <div className='flex justify-center items-center'>
            <img className='' src={"/stars.png"} alt={"starts"} />
          </div>

          <div class='w-10 h-1 bg-[#cdb171] my-10 mx-auto'></div>
          <p className='text-center text-xl'>
            Firma przeprowadziła mnie przez bardzo trudny okres w moim życiu.
            Pan Berenji towarzyszył mi na każdym kroku i udzielał mi
            niesamowitych porad prawnych.
          </p>
          <div class='w-10 h-1 bg-[#cdb171] my-10 mx-auto'></div>
          <p className='text-center'>Paulina K.</p>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default React.memo(MySlider);

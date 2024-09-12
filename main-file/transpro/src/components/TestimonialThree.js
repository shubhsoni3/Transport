import React from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import Slider from "react-slick";

const TestimonialThree = () => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return <FaArrowLeft className={className} onClick={onClick} />;
  }
  function SamplePrevArrow(props) {
    const { className,  onClick } = props;
    return <FaArrowRight className={className} onClick={onClick} />;
  }
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      {/* Start Testimonial area  */}
      <div className='testimonial-area-3'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 d-flex'>
              <div className='section-title  text-left m-auto'>
                <span className='subtitles'>Experience</span>
                <h2 className='title'>Our Clint Review</h2>
                <p>
                Full age set feel heard and appreciated. The service provided was direct and reliable, truly catering to our needs. The journey was smooth, with no disruptions, and everything was delivered as promised. The team stood out with their professionalism and efficiency. They handled everything with care, ensuring a hassle-free experience. I was impressed by their commitment and would recommend their services to anyone looking for dependable transport solutions.
                </p>
              </div>
            </div>
            <div className='col-lg-8'>
              <div className='review-area style-01'>
                <div className='row'>
                  <div className='col-lg-12'>
                    <div className='testimonial-slider'>
                      <Slider {...settings}>
                        <div className='single-review'>
                          <div className='single-review-item'>
                            <div className='review-head'>
                              <div className='thumb'>
                                <img
                                  src='https://transpro.wowtheme7.com/assets/img/reviewer/01.png'
                                  alt='reviewer images'
                                />
                              </div>
                              <div className='author-details'>
                                <h5 className='author'>Michel Robertson</h5>
                                <span className='post'>Irene Burns</span>
                                <ul className='rating'>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className='desciption'>
                              <p>
                                In to am attended desirous raptures declared
                                diverted confined at. Collected instantly
                                remaining up certainly to necessary as. Over
                                walk dull into son boy door went new. At or
                                happiness commanded daughters as. Is handsome an
                                declared at received in extended vicinity
                                subjects.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className='single-review'>
                          <div className='single-review-item'>
                            <div className='review-head'>
                              <div className='thumb'>
                                <img
                                  src='https://transpro.wowtheme7.com/assets/img/reviewer/02.png'
                                  alt='reviewer images'
                                />
                              </div>
                              <div className='author-details'>
                                <h5 className='author'>Michel Robertson</h5>
                                <span className='post'>Irene Burns</span>
                                <ul className='rating'>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className='desciption'>
                              <p>
                                In to am attended desirous raptures declared
                                diverted confined at. Collected instantly
                                remaining up certainly to necessary as. Over
                                walk dull into son boy door went new. At or
                                happiness commanded daughters as. Is handsome an
                                declared at received in extended vicinity
                                subjects.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className='single-review'>
                          <div className='single-review-item'>
                            <div className='review-head'>
                              <div className='thumb'>
                                <img
                                  src='https://transpro.wowtheme7.com/assets/img/reviewer/01.png'
                                  alt='reviewer images'
                                />
                              </div>
                              <div className='author-details'>
                                <h5 className='author'>Michel Robertson</h5>
                                <span className='post'>Irene Burns</span>
                                <ul className='rating'>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className='desciption'>
                              <p>
                                In to am attended desirous raptures declared
                                diverted confined at. Collected instantly
                                remaining up certainly to necessary as. Over
                                walk dull into son boy door went new. At or
                                happiness commanded daughters as. Is handsome an
                                declared at received in extended vicinity
                                subjects.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className='single-review'>
                          <div className='single-review-item'>
                            <div className='review-head'>
                              <div className='thumb'>
                                <img
                                  src='https://transpro.wowtheme7.com/assets/img/reviewer/02.png'
                                  alt='reviewer images'
                                />
                              </div>
                              <div className='author-details'>
                                <h5 className='author'>Michel Robertson</h5>
                                <span className='post'>Irene Burns</span>
                                <ul className='rating'>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className='desciption'>
                              <p>
                                In to am attended desirous raptures declared
                                diverted confined at. Collected instantly
                                remaining up certainly to necessary as. Over
                                walk dull into son boy door went new. At or
                                happiness commanded daughters as. Is handsome an
                                declared at received in extended vicinity
                                subjects.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* <div className='single-review'>
                          <div className='single-review-item'>
                            <div className='review-head'>
                              <div className='thumb'>
                                <img
                                  src='https://transpro.wowtheme7.com/assets/img/reviewer/01.png'
                                  alt='reviewer images'
                                />
                              </div>
                              <div className='author-details'>
                                <h5 className='author'>Michel Robertson</h5>
                                <span className='post'>Irene Burns</span>
                                <ul className='rating'>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                  <li>
                                    <FaStar />
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className='desciption'>
                              <p>
                                In to am attended desirous raptures declared
                                diverted confined at. Collected instantly
                                remaining up certainly to necessary as. Over
                                walk dull into son boy door went new. At or
                                happiness commanded daughters as. Is handsome an
                                declared at received in extended vicinity
                                subjects.
                              </p>
                            </div>
                          </div>
                        </div> */}
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Testimonial area  */}
    </>
  );
};

export default TestimonialThree;


import Header from './components/header/header'
import Section from './components/shared/sections/section'
import './App.css'
import Footer from './components/footer/footer'
import PostContainer from './components/shared/Posts/PostItem'
import Tabs from './components/shared/Tabs/Tabs'
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/swiper-bundle.css';
import { Card, CardBody, CardFooter, CardTitle } from 'reactstrap'

function App() {
  return (
    <>
      <Header />
      <Section className="section main-banner" id="top" data-section="section1">
        <video autoPlay muted loop className="bg-video">
          <source src='https://icbdanli.nyc3.cdn.digitaloceanspaces.com/assets/images/course-video.mp4'
            type="video/mp4" />
        </video>
        <div className="video-overlay header-text">
          <div className="caption">
            <h6>Graduate School of Management</h6>
            <h2><em>Your</em> Classroom</h2>
            <div className="main-button">
              <div className="scroll-to-section"><a href="#section2">Discover more</a></div>
            </div>
          </div>
        </div>
      </Section>
      <PostContainer>
        <PostContainer.PostItem
          title="Pre-K"
          content="All Courses Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet. Donec maximus elementum ex. Cras convallis ex rhoncus, laoreet libero eu, vehicula libero."
          icon="fa fa-pencil"
          contentHidden=" All courses Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet."
          itemNumber="first-item" />
        <PostContainer.PostItem
          title="Basic"
          content="Virtual Class Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet. Donec maximus elementum ex. Cras convallis ex rhoncus, laoreet libero eu, vehicula libero."
          icon="fa fa-graduation-cap"
          contentHidden=" All courses Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet."
          itemNumber="first-item" />
        <PostContainer.PostItem
          title="High School"
          content="Real Meeting Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet. Donec maximus elementum ex. Cras convallis ex rhoncus, laoreet libero eu, vehicula libero."
          icon="fa fa-book"
          contentHidden=" All courses Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet."
          itemNumber="first-item" />
      </PostContainer>

      <Tabs title='Why Chroose ICB?' backgroundImageSrc='https://icbdanli.nyc3.digitaloceanspaces.com/assets/images/choosing-bg.jpg'>
        <Tabs.Item tabs={[
          {
            title: 'Quality Education',
            content: 'We provide top-notch education with experienced faculty and modern teaching methods.',
            imageSrc: 'https://placehold.co/534x361'
          },
          {
            title: 'Flexible Learning',
            content: 'Our courses are designed to fit your schedule, allowing you to learn at your own pace.',
            imageSrc: 'https://placehold.co/534x361'
          },
          {
            title: 'Global Community',
            content: 'Join a diverse community of learners from around the world, enhancing your educational experience.',
            imageSrc: 'https://placehold.co/534x361'
          }
        ]} />
      </Tabs>

      <section className="section coming-soon" data-section="section3">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-xs-12">
              <div className="continer centerIt">
                <div>
                  <h4>Take <em>any online course</em> and win $326 for your next class</h4>
                  <div className="counter">

                    <div className="days">
                      <div className="value">00</div>
                      <span>Days</span>
                    </div>

                    <div className="hours">
                      <div className="value">00</div>
                      <span>Hours</span>
                    </div>

                    <div className="minutes">
                      <div className="value">00</div>
                      <span>Minutes</span>
                    </div>

                    <div className="seconds">
                      <div className="value">00</div>
                      <span>Seconds</span>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="right-content">
                <div className="top-content">
                  <h6>Register your free account and <em>get immediate</em> access to online courses</h6>
                </div>
                <form id="contact" action="" method="get">
                  <div className="row">
                    <div className="col-md-12">
                      <fieldset>
                        <input name="name" type="text" className="form-control" id="name" placeholder="Your Name" required={true} />
                      </fieldset>
                    </div>
                    <div className="col-md-12">
                      <fieldset>
                        <input name="email" type="text" className="form-control" id="email" placeholder="Your Email" required={true} />
                      </fieldset>
                    </div>
                    <div className="col-md-12">
                      <fieldset>
                        <input name="phone-number" type="text" className="form-control" id="phone-number" placeholder="Your Phone Number" required={true} />
                      </fieldset>
                    </div>
                    <div className="col-md-12">
                      <fieldset>
                        <button type="submit" id="form-submit" className="button">Get it now</button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section courses" data-section="section4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Choose Your Course</h2>
              </div>
            </div>
            <Swiper slidesPerView={4} loop>
              <SwiperSlide className='item'>
                <Card className="down-content" style={{ width: '18rem' }}>
                  <img src="https://icbdanli.nyc3.digitaloceanspaces.com/assets/images/courses-01.jpg" alt="Course #1" />
                  <CardTitle tag="h4">Digital Marketing</CardTitle>
                  <CardBody tag="p" className='p-0'>You can get free https://icbdanli.nyc3.digitaloceanspaces.com/images and videos for your websites by visiting Unsplash, Pixabay, and Pexels.</CardBody>
                  <CardFooter>
                    <div className="author-image">
                      <img src="https://icbdanli.nyc3.digitaloceanspaces.com/assets/images/author-01.png" alt="Author 1" />
                    </div>
                    <div className="text-button-pay">
                      <a href="#">Pay <i className="fa fa-angle-double-right"></i></a>
                    </div>
                  </CardFooter>
                </Card>
              </SwiperSlide>
              <SwiperSlide className='item'>
                <Card className="down-content" style={{ width: '18rem' }}>
                  <img src="https://icbdanli.nyc3.digitaloceanspaces.com/assets/images/courses-02.jpg" alt="Course #2" />
                  <CardTitle tag='h4'>Business World</CardTitle>
                  <CardBody tag='p' className='p-0'>Quisque cursus augue ut velit dictum, quis volutpat enim blandit. Maecenas a lectus ac ipsum porta.</CardBody>
                  <CardFooter>
                    <div className="author-image">
                      <img src="https://icbdanli.nyc3.digitaloceanspaces.com/assets/images/author-02.png" alt="Author 2" />
                    </div>
                    <div className="text-button-free">
                      <a href="#">Free <i className="fa fa-angle-double-right"></i></a>
                    </div>
                  </CardFooter>
                </Card>
              </SwiperSlide>
              <SwiperSlide className='item'>
                <Card className="down-content" style={{ width: '18rem' }}>
                  <img src="https://icbdanli.nyc3.digitaloceanspaces.com/assets/images/courses-03.jpg" alt="Course #3" />
                  <CardTitle tag='h4'>Media Technology</CardTitle>
                  <CardBody tag='p' className='p-0'>Pellentesque ultricies diam magna, auctor cursus lectus pretium nec. Maecenas finibus lobortis enim.</CardBody>
                  <CardFooter>
                    <div className="author-image">
                      <img src="https://icbdanli.nyc3.digitaloceanspaces.com/assets/images/author-03.png" alt="Author 3" />
                    </div>
                    <div className="text-button-pay">
                      <a href="#">Pay <i className="fa fa-angle-double-right"></i></a>
                    </div>
                  </CardFooter>
                </Card>
              </SwiperSlide>
              <SwiperSlide className='item'>
                <Card className="down-content" style={{ width: '18rem' }}>
                  <img src="https://icbdanli.nyc3.digitaloceanspaces.com/assets/images/courses-04.jpg" alt="Course #4" />
                  <CardTitle tag='h4'>Communications</CardTitle>
                  <CardBody tag='p' className='p-0'>Download free https://icbdanli.nyc3.digitaloceanspaces.com/images and videos for your websites by visiting Unsplash, Pixabay, and Pexels.</CardBody>
                  <CardFooter>
                    <div className="author-image">
                      <img src="https://icbdanli.nyc3.digitaloceanspaces.com/assets/images/author-04.png" alt="Author 4" />
                    </div>
                    <div className="text-button-free">
                      <a href="#">Free <i className="fa fa-angle-double-right"></i></a>
                    </div>
                  </CardFooter>
                </Card>
              </SwiperSlide>
              <SwiperSlide className='item'>
                <Card className="down-content" style={{ width: '18rem' }}>
                  <img src="https://icbdanli.nyc3.digitaloceanspaces.com/assets/images/courses-05.jpg" alt="" />
                  <CardTitle tag='h4'>Business Ethics</CardTitle>
                  <CardBody tag='p' className='p-0'>Pellentesque ultricies diam magna, auctor cursus lectus pretium nec. Maecenas finibus lobortis enim.</CardBody>
                  <CardFooter>
                    <div className="author-image">
                      <img src="https://icbdanli.nyc3.digitaloceanspaces.com/assets/images/author-05.png" alt="" />
                    </div>
                    <div className="text-button-pay">
                      <a href="#">Pay <i className="fa fa-angle-double-right"></i></a>
                    </div>
                  </CardFooter>
                </Card>
              </SwiperSlide>
              <SwiperSlide className='item'>
                <Card className="down-content" style={{ width: '18rem' }}>
                  <img src="https://icbdanli.nyc3.digitaloceanspaces.com/assets/images/courses-01.jpg" alt="" />
                  <CardTitle tag='h4'>Photography</CardTitle>
                  <CardBody tag='p' className='p-0'>Quisque cursus augue ut velit dictum, quis volutpat enim blandit. Maecenas a lectus ac ipsum porta.</CardBody>
                  <CardFooter>
                    <div className="author-image">
                      <img src="https://icbdanli.nyc3.digitaloceanspaces.com/assets/images/author-01.png" alt="" />
                    </div>
                    <div className="text-button-free">
                      <a href="#">Free <i className="fa fa-angle-double-right"></i></a>
                    </div>
                  </CardFooter>
                </Card>
              </SwiperSlide>
              <SwiperSlide className='item'>
                <Card className="down-content" style={{ width: '18rem' }}>
                  <img src="https://icbdanli.nyc3.digitaloceanspaces.com/assets/images/courses-02.jpg" alt="" />
                  <CardTitle tag='h4'>Web Development</CardTitle>
                  <CardBody tag='p' className='p-0'>Pellentesque ultricies diam magna, auctor cursus lectus pretium nec. Maecenas finibus lobortis enim.</CardBody>
                  <CardFooter>
                    <div className="author-image">
                      <img src="https://icbdanli.nyc3.digitaloceanspaces.com/assets/images/author-02.png" alt="" />
                    </div>
                    <div className="text-button-free">
                      <a href="#">Free <i className="fa fa-angle-double-right"></i></a>
                    </div>
                  </CardFooter>
                </Card>
              </SwiperSlide>
              <SwiperSlide className='item'>
                <Card className="down-content" style={{ width: '18rem' }}>
                  <img src="https://icbdanli.nyc3.digitaloceanspaces.com/assets/images/courses-03.jpg" alt="" />
                  <CardTitle tag='h4'>Learn HTML CSS</CardTitle>
                  <CardBody tag='p' className='p-0'>You can get free https://icbdanli.nyc3.digitaloceanspaces.com/images and videos for your websites by visiting Unsplash, Pixabay, and Pexels.</CardBody>
                  <CardFooter>
                    <div className="author-image">
                      <img src="https://icbdanli.nyc3.digitaloceanspaces.com/assets/images/author-03.png" alt="" />
                    </div>
                    <div className="text-button-pay">
                      <a href="#">Pay <i className="fa fa-angle-double-right"></i></a>
                    </div>
                  </CardFooter>
                </Card>
              </SwiperSlide>
              <SwiperSlide className='item'>
                <Card className="down-content" style={{ width: '18rem' }}>
                  <img src="https://icbdanli.nyc3.digitaloceanspaces.com/assets/images/courses-04.jpg" alt="" />
                  <CardTitle tag='h4'>Social Media</CardTitle>
                  <CardBody tag='p' className='p-0'>Pellentesque ultricies diam magna, auctor cursus lectus pretium nec. Maecenas finibus lobortis enim.</CardBody>
                  <CardFooter>
                    <div className="author-image">
                      <img src="https://icbdanli.nyc3.digitaloceanspaces.com/assets/images/author-04.png" alt="" />
                    </div>
                    <div className="text-button-pay">
                      <a href="#">Pay <i className="fa fa-angle-double-right"></i></a>
                    </div>
                  </CardFooter>
                </Card>
              </SwiperSlide>
              <SwiperSlide className='item'>
                <Card className="down-content" style={{ width: '18rem' }}>
                  <img src="https://icbdanli.nyc3.digitaloceanspaces.com/assets/images/courses-05.jpg" alt="" />
                  <CardTitle tag='h4'>Digital Arts</CardTitle>
                  <CardBody tag='p' className='p-0'>Quisque cursus augue ut velit dictum, quis volutpat enim blandit. Maecenas a lectus ac ipsum porta.</CardBody>
                  <CardFooter>
                    <div className="author-image">
                      <img src="https://icbdanli.nyc3.digitaloceanspaces.com/assets/images/author-05.png" alt="" />
                    </div>
                    <div className="text-button-free">
                      <a href="#">Free <i className="fa fa-angle-double-right"></i></a>
                    </div>
                  </CardFooter>
                </Card>
              </SwiperSlide>
              <SwiperSlide className='item'>
                <Card className="down-content" style={{ width: '18rem' }}>
                  <img src="https://icbdanli.nyc3.digitaloceanspaces.com/assets/images/courses-01.jpg" alt="" />
                  <CardTitle tag='h4'>Media Streaming</CardTitle>
                  <CardBody tag='p' className='p-0'>Pellentesque ultricies diam magna, auctor cursus lectus pretium nec. Maecenas finibus lobortis enim.</CardBody>
                  <CardFooter>
                    <div className="author-image">
                      <img src="https://icbdanli.nyc3.digitaloceanspaces.com/assets/images/author-01.png" alt="" />
                    </div>
                    <div className="text-button-pay">
                      <a href="#">Pay <i className="fa fa-angle-double-right"></i></a>
                    </div>
                  </CardFooter>
                </Card>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>


      <section className="section video" data-section="section5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 align-self-center">
              <div className="left-content">
                <span>our presentation is for you</span>
                <CardTitle tag='h4'>Watch the video to learn more <em>about Grad School</em></CardTitle>
                <p>You are NOT allowed to redistribute this template ZIP file on any template collection website. However, you can use this template to convert into a specific theme for any kind of CMS platform such as WordPress. You may <a rel="nofollow" href="https://templatemo.com/contact" target="_parent">contact TemplateMo</a> for details.
                  <br /><br />Suspendisse tincidunt, magna ut finibus rutrum, libero dolor euismod odio, nec interdum quam felis non ante.</p>
                <div className="main-button"><a rel="nofollow" href="https://fb.com/templatemo" target="_parent">External URL</a></div>
              </div>
            </div>
            <div className="col-md-6">
              <article className="video-item">
                <div className="video-caption">
                  <h4>Power HTML Template</h4>
                </div>
                <figure>
                  <a href="https://www.youtube.com/watch?v=r9LtOG6pNUw" className="play"><img src="assets/https://icbdanli.nyc3.digitaloceanspaces.com/assets/images/main-thumb.png" title='' alt="" /></a>
                </figure>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact" data-section="section6">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Let’s Keep In Touch</h2>
              </div>
            </div>
            <div className="col-md-6">

              <form id="contact" action="" method="post">
                <div className="row">
                  <div className="col-md-6">
                    <fieldset>
                      <input name="name" type="text" className="form-control" id="name" placeholder="Your Name" required={true} />
                    </fieldset>
                  </div>
                  <div className="col-md-6">
                    <fieldset>
                      <input name="email" type="text" className="form-control" id="email" placeholder="Your Email" required={true} />
                    </fieldset>
                  </div>
                  <div className="col-md-12">
                    <fieldset>
                      <textarea name="message" rows={6} className="form-control" id="message" placeholder="Your message..." required={true}></textarea>
                    </fieldset>
                  </div>
                  <div className="col-md-12">
                    <fieldset>
                      <button type="submit" id="form-submit" className="button">Send Message Now</button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <div id="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.8890889444738!2d-86.58212662413203!3d14.024588090917813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6e69d5ef5bd22b%3A0xf5c0fae10dd14291!2sInstituto%20Cat%C3%B3lico%20Biling%C3%BCe!5e0!3m2!1ses!2shn!4v1753250222031!5m2!1ses!2shn" width="100%" height="422" loading="lazy"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default App


import './Home.css'

export const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='home__container'>
          <div className='home__content container'>
            <div className='home__info'>
              <h1 className='home__info-title'>Nothing In the world</h1>
              <p className='home__info-description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque natus eveniet molestiae doloribus facere odio velit accusantium asperiores, nobis deleniti blanditiis quisquam reprehenderit praesentium rem quis? Dolorum quam impedit voluptate.
              </p>
            </div>
            <img src='https://www.treehugger.com/thmb/nSp8ESJ1N6zq_bsTVL_MoSrKAqA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1273584292-cbcd5f85f4c646d58f7a7fa158dcaaeb.jpg' alt='home__image' className='home__content-img' />
          </div>
        </div>
      </section>
      <section className='somesection'>
        <div className='somesection__container'>
          
        </div>
      </section>
      <section className='somesection'>
        <div className='somesection__container'>

        </div>
      </section>
      <section className='somesection'>
        <div className='somesection__container'>

        </div>
      </section>
    </>
  )
}

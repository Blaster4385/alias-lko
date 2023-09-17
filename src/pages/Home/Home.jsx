import AboutUs from '../../components/AboutUs/AboutUs'
import Events from '../../components/Events/Events'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'

import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.home__container}>
        <Navbar />
        <Hero />
        <AboutUs />
        <Events />
    </div>
  )
}

export default Home
import heroBg from '../../assets/images/hero.png';
import './hero.scss'
import FormHero from "./form"

const Hero = () => {
  return (
    <div className="aprende-hero" style={{
      backgroundImage: `url(${heroBg})`
    }}>
      <div className='aprende-hero--content' >
        <h1>
          Diplomado en <span>Instalaciones Eléctricas</span>
        </h1>
        <p>
          Text: P1 - Lorem ipsum dolor sit amet consectetur adipiscing elit platea rhoncus lacinia, nunc laoreet ipsum dolor sit amet consectetur.
        </p>
      </div>
      <FormHero />
    </div>
  )
}

export default Hero
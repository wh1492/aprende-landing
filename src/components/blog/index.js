import { Link } from "react-router-dom";
import './blog.scss'
import imageArticle from '../../assets/images/icon.png';

const Blog = () => {
  return (
    <div className="aprende-blog">
      <div className="container">

        <article className='aprende-blog--item'>
          <picture className='aprende-blog--item-picture'>
            <Link to="/"><img src={imageArticle} alt="image" /></Link>
          </picture>
          <div className='aprende-blog--item-content'>
            <h3><Link to="/">Title: P1 - Lorem ipsum dolor sit</Link></h3>
            <p>
              TextP2 - Lorem ipsum dolor sit amet consectetur adipiscing elit platea rhoncus lacinia, nunc laoreet
            </p>
          </div>
        </article>
        <article className='aprende-blog--item'>
          <picture className='aprende-blog--item-picture'>
            <Link to="/"><img src={imageArticle} alt="image" /></Link>
          </picture>
          <div className='aprende-blog--item-content'>
            <h3><Link to="/">Title: P1 - Lorem ipsum dolor sit</Link></h3>
            <p>
              TextP2 - Lorem ipsum dolor sit amet consectetur adipiscing elit platea rhoncus lacinia, nunc laoreet
            </p>
          </div>
        </article>
        <article className='aprende-blog--item'>
          <picture className='aprende-blog--item-picture'>
            <Link to="/"><img src={imageArticle} alt="image" /></Link>
          </picture>
          <div className='aprende-blog--item-content'>
            <h3><Link to="/">Title: P1 - Lorem ipsum dolor sit</Link></h3>
            <p>
              TextP2 - Lorem ipsum dolor sit amet consectetur adipiscing elit platea rhoncus lacinia, nunc laoreet
            </p>
          </div>
        </article>
        <article className='aprende-blog--item'>
          <picture className='aprende-blog--item-picture'>
            <Link to="/"><img src={imageArticle} alt="image" /></Link>
          </picture>
          <div className='aprende-blog--item-content'>
            <h3><Link to="/">Title: P1 - Lorem ipsum dolor sit</Link></h3>
            <p>
              TextP2 - Lorem ipsum dolor sit amet consectetur adipiscing elit platea rhoncus lacinia, nunc laoreet
            </p>
          </div>
        </article>
        <article className='aprende-blog--item'>
          <picture className='aprende-blog--item-picture'>
            <Link to="/"><img src={imageArticle} alt="image" /></Link>
          </picture>
          <div className='aprende-blog--item-content'>
            <h3><Link to="/">Title: P1 - Lorem ipsum dolor sit</Link></h3>
            <p>
              TextP2 - Lorem ipsum dolor sit amet consectetur adipiscing elit platea rhoncus lacinia, nunc laoreet
            </p>
          </div>
        </article>

      </div>
    </div>
  )
}

export default Blog
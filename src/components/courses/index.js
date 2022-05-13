import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from '../commons/loader'
import './courses.scss'


const CardCourse = ({ course, category, actCat }) => {
  return (
    <div className={actCat == category || actCat == 'all' ? 'card-course show' : "card-course hidden"} >
      <picture className="card-course--thumb">
        <source srcSet={course.meta.thumbnail.sizes.desktop} media="(min-width: 600px)" />
        <img src={course.meta.thumbnail.sizes.tablet} alt={course.slug} />
      </picture>
      <h5 className="card-course--title">{course.title.rendered}</h5>
      <Link className="card-course--button" to="/">Ver clase</Link>
    </div>
  )
}


const Courses = () => {
  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState({});
  const [postsSec, setPostsSec] = useState({});
  const [postCount, setPostCount] = useState(4)
  const [moreCount, setMoreCount] = useState(0)
  const [postCat, setPostCat] = useState('all')

  const filterPost = posts
  const allPosts = postsSec
  let filtrado = []

  function viewMore() {
    setPostCount(postCount + 4)
    setLoading(true)
    setTimeout(function () {
      setLoading(false)
    }, 500)
  }

  const fetchPost = async () => {
    const response = await fetch(
      "https://qa.aprende.dev/wp-json/aprende/v1/ap-master-class"
    );
    const data = await response.json();
    setPosts(data);
    setPostsSec(data);
    setLoading(false)
    setPostCount(4)
    setMoreCount(data.length)
  };

  useEffect(() => {
    fetchPost();
    setPostCat('all')
  }, []);

  function filterPosts(catSlug) {
    setPostCat(catSlug)
    setPostCount(4)
    setLoading(true)
    setTimeout(() => setLoading(false), 500)
    allPosts.filter(post => post.taxonomy['master-class-category'][0]).
      map(filteredPost => {
        // 
        if (filteredPost.taxonomy['master-class-category'][0].slug == catSlug) {
          filtrado.push(filteredPost)
          setPosts(filtrado);
          setMoreCount(filtrado.length)
        } else if (catSlug == 'all') {
          setPosts(postsSec)
          setMoreCount(postsSec.length)
        }
      })

  }

  return (
    <div className="aprende-courses">
      <div className="container">

        <h4>Explora todas nuestras Clases Magistrales</h4>


        <ul className="aprende-courses--categories">
          <li><button onClick={() => filterPosts('all')} id="all" className={postCat == 'all' ? 'active' : ''}>Todas</button></li>
          <li><button onClick={() => filterPosts('chocolateria')} id="chocolateria" className={postCat == 'chocolateria' ? 'active' : ''}>Chocolatería</button></li>
          <li><button onClick={() => filterPosts('manicure')} id="manicure" className={postCat == 'manicure' ? 'active' : ''}>Manicure</button></li>
        </ul>

        {loading && (
          <Loader />
        )}

        {!loading && (
          <>
            <div className="aprende-courses--list">
              {
                filterPost.slice(0, postCount).map(post => <CardCourse course={post} actCat={postCat} category={post.taxonomy['master-class-category'][0].slug} key={post.id} />)
              }
            </div>
            {
              moreCount > 4 && (
                <button className={loading ? 'btn-more active' : 'btn-more'} onClick={() => viewMore()}>Ver más</button>
              )
            }
          </>
        )
        }

      </div>
    </div>
  )
}

export default Courses
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './courses.scss'


const CardCourse = ({ course }) => {
  // const id = course.url.split('/').filter(x => x).pop()
  return (
    <div className="card-course">
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
  const [postCount, setPostCount] = useState(4)

  function viewMore() {
    setPostCount(postCount + 4)
    // console.log('click a more', postCount)
  }
  
  const fetchPost = async () => {
    const response = await fetch(
      "https://qa.aprende.dev/wp-json/aprende/v1/ap-master-class"
    );
    const data = await response.json();
    setPosts(data);
    setLoading(false)
  };

  useEffect(() => {
    fetchPost();
  }, []);


  if (loading) {
    return (
      <p>Cargando...</p>
    )
  }

  return (
    <div className="aprende-courses">
      <h4>Explora todas nuestras Clases Magistrales</h4>
      {/* <pre>
          {JSON.stringify(posts, 0)}
        </pre> */}
      <ul className="aprende-courses--categories">
        <li><button id="all" className="active">Todas</button></li>
        <li><button id="chocolateria">Chocolatería</button></li>
        <li><button id="manicure">Manicure</button></li>
      </ul>

      <div className="aprende-courses--list">
        {
          posts.slice(0, postCount).map(post => <CardCourse course={post} key={post.id} />)
        }
      </div>
      <button className="btn-more" onClick={() => viewMore()}>Ver más</button>
    </div>
  )
}

export default Courses

function About(props) {
  const defaultImg = props.image || "https://via.placeholder.com/215";
  return(
    <div>
      <aside>
        <img src={defaultImg} alt="blog logo" />
        <p>{props.about}</p>
      </aside>
    </div>
  )
}

export default About;
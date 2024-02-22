function Article(props) {
  console.log(props);
  const formattedDate = !props.date ? "January 1, 1970" : props.date;
  
  return(
    <article>
      <h3>{props.title}</h3>
      <small>{formattedDate}</small>
      <p>{props.preview}</p>
    </article>
  )
}

export default Article;
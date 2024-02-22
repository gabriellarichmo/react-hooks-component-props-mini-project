import Article from "./Article";

function ArticleList({projects}) {
  return (
    <main id="article-list">
      {projects?.map(project => (
        <Article 
          key={project.id}
          title={project.title}
          date={project.date}
          preview={project.preview}
          minutes={project.minutes}
        />
      ))}
    </main>
  );
}

export default ArticleList;
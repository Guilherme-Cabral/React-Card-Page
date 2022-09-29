import './styles.css'

export const Card = ({ title, cover, id, body }) => {
  return (
    <div className="post">
      <img src={cover} alt={title} />
      <div className="post-content">
        <h1>{id}</h1>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
};

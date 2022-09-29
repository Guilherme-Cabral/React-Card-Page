import { Card } from "../PostCard";
import './styles.css'

export const Post = ({posts}) => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <Card
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
          cover={post.cover}
        />
      ))}
    </div>
  );
};

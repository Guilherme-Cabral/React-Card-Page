import { Component } from "react";
import { loadposts } from "../../utils/load-poasts";
import { Post } from "../../Components/posts";

import "./styles.css";
import { LoadButton } from "../../Components/LoadBtn";
import { TextInput } from "../../Components/TextInput";

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 12,
    searchValue: "",
  };

  async componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;

    const post = await loadposts();
    this.setState({
      posts: post.slice(page, postsPerPage),
      allPosts: post,
    });
  };

  morePosts = () => {
    const { page, postsPerPage, allPosts, posts } = this.state;

    const nextPage = page + postsPerPage;
    const nexPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nexPosts);

    this.setState({ posts, page: nextPage });
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  };

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;
    const btnText = noMorePosts ? "End of Posts" : "Load More Posts";

    const filteredPosts = !!searchValue
      ? allPosts.filter((post) =>
          post.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      : posts;

    return (
      <section className="container">
        {!!searchValue && (
          <div className="search-title">
            <h1>Search value:{searchValue}</h1>
            <br/>
          </div>
        )}
        <TextInput
        searchValue={searchValue}
        handleChange={this.handleChange}
        />
        <br />
        <br />
        {filteredPosts.length > 0 && <Post posts={filteredPosts} />}
        
        {filteredPosts.length <= 0 && (
            <p>Posts not found =( </p>
        )}
        <div className="btnContainer">
          {!searchValue && (
            <LoadButton
              text={btnText}
              click={this.morePosts}
              disabled={noMorePosts}
            />
          )}
        </div>
      </section>
    );
  }
}

export default Home;

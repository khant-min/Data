import PostsList from "./features/posts/postsList";
import AddPostForm from "./features/posts/AddPostForm";

const App = () => {
  return (
    <main>
      <AddPostForm />
      <PostsList />
    </main>
  );
};

export default App;

import { NewPostCard } from "./NewPostCard";
import PostCard from "./PostCard";

const post = {
  id: 1,
  title: "Ola mundo",
  content: "Meu primeiro componente!",
  user: {
    id: 1,
    name: "ezequiel",
  },
};

function App() {
  return (
    <div>
      <PostCard>
        <PostCard.Title post={post} />
        <PostCard.Content post={post} />
        <PostCard.Author post={post} />
        <PostCard.Buttons post={post} />
      </PostCard>

      <PostCard>
        <PostCard.Title post={post} />
        <PostCard.Content post={post} />
        <PostCard.Author post={post} />
      </PostCard>

      <NewPostCard.Root>
        <NewPostCard.Title title={"Bem vindo"} />
        <NewPostCard.Author author={"Felipe"} />
        <NewPostCard.Content content={"Meu component react"} />
      </NewPostCard.Root>
    </div>
  );
}

export default App;

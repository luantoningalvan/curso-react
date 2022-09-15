import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/luantoningalvan.png",
      name: "Luan Tonin Galvan",
      role: "Desenvolvedor Front End @ Luizalabs",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iure deleniti tempore nam neque ut illum beatae aliquam",
      },
      {
        type: "paragraph",
        content:
          "assumenda sit repudiandae quod, in reiciendis inventore praesentium natus, officiis facilis corporis.",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-07-09 16:13:44"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/luantoningalvan.png",
      name: "Luan Tonin Galvan",
      role: "Desenvolvedor Front End @ Luizalabs",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iure deleniti tempore nam neque ut illum beatae aliquam",
      },
      {
        type: "paragraph",
        content:
          "assumenda sit repudiandae quod, in reiciendis inventore praesentium natus, officiis facilis corporis.",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-07-09 16:13:44"),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;

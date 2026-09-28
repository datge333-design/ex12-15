import { useState, useEffect } from "react";

export default function UserPosts({ userId }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let ignore = false; // tránh cập nhật state nếu userId đã đổi / component đã bị gỡ

    const fetchData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
      );
      const data = await response.json();
      if (!ignore) setPosts(data);
    };

    fetchData();

    return () => {
      ignore = true; // cleanup
    };
  }, [userId]); // chạy lại khi userId thay đổi

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

import { useState, useEffect } from "react";
import { fetchPosts } from "../api/postApi";
import { paginate } from "../utils/helpers";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const limit = 5; // number of posts per page

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, []);

  const filteredPosts = posts.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  const paginatedPosts = paginate(filteredPosts, page, limit);
  const totalPages = Math.ceil(filteredPosts.length / limit);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      <ul className="space-y-4">
  {paginatedPosts.map(post => (
    <li key={post.id} className="p-4 bg-white dark:bg-gray-800 rounded transition-colors duration-300">
      <h3 className="font-bold text-lg mb-1">{post.title}</h3>
      <p className="text-gray-700 dark:text-gray-300">{post.body}</p>
    </li>
  ))}
</ul>

      <div className="flex justify-center mt-4 space-x-2">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span>
          {page} / {totalPages}
        </span>
        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

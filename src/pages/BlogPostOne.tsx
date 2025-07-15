import BlogPost from "../components/BlogPost";

const BlogPostOne = () => (
  <BlogPost
    title="Lorem Ipsum Dolor Sit Amet"
    date="January 1, 2024"
    author="Lorem Ipsum"
    image="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop"
  >
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <h2>Lorem Ipsum</h2>
    <ul>
      <li>Ut enim ad minim veniam</li>
      <li>Quis nostrud exercitation ullamco</li>
      <li>Laboris nisi ut aliquip ex ea commodo consequat</li>
    </ul>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
  </BlogPost>
);

export default BlogPostOne; 
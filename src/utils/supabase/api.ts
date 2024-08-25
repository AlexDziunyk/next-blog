export const getBlogs = async (limit: number) => {
  const blogs = await fetch(`/api/blogs?limit=${limit}`);
  const json = await blogs.json();

  return json;
}
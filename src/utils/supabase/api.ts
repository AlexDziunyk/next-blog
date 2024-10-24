export const getBlogs = async (limit: number) => {
  const blogs = await fetch(`/api/blogs`);
  const json = await blogs.json();

  return json;
}
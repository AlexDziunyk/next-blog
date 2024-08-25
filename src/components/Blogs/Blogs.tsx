"use client";
import { getBlogs } from "@/utils/supabase/api";
import { useQuery } from "@tanstack/react-query";
import React, { useCallback, useEffect } from "react";
import BlogItem from "../BlogItem/BlogItem";

interface IBlog {
  id: number;
  title: string;
  username: string;
  created_at: string;
  avatar: string;
  tags: string[];
  cover: string;
}

const Blogs = () => {
  const queryBlogs = useCallback(() => getBlogs(10), []);

  const {
    data: blogs,
    isPending,
    status,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: queryBlogs,
  });

  useEffect(() => {
    console.log(blogs);
  }, [status]);

  if (isPending) return <div>Loading</div>;

  return (
    <div>
      {blogs.map(({ id, title, cover, username, created_at, avatar, tags }: IBlog) => (
        <BlogItem
          key={id}
          title={title}
          image={cover}
          username={username}
          date={created_at.toString()}
          avatar={""}
          tags={[]}
        />
      ))}
    </div>
  );
};

export default Blogs;

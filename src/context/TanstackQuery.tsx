'use client';
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface ITanstackQueryProps {
  children: React.ReactNode;
}

const TanstackQuery = ({ children }: ITanstackQueryProps) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default TanstackQuery;

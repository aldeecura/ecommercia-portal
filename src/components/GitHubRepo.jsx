import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const fetchRepoData = async (repo) => {
  const response = await fetch(`https://api.github.com/repos/${repo}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const GitHubRepo = ({ repo }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['repo', repo],
    queryFn: () => fetchRepoData(repo),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>{data.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500 mb-4">{data.description}</p>
        <div className="flex justify-between items-center">
          <span>⭐ {data.stargazers_count}</span>
          <span>🍴 {data.forks_count}</span>
        </div>
        <Button className="mt-4 w-full" onClick={() => window.open(data.html_url, "_blank")}>
          View on GitHub
        </Button>
      </CardContent>
    </Card>
  );
};

export default GitHubRepo;
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

const fetchRepoContents = async (repo) => {
  const response = await fetch(`https://api.github.com/repos/${repo}/contents`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const GitHubRepo = ({ repo }) => {
  const { data: repoData, isLoading: repoLoading, error: repoError } = useQuery({
    queryKey: ['repo', repo],
    queryFn: () => fetchRepoData(repo),
  });

  const { data: contentsData, isLoading: contentsLoading, error: contentsError } = useQuery({
    queryKey: ['repoContents', repo],
    queryFn: () => fetchRepoContents(repo),
  });

  if (repoLoading || contentsLoading) return <div>Loading...</div>;
  if (repoError || contentsError) return <div>An error occurred: {repoError?.message || contentsError?.message}</div>;

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>{repoData.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500 mb-4">{repoData.description}</p>
        <div className="flex justify-between items-center mb-4">
          <span>⭐ {repoData.stargazers_count}</span>
          <span>🍴 {repoData.forks_count}</span>
        </div>
        <Button className="w-full mb-4" onClick={() => window.open(repoData.html_url, "_blank")}>
          View on GitHub
        </Button>
        <h3 className="font-bold mb-2">Repository Contents:</h3>
        <ul className="list-disc pl-5">
          {contentsData.slice(0, 5).map((item) => (
            <li key={item.sha} className="text-sm">
              {item.name} ({item.type})
            </li>
          ))}
        </ul>
        {contentsData.length > 5 && <p className="text-sm text-gray-500 mt-2">And {contentsData.length - 5} more files...</p>}
      </CardContent>
    </Card>
  );
};

export default GitHubRepo;

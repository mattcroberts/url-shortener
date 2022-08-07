import { FC } from "react";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import { useGetAllUrlsQuery } from "../../generated";

export const AllUrls: FC = () => {
  const { data, loading, error } = useGetAllUrlsQuery();

  if (error) {
    return <PageWrapper>PageWrapper</PageWrapper>;
  }

  if (loading) {
    return (
      <PageWrapper>
        <p>Loading...</p>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <h1>All URLs</h1>
      <ul data-testid="urls-list">
        {data?.urls.map((url) => (
          <li key={url.id}>
            <a href={url.shortUrl}>{url.shortUrl}</a> ({url.originalUrl})
          </li>
        ))}
      </ul>
    </PageWrapper>
  );
};

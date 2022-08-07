import { FC } from "react";
import { useParams } from "react-router-dom";
import { useGetUrlQuery } from "../../generated";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";

export const ManagePage: FC = () => {
  const params = useParams();
  const { data, loading, error } = useGetUrlQuery({
    variables: { id: params.id as string },
  });

  if (error) {
    return (
      <PageWrapper>
        <p>Error</p>
      </PageWrapper>
    );
  }

  if (loading) {
    return (
      <PageWrapper>
        <p>Loading...</p>
      </PageWrapper>
    );
  }

  if (!data?.url) {
    return (
      <PageWrapper>
        <p>NOT FOUND</p>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <p data-testid="manage-url">
        Your shortened URL is{" "}
        <a href={data.url.shortUrl}>{data.url.shortUrl}</a> is a link to{" "}
        <a href={data.url.originalUrl}>{data.url.originalUrl}</a>
      </p>
    </PageWrapper>
  );
};

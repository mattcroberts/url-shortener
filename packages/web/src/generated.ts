import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUrl: Url;
};


export type MutationCreateUrlArgs = {
  url: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  url?: Maybe<Url>;
  urls: Array<Url>;
};


export type QueryUrlArgs = {
  id: Scalars['ID'];
};

export type Url = {
  __typename?: 'Url';
  id: Scalars['ID'];
  originalUrl: Scalars['String'];
  shortUrl: Scalars['String'];
};

export type CreateUrlMutationVariables = Exact<{
  url: Scalars['String'];
}>;


export type CreateUrlMutation = { __typename?: 'Mutation', createUrl: { __typename?: 'Url', id: string, originalUrl: string, shortUrl: string } };

export type GetAllUrlsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUrlsQuery = { __typename?: 'Query', urls: Array<{ __typename?: 'Url', id: string, originalUrl: string, shortUrl: string }> };

export type GetUrlQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetUrlQuery = { __typename?: 'Query', url?: { __typename?: 'Url', id: string, originalUrl: string, shortUrl: string } | null };


export const CreateUrlDocument = gql`
    mutation CreateUrl($url: String!) {
  createUrl(url: $url) {
    id
    originalUrl
    shortUrl
  }
}
    `;
export type CreateUrlMutationFn = Apollo.MutationFunction<CreateUrlMutation, CreateUrlMutationVariables>;

/**
 * __useCreateUrlMutation__
 *
 * To run a mutation, you first call `useCreateUrlMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUrlMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUrlMutation, { data, loading, error }] = useCreateUrlMutation({
 *   variables: {
 *      url: // value for 'url'
 *   },
 * });
 */
export function useCreateUrlMutation(baseOptions?: Apollo.MutationHookOptions<CreateUrlMutation, CreateUrlMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUrlMutation, CreateUrlMutationVariables>(CreateUrlDocument, options);
      }
export type CreateUrlMutationHookResult = ReturnType<typeof useCreateUrlMutation>;
export type CreateUrlMutationResult = Apollo.MutationResult<CreateUrlMutation>;
export type CreateUrlMutationOptions = Apollo.BaseMutationOptions<CreateUrlMutation, CreateUrlMutationVariables>;
export const GetAllUrlsDocument = gql`
    query GetAllUrls {
  urls {
    id
    originalUrl
    shortUrl
  }
}
    `;

/**
 * __useGetAllUrlsQuery__
 *
 * To run a query within a React component, call `useGetAllUrlsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUrlsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUrlsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUrlsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUrlsQuery, GetAllUrlsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUrlsQuery, GetAllUrlsQueryVariables>(GetAllUrlsDocument, options);
      }
export function useGetAllUrlsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUrlsQuery, GetAllUrlsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUrlsQuery, GetAllUrlsQueryVariables>(GetAllUrlsDocument, options);
        }
export type GetAllUrlsQueryHookResult = ReturnType<typeof useGetAllUrlsQuery>;
export type GetAllUrlsLazyQueryHookResult = ReturnType<typeof useGetAllUrlsLazyQuery>;
export type GetAllUrlsQueryResult = Apollo.QueryResult<GetAllUrlsQuery, GetAllUrlsQueryVariables>;
export const GetUrlDocument = gql`
    query GetUrl($id: ID!) {
  url(id: $id) {
    id
    originalUrl
    shortUrl
  }
}
    `;

/**
 * __useGetUrlQuery__
 *
 * To run a query within a React component, call `useGetUrlQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUrlQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUrlQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUrlQuery(baseOptions: Apollo.QueryHookOptions<GetUrlQuery, GetUrlQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUrlQuery, GetUrlQueryVariables>(GetUrlDocument, options);
      }
export function useGetUrlLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUrlQuery, GetUrlQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUrlQuery, GetUrlQueryVariables>(GetUrlDocument, options);
        }
export type GetUrlQueryHookResult = ReturnType<typeof useGetUrlQuery>;
export type GetUrlLazyQueryHookResult = ReturnType<typeof useGetUrlLazyQuery>;
export type GetUrlQueryResult = Apollo.QueryResult<GetUrlQuery, GetUrlQueryVariables>;
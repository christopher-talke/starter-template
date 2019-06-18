import React from "react";
import MainLayout from "../../components/MainLayout";
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";

const GET_WELCOME = gql`
  query {
    welcome
  }
`;

const Home = () => {
  const { data, error, loading } = useQuery(GET_WELCOME);

  if (loading) {
    return <MainLayout>Loading...</MainLayout>;
  }

  if (error) {
    return <MainLayout>There was a problem...</MainLayout>;
  }

  return <MainLayout>{data.welcome}</MainLayout>;
};

export default Home;

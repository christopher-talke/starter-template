import App, { Container } from "next/app";
import React from "react";
import GlobalStyle from "../styles/GlobalStyle";
import { ApolloProvider } from "react-apollo-hooks";
import withData from "./withData";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, pageProps, apollo } = this.props;

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <>
            <GlobalStyle />
            <Component {...pageProps} />
          </>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withData(MyApp);

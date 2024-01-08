import React from "react";
import Head from "next/head";

function Page({ params }) {
  return (
    <>
      <head>
        <title>Test page</title>
        <meta
          property="og:image"
          content={`${process.env.BASE_URL}/api/og?name=${params.name}`}
        />
      </head>
      <h1>Shop</h1>
      <p>Here is a list of products</p>
    </>
  );
}

export default Page;

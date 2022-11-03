import React from "react";
import axios from "axios";
import Details from "../../components/global/Details";
import Head from "next/head";
import logo from "../../public/logo.svg";

export const getStaticPaths = async () => {
  const tempData = [];
  let url = "https://swapi.dev/api/films/?page=1";

  do {
    const { data } = await axios.get(url);
    url = data.next;
    tempData.push(...data.results);
  } while (url);

  const allData = tempData.map((item) => {
    return { ...item, id: item.url.replace(/[^0-9]/g, "") };
  });
  const paths = allData.map((item) => {
    return {
      params: {
        id: item.id,
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const { data } = await axios.get("https://swapi.dev/api/films/" + id);

  return {
    props: { data },
  };
};

export default function Film({ data }) {
  return (
    <>
      <Head>
        <title>{data.title} - Star Wars</title>
        <meta
          name="description"
          content={`Detailed information about ${data.title}`}
        />
        <link rel="icon" type="image/svg" href={logo.src} />
      </Head>
      <Details data={data} type="films" />
    </>
  );
}

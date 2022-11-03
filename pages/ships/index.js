import axios from "axios";
import Head from "next/head";
import React from "react";
import MainPageComponent from "../../components/global/MainPageComponent";
import logo from "../../public/logo.svg";

export const getStaticProps = async () => {
  const tempData = [];
  let url = "https://swapi.dev/api/starships/?page=1";

  do {
    const { data } = await axios.get(url);
    url = data.next;
    tempData.push(...data.results);
  } while (url);

  const allData = tempData.map((item) => {
    return { ...item, id: item.url.replace(/[^0-9]/g, "") };
  });

  return {
    props: { data: allData },
  };
};

function Ships({ data }) {
  return (
    <>
      <Head>
        <title>Ships - Star Wars</title>
        <meta name="description" content="Star Wars content" />
        <link rel="icon" type="image/svg" href={logo.src} />
      </Head>
      <MainPageComponent itemsPerPage={12} data={data} type="ships" />
    </>
  );
}

export default Ships;

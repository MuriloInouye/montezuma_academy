import {GetServerSideProps} from "next"
import { Header } from "../components/header";
import { Container } from "../styles/main";
import { Introductionsection } from "../components/IntroductionSection";
import { EncountersInfos } from "../components/EncountersInfos";
import { AboutMentor } from "../components/AboutMentor";
import { SellingSection } from "../components/SellingSection";
import Head from "next/head";


export default function Home() {
  return (
    <>
    <Head>
        <title>Montezuma Academy | Mentoria</title>
        <meta name="description" content="MENTORIA CONTROLADORIA NA PRÁTICA"/>
        <meta name="keywords" content="erp, power bi, omie, bi, controladoria digital, business intelligence, report, dashboard, mentoria, montezuma academy, montezuma, academy, controladoria, rodrigo montezuma"/>
    </Head>
    <Container>
      <Header/>
      <Introductionsection/>
      <EncountersInfos/>
      <AboutMentor/>
      <SellingSection/>
    </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {}
  }
}
  
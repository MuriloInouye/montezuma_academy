import {GetServerSideProps} from "next"
import { Header } from "../components/header";
import { Container } from "../styles/main";
import { Introductionsection } from "../components/IntroductionSection";
import { EncountersInfos } from "../components/EncountersInfos";
import { AboutMentor } from "../components/AboutMentor";
import { SellingSection } from "../components/SellingSection";

export default function Home() {
  return (
    <Container>
      <Header/>
      <Introductionsection/>
      <EncountersInfos/>
      <AboutMentor/>
      <SellingSection/>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {}
  }
}
  
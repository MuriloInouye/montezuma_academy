import {GetServerSideProps} from "next"
import { Header } from "../components/Header";
import { Container } from "../styles/main";
import { Introductionsection } from "../components/IntroductionSection";
import { EncountersInfos } from "../components/EncountersInfos";

export default function Home() {
  return (
    <Container>
      <Header/>
      <Introductionsection/>
      <EncountersInfos/>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {}
  }
}
  
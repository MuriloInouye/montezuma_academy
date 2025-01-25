import {GetServerSideProps} from "next"
import { Header } from "../components/header";
import { Container } from "../styles/main";

export default function Home() {
  return (
    <Container>
      <Header/>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {}
  }
}
  
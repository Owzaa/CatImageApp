import Layout from "../components/Layout/layout";
import Container from "../components/container";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Layout>
        <Container />
        <div style={{ position: "absolute", bottom: 0, width: "100%" }} >
          <Footer bg="dark" />
        </div>
      </Layout>
    </div>
  );
}
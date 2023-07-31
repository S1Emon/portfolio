import About from "@/component/About";
import Hero from "@/component/Hero";
import Layout from "@/component/Layout/layout";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <About />
      </Layout>
    </>
  );
}

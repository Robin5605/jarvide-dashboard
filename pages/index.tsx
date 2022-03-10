import DiscordBar from "../components/index/DiscordBar";
import Footer from "../components/index/Footer";
import Header from "../components/index/Header";
import Navbar from "../components/index/Navbar";
import Sections from "../components/index/Sections";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Jarvide</title>
        <meta content="Jarvide" />
        <meta content="Discord bot with an integrated IDE" />
        
      </Head>
      <div className="flex flex-col">
        <Navbar />
        <Header />
        <DiscordBar />
        <Sections />
        <Footer />
      </div>
    </>

  );
}

export default Home;
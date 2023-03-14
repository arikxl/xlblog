import Head from "next/head";
import "slick-carousel/slick/slick.css";
import Banner from "../components/Banner";
import BannerBottom from "../components/BannerBottom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>XLblog</title>
        <link rel="icon" href="https://res.cloudinary.com/arikxl/image/upload/v1678745162/Ella2023/ntinbkc5taw9wrrspllq.png" />
      </Head>

      <main className="font-bodyFont">
        <Header />
        <Banner />
        <div className="max-w-7xl mx-auto h-60 relative">
          <BannerBottom />
        </div>
        {/* ============ Banner-Bottom End here ======= */}
        {/* ============ Post Part Start here ========= */}
        <div className="max-w-7xl mx-auto py-20 px-4">Posts will go here</div>
        {/* ============ Post Part End here =========== */}
        {/* ============ Footer Start here============= */}
        <Footer />
        {/* ============ Footer End here ============== */}
      </main>
    </div>
  );
}

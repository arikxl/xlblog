import Head from "next/head";
import "slick-carousel/slick/slick.css";

import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import BannerBottom from "../components/BannerBottom";
import { sanityClient, urlFor } from '../sanity';
import { Post } from "../typings";

interface Props{
  posts: [Post]
}

export default function Home({posts}: Props) {
  console.log('posts:', posts)
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
        <div className="max-w-7xl mx-auto py-20 px-4">
          {posts.map((p) => (
            <div key={p._id}>{ p.title}</div>
          ))}
        </div>
        {/* ============ Post Part End here =========== */}
        {/* ============ Footer Start here============= */}
        <Footer />
        {/* ============ Footer End here ============== */}
      </main>
    </div>
  );
}


export const getServerSideProps = async () => {
  const query = `
    *[_type == "post"]{
      _id,
      title,
      categories -> {
        title
      },
      author -> {
        name,
        image
      },
      description,
      mainImage,
      slug
    }
  `
  const posts = await sanityClient.fetch(query);
  return {
    props: {
      posts,
    }
  }
}
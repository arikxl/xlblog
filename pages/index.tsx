import Head from "next/head";
import "slick-carousel/slick/slick.css";

import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import BannerBottom from "../components/BannerBottom";
import { sanityClient, urlFor } from '../sanity';
import { Post } from "../typings";
import Image from "next/image";
import Link from "next/link";
import PostPreview from "../components/PostPreview";

interface Props {
  posts: [Post]
}

export default function Home({ posts }: Props) {
  return (
    <div>
      <Head>
        <title>XLblog</title>
        <link rel="icon" href="https://res.cloudinary.com/arikxl/image/upload/v1679430740/Ella2023/haogdktdotxczrtiuake.png" />
      </Head>

      <main className="font-bodyFont">
        <Header />
        <Banner />
        <div className="max-w-full mx-auto h-60 relative">
          <BannerBottom />
        </div>


        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2
         lg:grid-cols-3 gap-3 md:gap-6 py-6 px-4 ">
          {posts.map((p) => (
            <PostPreview key={p._id} post={p}/>
          ))}
        </div>

        <Footer />
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
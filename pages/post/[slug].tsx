import { GetStaticProps } from 'next';
import React from 'react'
import PortableText from 'react-portable-text';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { sanityClient, urlFor } from '../../sanity';
import { Post } from '../../typings';

type Props = {
    post: Post
}

const PostPage = ({ post }: Props) => {

    return (
        <>
            <Header />
            <img src={urlFor(post.mainImage).url()!}
                alt={post.title}
                className="w-full h-96 object-cover"
            />
            <section className="max-w-3xl mx-auto">
                <article className="w-full mx-auto p-5 bg-secondaryColor/5">
                    <h1 className="font-titleFont font-medium text-[32px] text-primary border-b-[1px] border-b-cyan-800 mt-10 mb-3">
                        {post.title}
                    </h1>
                    <h2 className="font-bodyFont text-[24px] text-gray-500 mb-2">
                        {post.description}
                    </h2>
                    <div className="flex items-center gap-2">
                        <img src={urlFor(post.author.image).url()!} alt={post.author.name}
                            className="rounded-full w-12 h-12 object-cover bg-red-400" />
                        <p className="font-bodyFont text-base">
                            Blog post by
                            <span className="font-bold text-secondaryColor"> { post.author.name} </span>
                            - Published at {new Date(post.publishedAt).toLocaleDateString()}
                        </p>
                    </div>
                    <div className="mt-10">
                        <PortableText dataset={process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'}
                            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                            content={post.body}
                            serializers={{
                                h1: (props: any) => (
                                    <h1 className="text-3xl font-bold my-5 font-titleFont"
                                        {}
                                    />
                                )
                             }}
                        />

                      
                    </div>
                </article>
            </section>
            <Footer />
        </>
    )
}

export default PostPage;

export const getStaticPaths = async () => {
    const query = `*[_type == "post"]{
        _id,
        slug{
            current
        }
    }`;
    const posts = await sanityClient.fetch(query);
    const paths = posts.map((post: Post) => ({
        params: {
            slug: post.slug.current
        }
    }));
    return {
        paths,
        fallback: "blocking"
    }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const query = `*[_type == "post" && slug.current == $slug][0]{
        _id,
        publishedAt,
        title,
        author -> {
            name,
            image
        },
        description,
        mainImage,
        slug,
        body
    }`;

    const post = await sanityClient.fetch(query, {
        slug: params?.slug,
    });

    if (!post) {
        return {
            notFound: true
        }
    }
    return {
        props: {
            post
        },
        revalidate: 60
    }
};
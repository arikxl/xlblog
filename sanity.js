import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

export const config = {
    projectId, dataset, apiVersion,
    useCdn: true,
};

export const sanityClient = createClient(config);
export const urlFor = (src) => createImageUrlBuilder(config).image(src);
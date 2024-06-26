'use server';
import {createClient, groq} from 'next-sanity';
import {Project} from '@/types/Project';
import {BlogPost} from '@/typings';
import clientConfig from '../config/client-config';



export async function getProjects(): Promise<Project[]>{
    
    console.log('fetching projects data');

    const data = createClient(clientConfig).fetch(
      groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        'slug': slug.current,
        'image': image.asset->url,
        url,
        content

      }`,
      {cache: 'no-store'},
      {cache: 'no-store'},  
    )

    return data;
 }

 export async function getProject(slug: string): Promise<Project> {
  
  console.log(`fetching project ${slug} data`);

  const data = createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      'slug': slug.current,
      'image': image.asset->url,
      url,
      content
    }`, 
    { slug },
    {cache: 'no-store'},
  )

  return data;
}

export async function getBlogPosts(): Promise<BlogPost[]>{
  console.log('fetching blog data');

  const data = createClient(clientConfig).fetch(
    groq`*[_type=='blogPost']{
      ...,
      author->,
      categories[]->,
      "mainImage": mainImage.asset-> url,
      'slug': slug.current,
      title,
      description,
    }`,
    {},
    {cache: 'no-store'},
  );

  return data;
}

export async function getPost(slug: string): Promise<BlogPost> {
  
  console.log(`fetching post ${slug} data`);

  const data = createClient(clientConfig).fetch(
    groq`*[_type == "blogPost" && slug.current == $slug][0]{
      ...,
      author->,
      categories[]->,
      "mainImage": mainImage.asset-> url,
      'slug': slug.current,
      title,
      description,
    }`, 
    { slug },
    {cache: 'no-store'},
  )

  return data;
}

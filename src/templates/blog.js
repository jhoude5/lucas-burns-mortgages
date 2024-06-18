import React, { Component } from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import Newsletter from '../components/newsletter.js';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';



const BlogTemplate = () => {
    
    const blogdata = useStaticQuery(graphql`
    query blogQuery {
      allContentfulBlogs {
          nodes {
            path
            mainImage {
              gatsbyImageData
            }
            blogTitle
            blogInfo {
              raw
              references {
                file {
                    url
                }
                
              }
            }
            date
            shortDescription {
              raw
            }
          }
        }
  }
  `);
    const blogsdata = blogdata.allContentfulBlogs.nodes[0];
    const { blogTitle, blogInfo, mainImage } = blogsdata;

    
    const options = {
        
        renderMark: {
          [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
        },
        renderNode: {
            "embedded-asset-block": node => {
                const { gatsbyImageData } = node.data.target
                if (!gatsbyImageData) {
                // asset is not an image
                return null
                }
                return <GatsbyImage image={gatsbyImageData} />
            },
            
            [INLINES.HYPERLINK]: (node, children) => {
                const { uri } = node.data
                return (
                <a href={uri} className="underline">
                    {children}
                </a>
                )
            },
            
            [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
            [BLOCKS.EMBEDDED_ASSET]: node => {
                console.log(node);
                const image = getImage(node.data.target)
                return <GatsbyImage image={image} alt='' />
                },
        
        }
        
    }

  return (
    <div>
        <main>
        <Header />
        <section className='blogs-template'>
            <div className='container'>
                <h2>{ blogTitle }</h2>
                <GatsbyImage image={getImage(mainImage)} alt={''} />
                <div className="description">{renderRichText(blogInfo, options)}</div>
            </div>
        </section>
        <section className="subscribe">
            <Newsletter />
        </section>
        </main>
        <Footer />
    </div>
      
      
    
  );
};


export default BlogTemplate;


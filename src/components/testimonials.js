import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';

const Testimonials = ({data}) => {
   
//     console.log(data);
//   const teamDataNodes = data.allContentfulBlogs.blogTitle;


    return (

        <div className="container">
        <div className="row">
            <h2>Testimonials</h2>
         
        </div>
      </div>
    );
};

// const data = graphql`
//     query BlogQuery {
//         allContentfulBlogs {
//             node {
//                 id
//                 blogTitle
//                 mainImage {
//                   gatsbyImageData
//                   url
//                 }
//                 blogInfo {
//                   raw
//                 }
//               }
        
        
//         }
//     }
//   `;
export default Testimonials;


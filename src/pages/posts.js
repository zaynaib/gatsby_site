import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import {usePosts} from "../hooks/usePosts"

export default function Posts({ data }) {
    console.log(data);
    const metaData = data.allDevArticles.edges.map(post => ({
      id: post.node.article.id,
      url: post.node.article.url,
      title: post.node.article.title,
      date: post.node.article.published_at,
      desc: post.node.article.description,
  }))
  console.log(metaData)
  return (
    <Layout>
      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>
      <ul>
        {
          metaData.map((value,index) => {
            return <li key={index}><a href={value.url}>{value.title}</a></li>
          })

        }
      
      </ul>
    </Layout>
  )
}

export const query = graphql`
{
    allDevArticles {
      edges {
        node {
          article {
            id
            url
            title
            published_at(formatString: "MM-DD-YYYY")
            description
          }
        }
      }
    }
  }
`


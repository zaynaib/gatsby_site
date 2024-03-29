import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

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
        My Latest Articles on Dev.to
      </p>
      <hr></hr>
      <ul style={{ listStyle: `none`} }>
        {
          metaData.map((value,index) => {
            return (<li key={index}><a href={value.url}>
              <div>
              <p>{value.date}<br></br>
              {value.title}<br></br>
              </p>
              </div>
              
              </a></li>)
          })

        }
      
      </ul>
    </Layout>
  )
}

export const query = graphql
`query {
    allDevArticles{
      edges {
        node {
          article {
            url
            id
            title
            published_at(formatString: "MM-DD-YYYY")
            description
          }
        }
      }
    }
  }
`


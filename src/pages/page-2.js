import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

export default ({data}) => {
  // console.log(data);
  return (
    <Layout>
      <h1>second page</h1>
      <div>
      {data.gcms.podcasts.map((podcast, index) => (
        <React.Fragment key={index}>
          <h4>{podcast.title}</h4>
          <p>{podcast.description}</p>
        </React.Fragment>
        ))}
      </div>
    </Layout>
  )
}


export const query = graphql `
  query {
    gcms {
      podcasts {
        title,
        description
      }
    }
  }

`

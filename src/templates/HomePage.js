import React from 'react'
import { graphql, Link } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import Image from '../components/Image'
import '../components/PostSection.css'
import './PostCard.css'


// Export Template for use in CMS preview
export const HomePageTemplate = ({ title, subtitle, featuredImage, body, button }) => (
  <main className="Home">
    <PageHeader
      large
      title={title}
      subtitle={subtitle}
      button={button}
    />

    {/* <section className="section">
      <div className="container">
        <Content source={body} />
      </div>
    </section> */}
    <section className="section">
      <div className="container">
        <h2>Services</h2>
        <div className="PostSection">
          <div className="PostSection--Grid">
            <Link to='#' className={`PostCard`}>
              <div className="PostCard--Image relative">
                <Image background src={featuredImage} />
              </div>

              <div className="PostCard--Content">
                <h3 className="PostCard--Title">Personal Website + Blog</h3>
                {/* <div className="PostCard--Category">
            Custom website development
          </div> */}
                <div className="PostCard--Excerpt">A full package including Personal Website + Blog + Newsletter setup</div>
              </div>
            </Link>
            <Link to='#' className={`PostCard`}>
              <div className="PostCard--Image relative">
                <Image background src={featuredImage} />
              </div>

              <div className="PostCard--Content">
                <h3 className="PostCard--Title">Web Development</h3>
                {/* <div className="PostCard--Category">
            Custom website development
          </div> */}
                <div className="PostCard--Excerpt">Custom web application according to your requirements</div>
              </div>
            </Link>
            <Link to='#' className={`PostCard`}>
              <div className="PostCard--Image relative">
                <Image background src={featuredImage} />
              </div>

              <div className="PostCard--Content">
                <h3 className="PostCard--Title">Mobile App Development</h3>
                {/* <div className="PostCard--Category">
            Custom website development
          </div> */}
                <div className="PostCard--Excerpt">Custom mobile application according to your requirements</div>
              </div>
            </Link>
            <Link to='#' className={`PostCard`}>
              <div className="PostCard--Image relative">
                <Image background src={featuredImage} />
              </div>

              <div className="PostCard--Content">
                <h3 className="PostCard--Title">E-Commerce</h3>
                {/* <div className="PostCard--Category">
                  Custom website development
          </div> */}
                <div className="PostCard--Excerpt">Complete e-commerce setup</div>
              </div>
            </Link>

            <Link to='#' className={`PostCard`}>
              <div className="PostCard--Image relative">
                <Image background src={featuredImage} />
              </div>

              <div className="PostCard--Content">
                <h3 className="PostCard--Title">Custom Development</h3>
                {/* <div className="PostCard--Category">
                  Custom website development
          </div> */}
                <div className="PostCard--Excerpt">Fix an existing app or develop from scratch</div>
              </div>
            </Link>

            <Link to='#' className={`PostCard`}>
              <div className="PostCard--Image relative">
                <Image background src={featuredImage} />
              </div>

              <div className="PostCard--Content">
                <h3 className="PostCard--Title">Custom Integration</h3>
                {/* <div className="PostCard--Category">
                  Custom website development
          </div> */}
                <div className="PostCard--Excerpt">Integrate custom software into an existing app</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
      }
    }
  }
`

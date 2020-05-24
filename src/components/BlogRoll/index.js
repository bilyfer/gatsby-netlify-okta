import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import Tabs from '../Tabs/index'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <>
        <Tabs />
        <div id="tabbed-contet">
          <article id="news-tab" className="tabbed-page active">
            <h3 className="entry-title">
              <span className="hidden">UMG</span>
            </h3>
            <div id="newstab-display">
              <nav className="news-items news-display border-grid">
                {posts &&
                  posts.map(({ node: post }, index) => {
                    let altClassName = ''

                    if (index % 4 === 0 || (index - 1) % 4 === 0) {
                      altClassName = 'alt'
                    }

                    return (<div key={post.id}>
                      <Link className={altClassName} to={post.frontmatter.path}>
                        <h4>{post.frontmatter.title}</h4>
                        <span className="dashicons-before dashicons-calendar">
                          {post.frontmatter.date}
                        </span>
                      </Link>
                    </div>)
                })}
              </nav>
            </div>
          </article>
        </div>
      </>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              frontmatter {
                path
                title
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)

const createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      blog: allMdx(filter: { fileAbsolutePath: { regex: "//posts//" } }) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("failed to create posts", result.errors)
  }

  const posts = result.data.blog.nodes

  posts.forEach((post) => {
    actions.createPage({
      path: `blog/${post.frontmatter.slug}`,
      component: require.resolve("./src/templates/post.js"),
      context: {
        slug: post.frontmatter.slug,
      },
    })
  })
}

module.exports = {
  createPages,
  onCreateNode,
}

import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const IndexPage=()=>{
  return(
    <main>
      <Link to="/about">About</Link>
<Layout pageTitle="HomePage">

<p>
  We are here to serve your better with quality news about technology
</p>
</Layout>
    </main>
  )
}
export const Head=()=><title>Home Page</title>
export default IndexPage
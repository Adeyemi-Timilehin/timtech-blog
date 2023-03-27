import * as React from 'react'

import Layout from '../components/layout'


const AboutPage =()=>{
    return(
        <main>
          

            <Layout pageTitle="About me">
            <p>I'm love to write and share news on aleast technology</p>
            </Layout>
            
        </main>
    )
}
export const Head = () =>
<>
<title>About Me</title>
<meta name="description" content="Your description" />
</>


export default AboutPage;
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>APP</p>
        <p>
          Baterías:{' '}
          <a href='./music'>Music APP</a>.
          Quote Machine: {' '}
          <a href='./quotes'> Quote APP</a>
          )
        </p>
      </section>
    </Layout>
  )
}
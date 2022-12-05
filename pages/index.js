import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Features from './features'
import Script from 'next/script'
import Navbar from './Navbar'
import IframeResizer from 'iframe-resizer-react'
import Contact from './contact'
import Section from './section'
import CTA from './CTA'
import Footer from './footer'


export default function Home() {
  return (
    <div className={styles.container}>

<Contact />
<Features />
<Section />
<IframeResizer src="https://embed.testimonial.to/w/mattherzog-testimonials?theme=light&card=base&showSearch=on&randomize=on&hideDate=on"  style={{ width: "1px", minWidth: "100%"}} />
<CTA />


      <footer className={styles.footer}>
        <a
          href="https://mattherzog.me/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' Matt Herzog '} 
          <span className={styles.logo}>
          </span>
        </a>
      </footer>
    </div>
  )

}


import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HomepageContent from './markdown-page.md';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: '1.5rem',
          flexWrap: 'wrap'
        }}>
          <img
            src={require('@site/static/img/logo.jpg').default}
            alt="Anna Sasaki"
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              border: '4px solid var(--ifm-color-emphasis-300)'
            }}
          />
          <div style={{ textAlign: 'left' }}>
            <Heading as="h1" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
              Anna Sasaki
            </Heading>
            <p style={{ fontSize: '1.1rem', margin: 0, opacity: 0.8 }}>
              Children's Literature and Translation
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title={`Hello from Anna`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <div className="container padding-vert--lg">
          <HomepageContent />
        </div>
      </main>
    </Layout>
  );
}

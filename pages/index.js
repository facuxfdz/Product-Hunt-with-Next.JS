import styles from '../styles/Home.module.css'
import styled from '@emotion/styled'

const Head = styled.h1`
  color: red;
`
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>Index</Head>
    </div>
  )
}

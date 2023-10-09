import { Title } from '@mantine/core'
import Image from 'next/image'
import { Container } from '@mantine/core'
import { HeaderSimple } from '../../components/HeaderSimple/HeaderSimple'
import { HeroBullets } from '../../components/HeroBullets/HeroBullets'
export default function Home() {
  return (
    <>
      <HeaderSimple />
      <Container size="md">
        <HeroBullets />
      </Container>
    </>
  )
}

import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <ul>
        <li><Link href="/products">produtos</Link></li>
        <li><Link href="/about">sobre</Link></li>
      </ul>
      <h1>hello next</h1>
    </div>
  )
}

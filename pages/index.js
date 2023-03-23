export async function getServerSideProps({ query }) {
  console.log({ query })
  return { props: { slug: query.slug } }
}

function HomePage() {
  return <div>Welcome to Next.js!</div>
}

export default HomePage

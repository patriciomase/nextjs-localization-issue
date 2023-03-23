export async function getServerSideProps({ query }) {
  return { props: { slug: query.slug } }
}

function Page({ slug }) {
  return <h1>I DO NOT WORK! {slug}</h1>
}

export default Page

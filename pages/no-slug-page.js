export async function getServerSideProps({ query }) {
  console.log({ query })
  return { props: {} }
}

function NoSlug() {
  return <div>This is a page!</div>
}

export default NoSlug

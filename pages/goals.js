import Head from "next/head"
import Goal from "../components/Goal"
import Container from "../components/Container"
import { getGoals } from "../utils/contentful-graphql"

export const getStaticProps = async () => {
  const data = await getGoals()
  return {
    props: {
      goals: data.goalsCollection.items
    }
  }
}

export default function Goals({goals}) {
  return (
    <Container>
      <Head>
        <title>Goals - Dainyl Cua</title>
      </Head>
      <div className="flex flex-col">
        <div className="flex">
          <div className="text-5xl lg:text-7xl dark:text-rose-200">
            Goal
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          {
            goals.map((goal) => (
              <Goal key={goal.goal} goal={goal} />
            ))
          }
        </div>
      </div>
    </Container>
  )
}

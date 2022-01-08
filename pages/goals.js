import Head from "next/head"
import Goal from "../components/Goal"
import Container from "../components/Container"
import { getGoals } from "../utils/contentful-graphql"
import Header from "../components/Header"

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
        <Header>
          Goals
        </Header>
        <div className="pb-4">Below are my goals for 2022 and onwards - what are you working towards?</div>
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

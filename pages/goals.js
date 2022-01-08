import Head from "next/head"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
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
          <div>
            Goal
          </div>
          <div>
            Completion Date
          </div>
        </div>
        {
          goals.map((goal) => (
          <div key={goal.goal} className="flex">
            <div>
              {goal.goal}
            </div>
            <div>
              {
                goal.completionStatus.completed ?
                goal.completionStatus.completionDate
                :
                ''
              }
            </div>
          </div>
          ))
        }
      </div>
    </Container>
  )
}

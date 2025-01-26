import type { NextPage } from "next"
import { useQuery } from "@apollo/client"
import GET_ACTIVE_ITEMS from "@/constants/subgraphQueries"

const GraphExample: NextPage = () => {
    const { loading, error: subgraphQueryError, data } = useQuery(GET_ACTIVE_ITEMS)
    console.log(data)
    return <div>Hi :) </div>
}
export default GraphExample
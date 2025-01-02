import { calculateInvestmentResults } from "../util/investment"

export default function({ input }) {
    const resultsData = calculateInvestmentResults(input);

    console.log(resultsData);

    return <p>Results...</p>
}
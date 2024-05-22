import { calculateInvestmentResults, formatter } from '../util/investment';

export default function Results({ userInput }) {
  const data = calculateInvestmentResults(userInput);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data.map((el) => {
          const totalInterest =
            el.valueEndOfYear -
            el.annualInvestment * el.year -
            userInput.initialInvestment;
          const investedCapital =
            userInput.initialInvestment + el.annualInvestment * el.year;

          return (
            <tr key={el.year}>
              <td>{el.year}</td>
              <td>{formatter.format(el.valueEndOfYear)}</td>
              <td>{formatter.format(el.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

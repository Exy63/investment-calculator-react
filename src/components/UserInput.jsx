export default function UserInput({ userInput, handleChangeInput }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment(in $)</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              handleChangeInput('initialInvestment', event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Investmen(in $)</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              handleChangeInput('annualInvestment', event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return (In %)</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              handleChangeInput('expectedReturn', event.target.value)
            }
          />
        </p>
        <p>
          <label>Duration (in years)</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) =>
              handleChangeInput('duration', event.target.value)
            }
          />
        </p>
      </div>
    </div>
  );
}

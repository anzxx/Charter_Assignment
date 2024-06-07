import React, { useEffect, useState } from "react";
import { fetchUserRecords } from "./services/userRecords";
import { aggregateRewards } from "./utils/rewards";
import "./App.css";
const App = () => {
  const [rewards, setRewards] = useState(null);
  useEffect(() => {
    const getTransactions = async () => {
      const transactions = await fetchUserRecords();
      const rewardsData = aggregateRewards(transactions);
      setRewards(rewardsData);
    };
    getTransactions();
  }, []);
  if (!rewards) {
    return <div>Loading...</div>;
  }
  const getMonthName = (monthNumber) => {
    return new Date(null, monthNumber - 1).toLocaleDateString("en", {
      month: "long",
    });
  };
  return (
    <div>
      <h1>Customer Rewards</h1>
      {Object.keys(rewards).map((customer) => (
        <div key={customer} className="customer">
          <h2>{customer}</h2> <p>Total Points: {rewards[customer].total}</p>{" "}
          <h3>Monthly Points</h3>
          <ul>
            {Object.keys(rewards[customer].monthly).map((month) => (
              <li key={month}>
                {getMonthName(parseInt(month))}:
                {rewards[customer].monthly[month]} points
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
export default App;

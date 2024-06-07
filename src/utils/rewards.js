export const calculateRewardPoints = (amount) => {
  let points = 0;
  if (amount > 100) {
    points += (amount - 100) * 2;
    amount = 100;
  }
  if (amount > 50) {
    points += (amount - 50) * 1;
  }
  return points;
};
export const aggregateRewards = (transactions) => {
  return transactions.reduce((rewards, { customer, date, amount }) => {
    const month = new Date(date).getMonth() + 1;
    const points = calculateRewardPoints(amount);
    rewards[customer] = rewards[customer] || { total: 0, monthly: {} };
    rewards[customer].total += points;
    rewards[customer].monthly[month] =
      (rewards[customer].monthly[month] || 0) + points;
    return rewards;
  }, {});
};

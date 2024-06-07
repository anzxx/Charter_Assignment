export const fetchUserRecords = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { customer: "ABC", date: "2024-04-08", amount: 210 },
        { customer: "ABC", date: "2024-04-17", amount: 83 },
        { customer: "PQR", date: "2024-05-10", amount: 140 },
        { customer: "ABC", date: "2024-05-23", amount: 400 },
        { customer: "PQR", date: "2024-06-30", amount: 140 },
        { customer: "ABC", date: "2024-01-07", amount: 80 },
      ]);
    }, 1000);
  });
};

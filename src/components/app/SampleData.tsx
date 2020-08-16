export const TestData = [
  {
    monthId: 1,
    monthName: "January",
    year: 2020,
    begBalance: 4000,
    endBalance: 2900,
    budget: [
      {
        monthExpenses: {
          housingExpense: [{ title: "Rent", amount: 1800, monthIN: 1 }],
          groceryExpense: [
            { title: "King Soopers", amount: 500, monthIN: 1 },
            { title: "Costco", amount: 400, monthIN: 1 },
          ],

          discretionaryExpense: [{ title: "Amazon", amount: 200, monthIN: 1 }],

          retirementSavings: [{ title: "Roth", amount: 100, monthIN: 1 }],

          collegeSavings: [{ title: "529", amount: 100, monthIN: 1 }],

          otherExpense: [
            { title: "Extra Mortgage Payment", amount: 100, monthIN: 1 },
          ],
        },
        monthContributions: [
          { title: "Side gig", amount: 100, monthIN: 1 },
          { title: "Payroll", amount: 2000, monthIN: 1 },
        ],
      },
    ],
    actual: [
      {
        monthExpenses: {
          housingExpense: [{ title: "Rent", amount: 1800, monthIN: 1 }],

          groceryExpense: [
            { title: "King Soopers", amount: 500, monthIN: 1 },
            { title: "Costco", amount: 400, monthIN: 1 },
          ],

          discretionaryExpense: [{ title: "Amazon", amount: 200, monthIN: 1 }],

          retirementSavings: [{ title: "Roth", amount: 100, monthIN: 1 }],

          collegeSavings: [{ title: "529", amount: 100, monthIN: 1 }],

          otherExpense: [
            { title: "Extra Mortgage Payment", amount: 100, monthIN: 1 },
          ],
        },

        monthContributions: [
          { title: "Side gig", amount: 52, monthIN: 1 },
          { title: "Payroll", amount: 2003, monthIN: 1 },
        ],
      },
    ],
  },
  // {
  //   monthId: 2,
  //   monthName: "February",
  //   year: 2020,
  //   begBalance: 4000,
  //   endBalance: 2900,
  //   budget: [
  //     {
  //       monthExpenses: [
  //         {
  //           housingExpense: [{ title: "Rent", amount: 1800, monthIN: 1 }],
  //         },
  //         {
  //           groceryExpense: [
  //             { title: "King Soopers", amount: 500, monthIN: 1 },
  //             { title: "Costco", amount: 400, monthIN: 1 },
  //           ],
  //         },
  //         {
  //           discretionaryExpense: [
  //             { title: "Amazon", amount: 200, monthIN: 1 },
  //           ],
  //         },
  //         {
  //           retirementSavings: [{ title: "Roth", amount: 100, monthIN: 1 }],
  //         },
  //         {
  //           collegeSavings: [{ title: "529", amount: 100, monthIN: 1 }],
  //         },
  //         {
  //           otherExpense: [
  //             { title: "Extra Mortgage Payment", amount: 100, monthIN: 1 },
  //           ],
  //         },
  //       ],
  //       monthContributions: [
  //         { title: "Side gig", amount: 100, monthIN: 1 },
  //         { title: "Payroll", amount: 2000, monthIN: 1 },
  //       ],
  //     },
  //   ],
  //   actual: [
  //     {
  //       monthExpenses: [
  //         {
  //           housingExpense: [{ title: "Rent", amount: 1800, monthIN: 1 }],
  //         },
  //         {
  //           groceryExpense: [
  //             { title: "King Soopers", amount: 500, monthIN: 1 },
  //             { title: "Costco", amount: 400, monthIN: 1 },
  //           ],
  //         },
  //         {
  //           discretionaryExpense: [
  //             { title: "Amazon", amount: 200, monthIN: 1 },
  //           ],
  //         },
  //         {
  //           retirementSavings: [{ title: "Roth", amount: 100, monthIN: 1 }],
  //         },
  //         {
  //           collegeSavings: [{ title: "529", amount: 100, monthIN: 1 }],
  //         },
  //         {
  //           otherExpense: [
  //             { title: "Extra Mortgage Payment", amount: 100, monthIN: 1 },
  //           ],
  //         },
  //       ],
  //       monthContributions: [
  //         { title: "Side gig", amount: 75, monthIN: 1 },
  //         { title: "Payroll", amount: 2501, monthIN: 1 },
  //       ],
  //     },
  //   ],
  // },
];

export default TestData;

// export const TestData =
// [
//   {
//     monthId: 1,
//     monthName: "January",
//     year: 2020,
//     begBalance: 4000,
//     endBalance: 2900,
//     budget: [
//       {
//         monthExpenses: [
//           {
//             housingExpense: [{ title: "Rent", amount: 1800, monthIN: 1 }],
//           },
//           {
//             groceryExpense: [
//               { title: "King Soopers", amount: 500, monthIN: 1 },
//               { title: "Costco", amount: 400, monthIN: 1 },
//             ],
//           },
//           {
//             discretionaryExpense: [
//               { title: "Amazon", amount: 200, monthIN: 1 },
//             ],
//           },
//           {
//             retirementSavings: [{ title: "Roth", amount: 100, monthIN: 1 }],
//           },
//           {
//             collegeSavings: [{ title: "529", amount: 100, monthIN: 1 }],
//           },
//           {
//             otherExpense: [
//               { title: "Extra Mortgage Payment", amount: 100, monthIN: 1 },
//             ],
//           },
//         ],
//         monthContributions: [
//           { title: "Side gig", amount: 100, monthIN: 1 },
//           { title: "Payroll", amount: 2000, monthIN: 1 },
//         ],
//       },
//     ],
//     actual: [
//       {
//         monthExpenses: [
//           {
//             housingExpense: [{ title: "Rent", amount: 1800, monthIN: 1 }],
//           },
//           {
//             groceryExpense: [
//               { title: "King Soopers", amount: 500, monthIN: 1 },
//               { title: "Costco", amount: 400, monthIN: 1 },
//             ],
//           },
//           {
//             discretionaryExpense: [
//               { title: "Amazon", amount: 200, monthIN: 1 },
//             ],
//           },
//           {
//             retirementSavings: [{ title: "Roth", amount: 100, monthIN: 1 }],
//           },
//           {
//             collegeSavings: [{ title: "529", amount: 100, monthIN: 1 }],
//           },
//           {
//             otherExpense: [
//               { title: "Extra Mortgage Payment", amount: 100, monthIN: 1 },
//             ],
//           },
//         ],
//         monthContributions: [
//           { title: "Side gig", amount: 52, monthIN: 1 },
//           { title: "Payroll", amount: 2003, monthIN: 1 },
//         ],
//       },
//     ],
//   },
//   // {
//   //   monthId: 2,
//   //   monthName: "February",
//   //   year: 2020,
//   //   begBalance: 4000,
//   //   endBalance: 2900,
//   //   budget: [
//   //     {
//   //       monthExpenses: [
//   //         {
//   //           housingExpense: [{ title: "Rent", amount: 1800, monthIN: 1 }],
//   //         },
//   //         {
//   //           groceryExpense: [
//   //             { title: "King Soopers", amount: 500, monthIN: 1 },
//   //             { title: "Costco", amount: 400, monthIN: 1 },
//   //           ],
//   //         },
//   //         {
//   //           discretionaryExpense: [
//   //             { title: "Amazon", amount: 200, monthIN: 1 },
//   //           ],
//   //         },
//   //         {
//   //           retirementSavings: [{ title: "Roth", amount: 100, monthIN: 1 }],
//   //         },
//   //         {
//   //           collegeSavings: [{ title: "529", amount: 100, monthIN: 1 }],
//   //         },
//   //         {
//   //           otherExpense: [
//   //             { title: "Extra Mortgage Payment", amount: 100, monthIN: 1 },
//   //           ],
//   //         },
//   //       ],
//   //       monthContributions: [
//   //         { title: "Side gig", amount: 100, monthIN: 1 },
//   //         { title: "Payroll", amount: 2000, monthIN: 1 },
//   //       ],
//   //     },
//   //   ],
//   //   actual: [
//   //     {
//   //       monthExpenses: [
//   //         {
//   //           housingExpense: [{ title: "Rent", amount: 1800, monthIN: 1 }],
//   //         },
//   //         {
//   //           groceryExpense: [
//   //             { title: "King Soopers", amount: 500, monthIN: 1 },
//   //             { title: "Costco", amount: 400, monthIN: 1 },
//   //           ],
//   //         },
//   //         {
//   //           discretionaryExpense: [
//   //             { title: "Amazon", amount: 200, monthIN: 1 },
//   //           ],
//   //         },
//   //         {
//   //           retirementSavings: [{ title: "Roth", amount: 100, monthIN: 1 }],
//   //         },
//   //         {
//   //           collegeSavings: [{ title: "529", amount: 100, monthIN: 1 }],
//   //         },
//   //         {
//   //           otherExpense: [
//   //             { title: "Extra Mortgage Payment", amount: 100, monthIN: 1 },
//   //           ],
//   //         },
//   //       ],
//   //       monthContributions: [
//   //         { title: "Side gig", amount: 75, monthIN: 1 },
//   //         { title: "Payroll", amount: 2501, monthIN: 1 },
//   //       ],
//   //     },
//   //   ],
//   // },
// ];

// export default TestData;

// "use client";

// import React from 'react';
// import { Doughnut } from 'react-chartjs-2';

//  const data = {
//     labels: ['Red', 'Blue', 'Yellow'],
//     datasets: [
//         {
//             data: [300, 50, 100],
//             backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//             hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//         },
//     ],
// };


// const DoughnutChart = () => {
//     return(
//         <>
//              <Doughnut data={data} />
//         </>
//     );

       
//     }
    


// export default DoughnutChart;

// "use client";

// import React from 'react';
// import {Doughnut} from 'react-chartjs-2';

// const state = {
//   labels: ['January', 'February', 'March',
//            'April', 'May'],
//   datasets: [
//     {
//       label: 'Rainfall',
//       backgroundColor: [
//         '#B21F00',
//         '#C9DE00',
//         '#2FDE00',
//         '#00A6B4',
//         '#6800B4'
//       ],
//       hoverBackgroundColor: [
//       '#501800',
//       '#4B5000',
//       '#175000',
//       '#003350',
//       '#35014F'
//       ],
//       data: [65, 59, 80, 81, 56]
//     }
//   ]
// }

// export default class DoughnutChart extends React.Component {
//   render() {
//     return (
//       <div>
   
//         <Doughnut
//           data={state}
//           options={{
//             title:{
//               display:true,
//               text:'Average Rainfall per month',
//               fontSize:20
//             },
//             legend:{
//               display:true,
//               position:'right'
//             }
//           }}
//         />
//       </div>
//     );
//   }
// }


// components/MyLineChart.tsx
"use client";
 // Import the useClient directive
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   PointElement,
//   LineElement,
// } from "chart.js";
// import { Doughnut } from "react-chartjs-2";

// // Register ChartJS components using ChartJS.register
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Tooltip
// );

// // Wrap the component with useClient
// function MyLineChart() {
//   return (
//     <div>
//       <Doughnut
//         data={{
//           labels: [
//             "2023-01",
//             "2023-02",
//             "2023-03",
//             "2023-04",
//             "2023-05",
//             "2023-06",
//             "2023-07",
//           ],
//           datasets: [
//             {
//               data: [100, 120, 115, 134, 168, 132, 200],
//               backgroundColor: "purple",
//             },
//           ],
//         }}
//       />
//     </div>
//   );
// };



import React from "react";
import { Doughnut } from "react-chartjs-2";
import { ArcElement, CategoryScale, Chart, LineElement, LinearScale, PointElement, Tooltip } from 'chart.js';

// Register only the components you are using
Chart.register(
  ArcElement,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip
);
const DoughnutChart = () => {

  const data = {
    labels: ["Acquisition", "Rentention", "Purchase"],
    datasets: [
      {
        data: [200, 150, 50],
        backgroundColor: ["#5570F1", "#FFCC91", "#97A5EB"],
        hoverBackgroundColor: ["#5570F1", "#FFCC91", "#97A5EB"],
      },
    ],
  };

  return (
    <div>
       
      <Doughnut data={data} />
    </div>
  );
};

export default DoughnutChart;

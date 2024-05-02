import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function AreaGraph({ data }) {
  const chartRef = useRef();
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (chartInstance.current !== null) {
      chartInstance.current.destroy();
    }

    const labels = data.map((entry) => entry.time.split(" ")[1]);
    const temperatures = data.map((entry) => entry.temp_c);

    chartInstance.current = new Chart(ctx, {
      type: "line", // Use line chart type
      data: {
        labels: labels,
        datasets: [
          {
            label: "Temperature (°C)",
            data: temperatures,
            borderColor: "rgba(255, 99, 132, 1)",
            backgroundColor: "rgba(255, 99, 132, 0.5)", // Filled area color
            tension: 0.4,
            fill: true, // Fill area under the line
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: false,
            grid: {
              color: "rgba(0, 0, 0, 0.1)",
              borderColor: "rgba(0, 0, 0, 0.1)",
              borderWidth: 1,
            },
            ticks: {
              color: "rgba(0, 0, 0, 0.7)",
              font: {
                size: 12,
                weight: "bold",
              },
            },
          },
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: "rgba(0, 0, 0, 0.7)",
              font: {
                size: 12,
                weight: "bold",
              },
            },
          },
        },
        plugins: {
          legend: {
            labels: {
              color: "rgba(0, 0, 0, 0.7)",
              font: {
                size: 14,
                weight: "bold",
              },
            },
          },
        },
      },
    });

    return () => {
      if (chartInstance.current !== null) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef} style={{ borderRadius: "8px" }} />;
}

export default AreaGraph;

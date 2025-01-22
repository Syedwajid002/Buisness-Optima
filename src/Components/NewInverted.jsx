import React, { useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const InvertedChart = () => {
  useEffect(() => {
    // Create root element
    let root = am5.Root.new("chartdiv");

    // Set themes
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    let chart = root.container.children.push(
      am5percent.SlicedChart.new(root, {
        layout: root.verticalLayout,
      })
    );

    // Create series
    let series = chart.series.push(
      am5percent.FunnelSeries.new(root, {
        alignLabels: false,
        orientation: "vertical",
        valueField: "value",
        categoryField: "category",
      })
    );

    // Set data
    series.data.setAll([
      { value: 1000, category: "Inpipeline", fill: am5.color(0xff0000) }, // Blue
      { value: 800, category: "Follow  Up", fill: am5.color("#00ff00") }, // Orange
      { value: 600, category: "Schedule service", fill: am5.color(0x2ca02c) }, // Green
      { value: 400, category: "Conversation", fill: am5.color(0xd62728) }, // Red
      { value: 200, category: "Negotiations", fill: am5.color(0x9467bd) }, // Purple
      { value: 100, category: "Sales", fill: am5.color(0x8c564b) }, // Brown
    ]);

    //     series.set("fill", am5.color(0xff0000)); // set Series color to red
    // series2.set("fill", am5.color("#00ff00"));
    // Play initial series animation
    series.appear();

    // Create legend
    let legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50,
        marginTop: 15,
        marginBottom: 15,
      })
    );

    legend.data.setAll(series.dataItems);

    // Animate chart
    chart.appear(1000, 100);

    // Cleanup resources on component unmount
    return () => {
      root.dispose();
    };
  }, []);

  return <div id="chartdiv" style={{ width: "50%", height: "500px" }}></div>;
};

export default InvertedChart;

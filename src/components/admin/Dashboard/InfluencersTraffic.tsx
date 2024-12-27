import { FC } from "react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts";
import { Card, CardContent } from "@/components/UI/card";
import { ChartContainer } from "@/components/UI/chart";

const chartData = [
    { day: "Mon", count: 32 },
    { day: "Tue", count: 48 },
    { day: "Wed", count: 18 },
    { day: "Thu", count: 66 },
    { day: "Fri", count: 44 },
    { day: "Sat", count: 89 },
    { day: "Sun", count: 81 },
];

const chartConfig = {
    count: {
        label: "Daily Count",
        color: "hsl(44, 100%, 50%)", // Yellow color
    },
};

const VendorTraffic: FC = () => {
    return (
        <Card className="bg-neutral border-none flex flex-row lg:flex-nowrap items-center justify-between gap-4">
            <div className="w-[30%] lg:w-[30%] flex flex-col items-center text-center md:space-y-2 mt-5 md:mt-4">
                <h1 className="text-3xl lg:text-4xl font-bold text-white">201</h1>

                <p className=" mt-5 text-muted-foreground text-xs lg:text-sm whitespace-nowrap">New Visitors</p>
                <p className="lg:text-sm text-white text-xs  font-normal">(12-17 Dec)</p>
            </div>

            <div className="w-full md:w-[70%] border-none">
                <ChartContainer config={chartConfig}>
                    <BarChart
                        data={chartData}
                        width={300}
                        height={250}
                        className="mx-auto"
                    >
                        {/* X-Axis configuration */}
                        <XAxis
                            dataKey="day"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={10}
                        />
                        <YAxis hide />
                        
                        {/* Bar configuration */}
                        <Bar
                            dataKey="count"
                            fill={chartConfig.count.color}
                            radius={4} // Rounded corners
                            barSize={10} // Reduce bar width
                        >
                            {/* Add the count below each bar */}
                            <LabelList
                                dataKey="count"
                                position="bottom" // Place below X-Axis// Adjust spacing below weekday labels
                                className="text-white"
                            />
                        </Bar>
                    </BarChart>
                </ChartContainer>
            </div>
        </Card>
    );
};

export default VendorTraffic;

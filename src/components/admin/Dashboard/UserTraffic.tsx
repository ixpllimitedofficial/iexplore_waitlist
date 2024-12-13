
import React from "react";
import { Box, Card } from "@mui/material";
import { AreaChart, Area, Tooltip, ResponsiveContainer, defs } from "recharts";
import { DownloadIcon } from "@radix-ui/react-icons";
import { Divider } from '@mui/material';

// Define the type for the chart data
interface DataPoint {
    day: string;
    users: number;
    date: string;
}

// Dummy data for the chart
const data: DataPoint[] = [
    { day: "Sunday", users: 200, date: "Jan 28, 2024" },
    { day: "Monday", users: 300, date: "Jan 29, 2024" },
    { day: "Tuesday", users: 450, date: "Jan 30, 2024" },
    { day: "Wednesday", users: 400, date: "Jan 31, 2024" },
    { day: "Thursday", users: 350, date: "Feb 1, 2024" },
    { day: "Friday", users: 500, date: "Feb 2, 2024" },
    { day: "Saturday", users: 300, date: "Feb 3, 2024" },
];

// Custom Tooltip Renderer
const CustomTooltip: React.FC<{ active?: boolean; payload?: any[] }> = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const { users, date } = payload[0].payload as DataPoint;
        return (
            <div
                style={{
                    backgroundColor: "#fff",
                    color: "#000",
                    padding: "10px",
                    borderRadius: "5px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                }}
            >
                <p style={{ fontWeight: "bold", margin: 0 }}>{`${users} users`}</p>
                <p style={{ margin: 0, fontSize: "0.9rem" }}>{date}</p>
            </div>
        );
    }
    return null;
};

const Dashboard: React.FC = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", padding: 0, border: "none" }}>
            {/* Main Content */}
            <Box sx={{ display: "flex", justifyContent: "center", flex: 1, padding: 0, margin: 0, border: "none" }}>
                {/* Users Traffic Section */}
                <Card
                    sx={{
                        flex: 1,
                        maxWidth: 800,
                        padding: 1,
                        backgroundColor: "transparent",
                        color: "#fff",
                        border: "none",
                        boxShadow: "none",
                    }}
                >
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="font-bold text-base lg:text-lg">Vendors Traffic</h2>

                        <div className="flex gap-3 items-center">
                            <span className="bg-gold-500 px-2 py-1 lg:px-4 lg:p-2 rounded-full text-xs lg:text-base font-semibold text-black whitespace-nowrap">+13% from last week</span>
                            <span className="hidden lg:flex bg-gold-500 px-2 py-1 lg:px-4 lg:p-2 rounded-full text-xs lg:text-base font-semibold text-black whitespace-nowrap">+13% from last week</span>
                            <div className="flex items-center justify-center bg-gold-500 rounded-lg p-2 lg:p-3">
                                <DownloadIcon className="text-black text-base lg:text-xl font-semibold" />
                            </div>
                        </div>
                    </div>
                    <Divider sx={{ backgroundColor: '#4D4D4D', height: 2 }} />
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={data}>
                            <defs>
                                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#FEC107" stopOpacity={0.7} />
                                    <stop offset="100%" stopColor="#000" stopOpacity={0.1} />
                                </linearGradient>
                            </defs>
                            <Tooltip content={<CustomTooltip />} cursor={false} />
                            <Area
                                type="monotone"
                                dataKey="users"
                                stroke="#FEC107"
                                strokeWidth={3}
                                fill="url(#gradient)"
                                dot={{ r: 5, fill: "#FEC107", strokeWidth: 2 }}
                                activeDot={{ r: 8, fill: "#fff", stroke: "#FEC107", strokeWidth: 3 }}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </Card>
            </Box>
        </Box>
    );
};

export default Dashboard;

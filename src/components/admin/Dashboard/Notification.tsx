import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import { Button } from "@/components/UI/button";
import { Divider } from '@mui/material';

const notifications = [
  {
    title: "Club 727",
    date: "16 January, 2024",
    time: "5:00 PM",
    message: "New Vendor alert",
    avatar: "https://via.placeholder.com/40",
  },
  {
    title: "Club 727",
    date: "16 January, 2024",
    time: "5:00 PM",
    message: "New Vendor alert",
    avatar: "https://via.placeholder.com/40",
  },
  {
    title: "Club 727",
    date: "16 January, 2024",
    time: "5:00 PM",
    message: "New Vendor alert",
    avatar: "https://via.placeholder.com/40",
  },
];

const NotificationCard = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#23232325", // Adjust background color
        color: "#fff",
        borderRadius: 4,
        padding: 3,
        width: "100%", // Use full width to fit the grid
 
      }}
    >
      {/* Header */}
      <div className=''>
      <h2 className="flex justify-center text-center py-2 font-bold text-lg">Notifications</h2>
      <Divider sx={{ backgroundColor: '#4D4D4D', height: 2 }} />
      </div>
      {/* Notifications List */}
      {notifications.map((notif, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: 2,
            paddingBottom: 1,
            marginTop: 5
          }}
        >
          <Avatar
            src={notif.avatar}
            alt={notif.title}
            sx={{ width: 40, height: 40, marginRight: 2 }}
          />
          <Box>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              {notif.title}
            </Typography>
            <Typography variant="caption" color="gray">
              {notif.date} at {notif.time}
            </Typography>
            <Typography variant="body2">{notif.message}</Typography>
          </Box>
        </Box>
      ))}

      {/* Footer */}
      <Button className=" w-full rounded-full bg-gold-500 text-black hover:text-white flex justify-center items-center">
        See All
      </Button>
    </Box>
  );
};

export default NotificationCard;
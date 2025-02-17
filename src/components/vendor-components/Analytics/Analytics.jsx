"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import NewPieChart from "@/components/vendor-components/Charts/NewPieChart";
import NewBarChart from "@/components/vendor-components/Charts/NewBarChart";
import Store from "@/assets/svg/VendorSvg/store-04.svg";
import {
  getDrinksAnalytics,
  getSpotRatingAnalytics,
  getSpotTrafficAnalytics,
} from "@/app/vendorAction";
import { vendorStore } from "@/store/vendor";

const Analytics = ({ hasAnotherContainer }) => {
  const [drinksAnalytics, setDrinksAnalytics] = useState(null);
  const [spotsAnalytics, setSpotsAnalytics] = useState(null);
  const [trafficAnalytics, setTrafficAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = vendorStore((state) => state.token);

  useEffect(() => {
    const fetchDrinksAnalytics = async () => {
      try {
        const data = await getDrinksAnalytics(token.accessToken);
        console.log("response data:", data);
        setDrinksAnalytics(data.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchDrinksAnalytics();
  }, [token]);

  useEffect(() => {
    const fetchSpotsAnalytics = async () => {
      try {
        const data = await getSpotRatingAnalytics(token.accessToken);
        setSpotsAnalytics(data.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchSpotsAnalytics();
  }, [token]);

  useEffect(() => {
    const fetchSpotsTraffic = async () => {
      try {
        const data = await getSpotTrafficAnalytics(token.accessToken);
        setTrafficAnalytics(data.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchSpotsTraffic();
  }, [token]);
  console.log("spotsTraffic:", trafficAnalytics); //remove this line
  return (
    <div className="w-full h-full">
      <h1 className={`${styles.analysis_title} text-4xl`}>Analytics</h1>
      <div
        className={`grid gap-4 mt-3 mb-10 ${
          hasAnotherContainer
            ? "grid-cols-2 lg:grid-cols-2"
            : "grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {/* Spots Managed */}
        <div
          className={`${styles.analytic_wrapper} shadow-lg p-6 rounded-xl bg-[#4D4D4D66] col-span-1`}
        >
          <p className="my-3 mb-5 font-bold">Spots Managed</p>
          <span
            className={`${styles.borderRating} bg-gold-800 py-2 text-sm md:text-lg  md:px-4 rounded-full font-semibold`}
          >
            Rating: {spotsAnalytics?.average_rating}(
            {spotsAnalytics?.total_reviews})
          </span>
          <div className="mt-10 flex items-center gap-3 md:gap-5">
            <Image src={Store} alt="store icon" />
            <div className="text-center">
              <p className="text-4xl md:text-5xl">
                {spotsAnalytics?.total_spots}
              </p>
              <p className="mt-4 md:mt-2 md:text-2xl hidden md:block">
                Spots managed
              </p>
            </div>
          </div>
          <p className="md:mt-2 text-lg lg:hidden text-center">Spots managed</p>
        </div>

        {/* Drinks */}
        <div
          className={`${styles.analytic_wrapper} shadow-lg p-6 rounded-xl bg-[#4D4D4D66] col-span-1`}
        >
          <p className="my-3 mb-5 font-bold">Drinks</p>
          <span
            className={`${styles.borderStock} border-4 py-2 text-sm md:text-lg  md:px-4 rounded-full font-semibold`}
          >
            Out of stock - {drinksAnalytics?.out_of_stock_count}
          </span>
          <div className="mt-6 ml-0 pl-0">
            <NewPieChart />
          </div>
        </div>

        {/* Visitors Traffic */}
        {/* col-span-2 lg:col-span-1 */}
        <div
          className={`${styles.analytic_wrapper} shadow-lg p-6 rounded-xl bg-[#4D4D4D66] col-span-2 lg:col-span-1`}
        >
          <p className="my-3 mb-5 font-bold">Visitors Traffic</p>
          <span
            className={`${styles.borderTraffic} border-4 py-2 px-4 rounded-full font-semibold`}
          >
            +13 from last week
          </span>
          <div className="flex mt-6 items-center justify-center">
            <div className="flex-1 text-center">
              <h1 className="text-3xl mb-3">201</h1>
              <p className="text-sm">New Visitors</p>
              <p className={`${styles.date}`}>(12 - 17th Dec)</p>
            </div>
            <div className="flex-[2] items-start justify-center">
              <NewBarChart />
              <p className={`${styles.charts}`}>
                chart chart chart chart chart
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

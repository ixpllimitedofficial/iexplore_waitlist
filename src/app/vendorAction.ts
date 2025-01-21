import { z } from "zod";
import { apiGet, apiPost } from "@/utils/functions/appFunctions";
import { vendorStore } from "@/store/vendor";
import { persist } from "zustand/middleware";

//endpoints to use
//Retrieve analytics for the current vendor's spots, including average ratings, total reviews, and total spots created.
//GET /v1/vendor/spot-rating-analytics/
//Retrieve visitor traffic data for the vendor's spots aggregated by day, week, month, or year.
//GET /v1/vendor/spot-traffic-analytics/
//Track a view for a specific spot and send a notification to the vendor asynchronously.
//POST /v1/vendor/track-spot-view/
/**
 * Retrieve the total number of drink requests for claiming, total claimed requests
(accepted for claiming), and unclaimed drinks (pending, expired, or declined)
for the authenticated vendor.

 */
//GET /v1/vendor/drink-claims-analytics/

//Drinks Page
//Filter drinks by categories, volume, and other attributes for the authenticated vendor.
//GET /v1/vendor/filter-drinks/
//Retrieve a paginated list of all out-of-stock drinks for the authenticated vendor.
//GET /v1/vendor/out-of-stock-drinks/
//Search drinks by name, category, or keywords for the authenticated vendor.
//GET /v1/vendor/search-drinks/
//Drinks Claims
//Retrieve details of a drink claim by its code for the authenticated vendor.
//GET /v1/vendor/search-drink-claim/{code}/


//get drinks categories
//GET /v1/drink-categories/


//get sport and create spot working
//GET /v1/spots/
//POST /v1/spots/
//Get All spot Categories: /v1/spot-categories/
//Get All spot Feature: /v1/spot-features/
//GET All spot offer: /v1/spot-offers/

//Get vendor drinks claim data: Drinks claim Analytics: GET /v1/vendor/drink-claims-analytics/
//Get analytics for drinks including total drinks, drinks per category, and out-of-stock count.
//GET /v1/vendor/drinks-analytics/


interface Token {
  accessToken: string;
}
const BASE_URL = "https://ixpl-backend.vercel.app/api";
//create new drink
export async function createNewDrink(data: FormData, token: string): Promise<any> {
 
  try {
    const response = await fetch(`${BASE_URL}/v1/drinks/`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
       "Authorization": `Bearer ${token}`,
      },
      body: data,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error details:", errorText);
      throw new Error(`Error: ${response.status} - ${errorText || "Unknown error"}`);
    }
    const responseData = await response.json();
    console.log(`responseData`, responseData);
    return responseData;
  } catch (error: any) {
    console.error("Error fetching external data:", error.message);
    throw error;
  }

}

// Get drinks analytics
export async function getDrinksAnalytics(token: string): Promise<any> {
  try {
    const response = await fetch(`${BASE_URL}/v1/vendor/drinks-analytics/`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    console.log(`responseData`, responseData);
    return responseData;
  } catch (error: any) {
    console.error("Error fetching external data:", error.message);
    throw error;
  }
}
//get all drinks categories
export async function getDrinksCategories( token: string): Promise<any> {
  try{
    const response = await fetch(`${BASE_URL}/v1/drink-categories/`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    console.log(`responseData`, responseData);
    return responseData;
  }catch(error: any){
    console.error("Error fetching external data:", error.message);
    throw error;
  }
}

//Spots section
//get all spots
export async function getAllSpots(token: string): Promise<any> {
  try{
    const response = await fetch(`${BASE_URL}/v1/spots/`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    console.log(`responseData`, responseData);
    return responseData;
  }catch(error: any){
    console.error("Error fetching external data:", error.message);
    throw error;
  }
}
//get all spot categories
export async function getSpotCategories( token: string): Promise<any> {
  try{
    const response = await fetch(`${BASE_URL}/v1/spot-categories/`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    console.log(`responseData`, responseData);
    return responseData;
  }catch(error: any){
    console.error("Error fetching external data:", error.message);
    throw error;
  }
}
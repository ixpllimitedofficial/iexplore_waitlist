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
    console.log("createNewDrink response:", responseData);
    return responseData;
  } catch (error: any) {
    console.error("Error in createNewDrink:", error.message);
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
//get details of a particular drink category
export async function getDetailDrinkCategory(slug:string,  token: string): Promise<any> {
  try{
    const response = await fetch(`${BASE_URL}/v1/drinks/${slug}/`, {
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
//get all drinks
export async function getAllDrinks( token: string): Promise<any> {
  try{
    const response = await fetch(`${BASE_URL}/v1/drinks/`, {
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
//get single drink
export async function getSingleDrink(slug:string,  token: string): Promise<any> {
  try{
    const response = await fetch(`${BASE_URL}/v1/drinks/${slug}/`, {
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
//create spot
export async function createNewSpot(data: FormData, token: string): Promise<any> {
  try {
    console.log("Request URL:", `${BASE_URL}/v1/spots/`);
    console.log("Request Headers:", {
      "Accept": "application/json",
      "Authorization": `Bearer ${token}`,
    });
    console.log("Request Body:", data);
    const response = await fetch(`${BASE_URL}/v1/spots/`, {
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
    console.log("createNewSpot response:", responseData);
    return responseData;
  } catch (error: any) {
    console.error("Error in createNewSpot:", error.message);
    throw error;
  }
}
//create new spot media
export async function createNewSpotMedia(data: FormData, slug: string, token: string): Promise<any> {
  try {
    console.log("Request URL:", `${BASE_URL}/v1/spots/${slug}`);
    console.log("Request Headers:", {
      "Accept": "application/json",
      "Authorization": `Bearer ${token}`,
    });
    console.log("Request Body:", data);
    const response = await fetch(`${BASE_URL}/v1/spots/${slug}`, {
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
    console.log("createNewSpotMedia response:", responseData);
    return responseData;
  } catch (error: any) {
    console.error("Error in createNewSpotMedia:", error.message);
    throw error;
  }
}
//get sports rating analytics
export async function getSpotRatingAnalytics(token: string): Promise<any> {
  try{
    const response = await fetch(`${BASE_URL}/v1/vendor/spot-rating-analytics/`, {
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
//get visitor traffic data for the vendor's spots
export async function getSpotTrafficAnalytics(token: string): Promise<any> {
  try{
    const response = await fetch(`${BASE_URL}/v1/vendor/spot-traffic-analytics/`, {
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
//get single spot
export async function getSingleSpot(slug:string,  token: string): Promise<any> {
  try{
    const response = await fetch(`${BASE_URL}/v1/spots/${slug}/`, {
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
//get all spot features
export async function getSpotFeatures( token: string): Promise<any> {
  try{
    const response = await fetch(`${BASE_URL}/v1/spot-features/`, {
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
//get all spot offers
export async function getSpotOffers( token: string): Promise<any> {
  try{
    const response = await fetch(`${BASE_URL}/v1/spot-offers/`, {
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

//get all spot reviews
export async function getSpotReviews( token: string): Promise<any> {
  try{
    const response = await fetch(`${BASE_URL}/v1/reviews/`, {
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
export const apiGet = async (apiUrl: any) => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        `Failed to fetch data from external API: ${response.status}`
      );
    }

    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching external data:", error);
  }
};

export const apiPost = async (formData: any, apiUrl: any, funcType?: any) => {
  console.log(formData, apiUrl);
  let finalData;

  if (formData.extraUrl) {
    const { extraUrl, ...newData } = formData;
    finalData = newData;
  } else {
    finalData = formData;
  }

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(finalData),
    });
    const data = await response.json();

    console.log(data, "testing data");

    if (!response.ok) {
      throw new Error("Failed to fetch external data");
    }
    return data;
  } catch (error) {
    console.error("Error fetching external data:", error);
  }
};

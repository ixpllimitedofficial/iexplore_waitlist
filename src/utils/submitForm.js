// const submitForm = async (formData, apiUrl) => {
//   try {
//     const response = await fetch(apiUrl + "posts", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     });
//     return await response.json();
//   } catch (error) {
//     console.error("Error submitting form:", error);
//     throw new Error("Error submitting form");
//   }
// };

// export default submitForm;

const submitForm = async (formData, apiUrl) => {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error("Failed to fetch external data");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching external data:", error);
    //   NextResponse.json({ message: "Error fetching data" });
  }
};

export default submitForm;

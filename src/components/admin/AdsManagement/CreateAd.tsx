// CreateAd.jsx
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const CreateAd = () => {
    const router = useRouter()
    const [adName, setAdName] = useState("");
    const [adDescription, setAdDescription] = useState("");
    const [selectedPlan, setSelectedPlan] = useState(null);

    const plans = [
        { id: 1, type: "Basic", price: 5000, duration: "7 Days" },
        { id: 2, type: "Basic", price: 9000, duration: "14 Days" },
        { id: 3, type: "Premium", price: 15000, duration: "14 Days" },
        { id: 4, type: "Premium", price: 25000, duration: "30 Days" },
    ];

    const handlePlanSelect = (plan) => setSelectedPlan(plan);

    const handleSubmit = () => {
        if (!adName || !adDescription || !selectedPlan) {
            alert("Please fill all the details and select a plan.");
            return;
        }
        console.log("Ad submitted", { adName, adDescription, selectedPlan });
        // Navigate to Checkout (e.g., router.push("/checkout"))
    };
    const handleCheckOut = () => {
        router.push("ads-management/cheackout");
      };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <h1 className="text-3xl font-bold mb-4">Create ad</h1>
            <div className="mb-6">
                <p className="text-gray-300 mb-1">Ad details</p>
                <div className="w-full h-48 bg-[#33333399] flex items-center justify-center rounded mb-4">
                    <p>Upload photo</p>
                </div>
                <input
              
                    type="text"
                    placeholder="Ad nam"
                    value={adName}
                    onChange={(e) => setAdName(e.target.value)}
                    className="w-full bg-[#33333399] p-3 rounded text-white mb-4"
                />
                <textarea
                    placeholder="Ad description"
                    value={adDescription}
                    onChange={(e) => setAdDescription(e.target.value)}
                    className="w-full bg-[#33333399] p-3 rounded text-white mb-4"
                    rows="4"
                />
            </div>
            <h2 className="text-2xl font-bold mb-4">Choose plan</h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
                {plans.map((plan) => (
                    <button
                        key={plan.id}
                        className={`p-4 rounded bg-gray-800 hover:bg-gray-700 ${selectedPlan?.id === plan.id ? "border-yellow-400 border-2" : ""
                            }`}
                        onClick={() => handlePlanSelect(plan)}
                    >
                        <p className="text-lg font-bold">Price: ₦{plan.price.toLocaleString()}</p>
                        <p className="text-gray-400">{plan.duration}</p>
                    </button>
                ))}
            </div>
            <button
                onClick={handleSubmit}
                className="w-full bg-yellow-500 text-gray-900 font-bold py-3 rounded"
            >
                Proceed to checkout
            </button>
        </div>
    );
};

export default CreateAd;

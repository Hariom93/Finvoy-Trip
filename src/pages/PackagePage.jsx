import React from "react";
import { useParams, NavLink } from "react-router-dom";
import packages from "../Data/packagesData"; // ✅ DATA FILE SE IMPORT

export default function PackagePage() {
  const { id } = useParams();

  const selectedPackage = packages.find(
    (p) => p.id === parseInt(id)
  );

  if (!selectedPackage) {
    return <h2 className="text-center text-xl mt-10">Package Not Found</h2>;
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-3">
        {selectedPackage.name}
      </h1>

      <img
        src={selectedPackage.img}
        alt={selectedPackage.name}
        className="w-full h-60 object-cover rounded-lg mb-3"
      />

      <p className="text-lg font-semibold">
        Price: {selectedPackage.price}
      </p>

      <p className="text-md text-gray-600">
        Duration: {selectedPackage.duration}
      </p>

      <NavLink
        to="/"
        className="inline-block mt-4 text-blue-600 font-semibold"
      >
        ⬅ Back to Home
      </NavLink>
    </div>
  );
}

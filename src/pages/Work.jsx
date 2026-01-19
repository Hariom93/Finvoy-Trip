import React from "react";
import BackButton from "../components/BackButton";

const AboutUs = () => {
  return (
    <div className="bg-white">
      <BackButton/>
      {/* HERO SECTION */}
      <section
      
        className="relative h-[420px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center px-12">
          <div className="text-white max-w-xl">
            <p className="uppercase text-xs tracking-widest opacity-80">
              About
            </p>
            <h1 className="text-4xl font-bold my-3">About Us</h1>
            <p className="text-sm opacity-90 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ut tellus luctus nec ullamcorper mattis.
            </p>
          </div>

          {/* Play Button */}
          <div className="absolute right-16">
            <button className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg text-black text-lg">
              ▶
            </button>
          </div>
        </div>

        {/* Wave */}
        <svg
          className="absolute bottom-0 w-full"
          viewBox="0 0 1440 120"
        >
          <path
            fill="#ffffff"
            d="M0,80L120,74.7C240,69,480,59,720,64C960,69,1200,91,1320,101.3L1440,112L1440,0L0,0Z"
          />
        </svg>
      </section>

      {/* CONTENT SECTION */}
      <section className="max-w-7xl mx-auto px-10 py-20 grid grid-cols-1 md:grid-cols-2 gap-14">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-orange-500 text-sm font-semibold">
            TRAVELERS
          </p>
          <h2 className="text-3xl font-bold my-4">
            Why We Are Best?
          </h2>
          <p className="text-gray-600 mb-8 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ut tellus luctus nec ullamcorper mattis.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <span className="text-orange-500 text-xl">📍</span>
              <div>
                <h4 className="font-semibold">
                  Diverse Destinations
                </h4>
                <p className="text-gray-500 text-sm">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-orange-500 text-xl">⛰️</span>
              <div>
                <h4 className="font-semibold">
                  Adventure Time
                </h4>
                <p className="text-gray-500 text-sm">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1"
            alt="Travel"
            className="rounded-xl shadow-lg w-full"
          />
        </div>

      </section>
    </div>
  );
};

export default AboutUs;

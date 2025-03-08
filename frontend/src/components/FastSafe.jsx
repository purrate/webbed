import React from "react";
import { RocketIcon, ChevronRight } from "lucide-react";
import Shuttle from "../assets/Shuttle.svg";

export const FastSafe = () => {
  return (
    <div className="min-h-screen bg-white text-black w-screen">
      {/* Navigation */}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Ultimate flight experience in high-end tech.
            </h1>

            <div className="flex items-center space-x-4">
              <span className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                +
              </span>
              <span className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                +
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              With SPACED, you can get a sense of high-end fast & safe space
              travelling. Most of what space agencies consider to be long
              distance trips can be completed in one day. Consider how much time
              and money we were spending in the past to travel to another
              worlds.
            </p>
          </div>

          {/* Right Column - Space for Image */}
          <div className="h-[400px] md:h-[600px] rounded-lg flex items-center justify-center">
            <img src={Shuttle} alt="Shuttle"></img>
          </div>
        </div>

        {/* The Deal Section */}
        <div className="mt-20 md:mt-32">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">The Deal?</h2>
          <p className="text-lg leading-relaxed">
            From Earth to various places starting at{" "}
            <span className="text-red-600">$2199</span>. We get you anywhere and
            back <span className="text-green-500">safely</span> within solar
            system within <span className="text-red-600">1 day</span>. Pick your{" "}
            <span className="text-red-600">destination</span> now.
          </p>
        </div>
      </main>
    </div>
  );
};

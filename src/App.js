import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "./components/Loader";

export function App() {
  const API_URL = "https://randomuser.me/api/?page=1&results=1&seed=abc";
  const [profile, setProfile] = useState();
  const [isLoader, setLoader] = useState(true);

  const fetchUserData = async () => {
    const response = await axios.get(API_URL);
    setProfile(response.data.results[0]);
    setLoader(false);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <div className="flex h-screen items-center justify-center bg-[#153448]">
        {isLoader ? (
          <Loader />
        ) : (
          <div class="flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <div class="flex w-[28%] shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white   bg-clip-border p-4 text-gray-700">
              <img
                src={profile.picture.large}
                alt="image"
                class="w-full rounded-2xl bg-center object-cover"
              />
            </div>
            <div class="p-6">
              <h6 class="mb-1 block font-sans text-2xl font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                {profile.name.title} {profile.name.first} {profile.name.last}
              </h6>
              <h4 class="text-md text-blue-gray-900 block font-sans font-semibold uppercase leading-snug tracking-normal antialiased">
                {profile.gender}, {profile.dob.age} years old
              </h4>
              <p class="block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                <span className="font-semibold">Cell Phone</span>:{" "}
                {profile.cell}
              </p>
              <p class=" block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                <span className="font-semibold">From</span>:{" "}
                {profile.location.city} {profile.location.state},{" "}
                {profile.location.country}
              </p>
              <a
                class="mt-3 inline-block"
                target="_blank"
                href={`mailto:${profile.email}`}
              >
                <button
                  class="flex select-none items-center gap-2 rounded-lg bg-pink-500/10 px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/20 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Contact Me
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    class="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;

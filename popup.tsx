import React, { useState } from "react"

import "./style.css"

function IndexPopup() {
  const [isLoading, setLoading] = useState(false)
  const [country, setCountry] = useState("USA")
  const [city, setCity] = useState("New York")

  const getUserIP = async () => {
    setLoading(true)
    const IPResponse = await fetch("https://api.ipify.org?format=json")
    const IPdata = await IPResponse.json()
    const locationResponse = await fetch(
      `https://ipinfo.io/${IPdata?.ip}?token=${process.env.PLASMO_PUBLIC_ACCESS_TOKEN}`
    )
    const locationData = await locationResponse.json()
    setCity(locationData?.city)
    setCountry(locationData?.country)
    setLoading(false)
  }

  const handleClick = () => {
    getUserIP()
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[500px] h-[500px] bg-[#2980b9] justify-center rounded-lg flex flex-col items-center">
        <p className="text-3xl mb-6 text-center mx-[2rem] text-white text-bold">
          Your country is {country} and your city is {city}
        </p>
        <button
          onClick={handleClick}
          className={`p-4 text-2xl font-bold text-black rounded-lg bg-[#d1d8e0]`}>
          {isLoading ? "Loading..." : "Show my Location"}
        </button>
      </div>
    </div>
  )
}

export default IndexPopup

import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const countries = [
  {
    id: 1,
    nsme: "IRAN",
    img: "/images/Country/Iran.png",
    label: "فارسی",
  },
  {
    id: 2,
    nsme: "USA",
    img: "/images/Country/USA.png",
    label: "انگلیسی",
  },
  {
    id: 3,
    nsme: "EMIRATES",
    img: "/images/Country/Emirates.png",
    label: "عربی",
  },
];

function Country() {
  // state
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // handle
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setDropdownOpen(false);
  };

  return (
    <div className="w-20 flex items-center cursor-pointer">
      {/* show country selected */}
      <div className="  relative">
        <div
          className="p-2 flex flex-1 items-center flex-row-reverse "
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <img
            src={selectedCountry.img}
            alt={selectedCountry.label}
            className="w-12"
          />
          <span
            className={`${
              dropdownOpen ? "rotate-180 duration-200" : "rotate-0 duration-200"
            } text-3xl`}
          >
            <BiChevronDown />
          </span>
        </div>
        {dropdownOpen && (
          <CountryDropdown
            selectedCountry={selectedCountry}
            handleCountrySelect={handleCountrySelect}
          />
        )}
      </div>
    </div>
  );
}

export default Country;

function CountryDropdown({ selectedCountry, handleCountrySelect }) {
  return (
    // dropdown country contents
    <ul className="absolute -bottom-56 -left-4 w-40 h-52 bg-white rounded-3xl overflow-hidden">
      <div className="flex flex-col py-4">
        <span className="w-[120px] h-2 bg-gray-200 absolute top-0 left-5 rounded-b-full"></span>
        {countries.map((country) => (
          <li
            key={country.id}
            onClick={() => handleCountrySelect(country)}
            className="flex gap-2 bg-white py-3 px-4 cursor-pointer"
          >
            <div className="flex flex-1 items-center gap-2">
              <img src={country.img} alt={country.label} className="w-8" />
              <p className="font-bold">{country.label}</p>
            </div>

            <div className={`flex items-center justify-end`}>
              <span
                className={`${
                  selectedCountry.id === country.id && "bg-violet-500"
                } flex w-4 h-4 rounded-full bg-gray-300`}
              ></span>
            </div>
          </li>
        ))}
      </div>
    </ul>
  );
}

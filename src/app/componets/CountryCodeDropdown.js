import React, { useState } from "react";

const CountryCodeDropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const countries = [
    { code: "us", name: "United States", dialCode: "+1" },
    { code: "ca", name: "Canada", dialCode: "+1" },
    { code: "gb", name: "United Kingdom", dialCode: "+44" },
    { code: "de", name: "Germany", dialCode: "+49" },
    // Add more countries as needed
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <span>
          {selectedCountry ? (
            <>
              <img
                src={`https://flagpedia.net/data/flags/h80/${selectedCountry.code}.png`}
                alt={selectedCountry.name}
                style={{ width: "20px", marginRight: "8px" }}
              />
              {selectedCountry.dialCode} {selectedCountry.name}
            </>
          ) : (
            "Select Country"
          )}
        </span>
      </div>

      {isOpen && (
        <div className="dropdown-list">
          {countries.map((country) => (
            <div
              key={country.code}
              className="dropdown-item"
              onClick={() => handleCountrySelect(country)}
            >
              <img
                src={`https://flagpedia.net/data/flags/h80/${country.code}.png`}
                alt={country.name}
                style={{ width: "20px", marginRight: "8px" }}
              />
              {country.dialCode} {country.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CountryCodeDropdown;

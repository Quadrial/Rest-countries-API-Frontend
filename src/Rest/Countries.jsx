import React, { useState } from "react";
import ThemeToggle from "../DarkMode/ThemeToggle";
import data from "../data.json";

export const Countries = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("");
  const [expandedCountry, setExpandedCountry] = useState(null);

  const filteredCountries = data
    .filter((country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((country) => region === "" || country.region === region);

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
        <section className="container">
          <figure className="md:w-[100vw] lg:w-[100vw]">
            <div className="border border-solid p-5 lg:p-20 md:p-10 flex justify-between mx-auto">
              <div className="font-[600]">Where in the world?</div>
              <ThemeToggle />
            </div>

            <main className="container">
              <div className="mt-10 p-5 lg:p-20 md:p-10 flex flex-col md:flex-row lg:flex-row justify-between md:w-[100vw] lg:w-[100vw] mx-auto">
                <input
                  className="rounded-[10px] p-5 w-[300px] md:w-[300px] lg:w-[350px] h-[10px]"
                  placeholder="Search for a country"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div>
                  <select
                    className="rounded-[10px] mt-10 md:mt-0 lg:mt-0 w-[300px] h-[40px]"
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                  >
                    <option value="">Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                  </select>
                </div>
              </div>
            </main>

            {expandedCountry ? (
              <main className="flex flex-col gap-10 p-5 lg:p-20 md:p-10">
                <button
                  onClick={() => setExpandedCountry(null)}
                  className="w-[120px] mb-10 p-2 rounded dark:bg-gray-800 text-black dark:text-white"
                >
                  &larr; Back
                </button>
                <div className="flex flex-col md:flex-row gap-10">
                  <img
                    src={expandedCountry.flags.png}
                    alt={expandedCountry.name}
                    className="w-[150px] h-[100px]"
                  />
                  <div>
                    <h1 className="font-[600] text-[20px]">
                      {expandedCountry.name}
                    </h1>

                    <h2 className="flex items-center gap-2">
                      <span className="font-[600]">Population:</span>
                      <span>{expandedCountry.population}</span>
                    </h2>

                    <h2 className="flex items-center gap-2">
                      <span className="font-[600]">Region:</span>
                      <span>{expandedCountry.region}</span>
                    </h2>

                    <h2 className="flex items-center gap-2">
                      <span className="font-[600]">Capital:</span>
                      <span>{expandedCountry.capital}</span>
                    </h2>

                    <div className="mt-10">
                      <h2 className="flex items-center gap-2">
                        <span className="font-[600]">Top Level Domain:</span>
                        <span>{expandedCountry.topLevelDomain}</span>
                      </h2>

                      <h2 className="flex items-center gap-2">
                        <span className="font-[600]">Currencies:</span>
                        <span>
                          {expandedCountry.currencies.map((currency, index) => (
                            <span key={index}>{currency.name}</span>
                          ))}
                        </span>
                      </h2>

                      <h2 className="flex items-center gap-2">
                        <span className="font-[600]">Languages:</span>
                        <span>
                          {expandedCountry.languages.map((language, index) => (
                            <span key={index}>
                              {language.name}
                              {index < expandedCountry.languages.length - 1
                                ? ", "
                                : ""}
                            </span>
                          ))}
                        </span>
                      </h2>

                      <h2 className="flex items-center gap-2">
                        <span className="font-[600]">Alpha3Code:</span>
                        <span>{expandedCountry.alpha3Code}</span>
                      </h2>
                      {expandedCountry?.borders?.length > 0 ? (
                        <div className="flex items-center gap-2">
                          <span className="font-[600]">Border Countries:</span>
                          <div className="flex gap-2 flex-wrap">
                            {expandedCountry.borders.map((code) => {
                              const borderCountry = data.find(
                                (country) => country.alpha3Code === code
                              );

                              if (!borderCountry) return null;

                              return (
                                <button
                                  key={code}
                                  className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white py-1 px-3 rounded"
                                  onClick={() =>
                                    setExpandedCountry(borderCountry)
                                  }
                                >
                                  {borderCountry.name}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ) : (
                        <h2>No Border Countries</h2>
                      )}
                    </div>
                  </div>
                </div>
              </main>
            ) : (
              <main className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4 ml-5 lg:ml-20 md:ml-10 mr-5 md:mr-10 lg:mr-20 md:gap-[50px] lg:gap-[150px]">
                {filteredCountries.map((item, index) => (
                  <section
                    key={index}
                    className="border leading-10 w-[] h-auto rounded-[15px]"
                  >
                    <div
                      className="flex flex-col cursor-pointer"
                      onClick={() => setExpandedCountry(item)}
                    >
                      <img
                        src={item.flags.png}
                        alt={item.name}
                        className="w-full h-[150px] rounded-[10px]"
                      />
                      <div className="p-5">
                        <h1 className="font-[600] text-[20px]">{item.name}</h1>

                        <h2 className="flex items-center gap-2">
                          <span className="font-[600]">Population:</span>
                          <span>{item.population}</span>
                        </h2>

                        <h2 className="flex items-center gap-2">
                          <span className="font-[600]">Region:</span>
                          <span>{item.region}</span>
                        </h2>

                        <h2 className="flex items-center gap-2">
                          <span className="font-[600]">Capital:</span>
                          <span>{item.capital}</span>
                        </h2>
                      </div>
                    </div>
                  </section>
                ))}
              </main>
            )}
          </figure>
        </section>
      </div>
    </>
  );
};

export default Countries;

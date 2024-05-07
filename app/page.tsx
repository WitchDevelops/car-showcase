"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Hero, CustomFilter, SearchBar } from "@/components";
import { fetchCars } from "@/utils";
import { CarCard, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";

export default function Home() {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);

  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  const [limit, setLimit] = useState(10);

  const [year, setYear] = useState(2023);
  const [fuel, setFuel] = useState("");

  const handleFuelChange = (value: string | number) => {
    setFuel(typeof value === "string" ? value : String(value));
  };

  const handleYearChange = (value: string | number) => {
    setYear(typeof value === "number" ? value : Number(value));
  };

  const getCars = async (): Promise<void> => {
    setLoading(true);
    try {
      const result = await fetchCars({
        manufacturer: manufacturer || "",
        model: model || "",
        year: year || 2023,
        fuel: fuel || "",
        limit: limit || 10,
      });
      setAllCars(result);
    } catch (error: unknown) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(fuel, year, limit, manufacturer, model);
    getCars();
  }, [fuel, year, limit, manufacturer, model]);

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} />
          <div className="home__filter-container">
            <CustomFilter
              title="fuel"
              options={fuels}
              setFilter={handleFuelChange}
            />
            <CustomFilter
              title="year"
              options={yearsOfProduction}
              setFilter={handleYearChange}
            />
          </div>
        </div>

        {allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
            {loading && (
              <div className="mt-16 w-full flex-center">
                <Image
                  src="/loader.svg"
                  alt="loading"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
            )}
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          </div>
        )}
      </div>
      <ShowMore
        pageNumber={limit / 10}
        isNext={limit > allCars.length}
        setLimit={setLimit}
      />
    </main>
  );
}

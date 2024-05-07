"use client";

import React, { useState, Fragment } from "react";
import Image from "next/image";
import { SearchManufacturer, SearchButton } from "@/components";
import { Dialog, Transition } from "@headlessui/react";

interface SearchBarProps {
  setManufacturer: React.Dispatch<React.SetStateAction<string>>;
  setModel: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBar = ({ setManufacturer, setModel }: SearchBarProps) => {
  const [searchManufacturer, setSearchManufacturer] = useState("");
  const [searchModel, setSearchModel] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!searchManufacturer && !searchModel) {
      setIsModalOpen(true);
      return;
    }

    setModel(searchModel);
    setManufacturer(searchManufacturer);
  };

  return (
    <>
      <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
          <SearchManufacturer
            selected={searchManufacturer}
            setSelected={setSearchManufacturer}
          />
          <SearchButton otherClasses="sm:hidden" />
        </div>
        <div className="searchbar__item">
          <Image
            src="/model-icon.png"
            alt="car model"
            width={25}
            height={25}
            className="absolute w-[20px] h-[20px] ml-4"
          />
          <input
            type="text"
            name="search model"
            value={searchModel}
            onChange={(e) => setSearchModel(e.target.value)}
            placeholder="Polo"
            className="searchbar__input"
          />
          <SearchButton otherClasses="sm:hidden" />
        </div>
        <SearchButton otherClasses="max-sm:hidden" />
      </form>
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsModalOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Search Error
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      How can I search if you didn't tell me what for?
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => setIsModalOpen(false)}
                    >
                      Got it
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

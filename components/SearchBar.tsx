"use client";

import React, {useState} from 'react';
import { SearchManufacturer } from '@/components';

export const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('');
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('searching...');
    }
  return (
    <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer
                manufacturer={manufacturer}
                setManufacturer={setManufacturer}
                />
        </div>
    </form>
  )
}


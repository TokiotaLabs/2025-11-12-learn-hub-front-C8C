import React from 'react';

interface SearchBarProps {
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onChange }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="rounded-md bg-transparent border border-[#bcc1ca] flex mt-5 px-3 py-2 items-stretch gap-1.5 font-inter text-sm text-[#bcc1ca] leading-8">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/89fbf614689ca28ee8b1716348c140a3b56971ef82ef13c43a9b66fcc48d7526"
        className="aspect-square object-contain object-center w-4 mt-auto mb-auto flex-shrink-0"
        alt="Search Icon"
      />
      <input
        type="text"
        placeholder="Search for courses..."
        className="flex-grow flex-shrink basis-auto bg-transparent outline-none"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;

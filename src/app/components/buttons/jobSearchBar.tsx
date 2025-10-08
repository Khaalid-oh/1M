import { Search } from "lucide-react";
import { useState, useCallback, ChangeEvent, FormEvent } from "react";

interface JobSearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const JobSearchBar = ({
  onSearch,
  placeholder = "Job title or keyword...",
}: JobSearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const query = e.target.value;
      setSearchQuery(query);
      onSearch(query);
    },
    [onSearch]
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit} className="relative flex-1">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        className="block w-full pl-10 py-2.5 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
        placeholder={placeholder}
      />
      <button
        type="submit"
        className="absolute right-0 top-1/2 -translate-y-1/2 px-12 py-2.5 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-colors text-sm font-medium"
      >
        Search
      </button>
    </form>
  );
};

export default JobSearchBar;

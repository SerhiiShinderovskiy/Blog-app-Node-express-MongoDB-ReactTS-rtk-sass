import { FC, useState } from "react";
import "../styles/styles.scss";
import { fetchResults } from "../API/FetchResultSearch";
import { useNavigate } from "react-router-dom";

interface SearchBarProps {
    onClose: () => void;
    isSearchOpen: boolean;
}

const SearchBar: FC<SearchBarProps> = ({ isSearchOpen, onClose }) => {
    const [input, setInput] = useState<string>("");
    const navigate = useNavigate();

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;
        try {
            const results = await fetchResults(input);
            navigate("/posts/search", { state: { results }});
            onClose();
        } catch (error) {
            console.log("Search failed", error);
        }
    }

    return ( 
        <div className={`searchBar ${isSearchOpen ? 'open' : ''}`}>
            <div className="container">
                <form onSubmit={handleSearch} className="search-form" role="search">
                    <input 
                        type="search"
                        aria-label="Search"
                        id="searchInput"
                        name="searchTerm"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Search the site..."
                    />
                </form>
                <div id="searchClose" onClick={onClose}>Close</div>
            </div>
        </div>
    );
}
 
export default SearchBar;
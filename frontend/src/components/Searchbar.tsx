import { FaSearch } from "react-icons/fa"

interface SearchbarProps {
    search: string;
    setSearch: (value: string) => void;
  }

const Searchbar: React.FC<SearchbarProps> = ({ search, setSearch }) => {
  return (
    <div className="search-bar-container">
        <div className="searchicondiv"><FaSearch/></div>
        <form onSubmit={(e) => e.preventDefault()}>
            <input
            className="form-control"
             type="search"
             role="seachbox"
             placeholder="Seach Student by First Name"
             value={search}
             onChange={((e) => setSearch(e.target.value))}
            />
        </form>
    </div>
  )
}

export default Searchbar
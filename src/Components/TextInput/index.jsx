import './styles.css'
export const TextInput = ({ searchValue, handleChange }) => {
  return <input className="texto" onChange={handleChange} value={searchValue} type="search" />;
};

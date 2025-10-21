// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { searchData } from "../SearchData/data";
// import "./index.css";

// const Search = () => {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState([]);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const value = e.target.value.toLowerCase();
//     setQuery(value);

//     if (value === "") {
//       setResults([]);
//     } else {
//       const filtered = searchData
//         .map((page) => {
//           const matchedEntries = page.entries.filter((entry) =>
//             entry.keyword.toLowerCase().includes(value)
//           );
//           if (matchedEntries.length > 0) {
//             return { ...page, entries: matchedEntries };
//           }
//           return null;
//         })
//         .filter(Boolean);
//       setResults(filtered);
//     }
//   };

//   const handleClick = (page) => {
//     navigate(page);
//     setQuery("");
//     setResults([]);
//   };

//   // Handle Enter key press
//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       if (results.length > 0) {
//         handleClick(results[0].page); // navigate to the first matching page
//       } else {
//         alert("No matching page found!");
//       }
//     }
//   };

//   const handleClear = () => {
//     setQuery(""); // clear text
//   };

//   // Highlight the search term
//   const highlightText = (text, term) => {
//     const regex = new RegExp(`(${term})`, "gi");
//     return text.split(regex).map((part, idx) =>
//       regex.test(part) ? (
//         <span key={idx} className="highlight">
//           {part}
//         </span>
//       ) : (
//         part
//       )
//     );
//   };

//   return (
//     <div className="search-container">
//       <input
//         type="text"
//         placeholder="Search..."
//         value={query}
//         onChange={handleChange}
//         onKeyPress={handleKeyPress} // ← handle Enter key
//         className="search-input"
//       />
//       {query && (
//         <span className="clear-btn" onClick={handleClear}>
//           ×
//         </span>
//       )}

//       {results.length > 0 ? (
//         results.map((page, idx) => (
//           <div key={idx} className="search-page">
//             <strong className="page-title">{page.title}</strong>
//             {page.entries.map((entry, eIdx) => (
//               <p
//                 key={eIdx}
//                 className="entry-snippet"
//                 onClick={() => handleClick(page.page)}
//               >
//                 {highlightText(entry.snippet, query)}
//               </p>
//             ))}
//           </div>
//         ))
//       ) : query ? ( // <-- if query is not empty and results are 0
//         <div className="no-results">No matching page found!</div>
//       ) : null}
//     </div>
//   );
// };

// export default Search;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchData } from "../SearchData/data";
import "./index.css";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    if (value === "") {
      setResults([]);
    } else {
      const filtered = searchData
        .map((page) => {
          const matchedEntries = page.entries.filter((entry) =>
            entry.keyword.toLowerCase().includes(value)
          );
          if (matchedEntries.length > 0) {
            return { ...page, entries: matchedEntries };
          }
          return null;
        })
        .filter(Boolean);
      setResults(filtered);
    }
  };

  const handleClick = (page) => {
    navigate(page);
    setQuery("");
    setResults([]);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (results.length > 0) {
        handleClick(results[0].page);
      } else {
        alert("No matching page found!");
      }
    }
  };

  const handleClear = () => {
    setQuery("");
    setResults([]);
  };

  const highlightText = (text, term) => {
    const regex = new RegExp(`(${term})`, "gi");
    return text.split(regex).map((part, idx) =>
      regex.test(part) ? (
        <span key={idx} className="highlight">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        className="search-input"
      />
      {query && (
        <span className="clear-btn" onClick={handleClear}>
          ×
        </span>
      )}

      {results.length > 0 ? (
        results.map((page, idx) => (
          <div key={idx} className="search-page">
            <strong className="page-title">{page.title}</strong>
            {page.entries.map((entry, eIdx) => (
              <p
                key={eIdx}
                className="entry-snippet"
                onClick={() => handleClick(page.page)}
              >
                {highlightText(entry.snippet, query)}
              </p>
            ))}
          </div>
        ))
      ) : query ? (
        <div className="no-results">No matching page found!</div>
      ) : null}
    </div>
  );
};

export default Search;

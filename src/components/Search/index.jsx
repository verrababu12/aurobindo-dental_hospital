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

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       if (results.length > 0) {
//         handleClick(results[0].page);
//       } else {
//         alert("No matching page found!");
//       }
//     }
//   };

//   const handleClear = () => {
//     setQuery("");
//     setResults([]);
//   };

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
//         onKeyPress={handleKeyPress}
//         className="search-input"
//       />
//       {query && (
//         <span className="clear-btn" onClick={handleClear}>
//           ×
//         </span>
//       )}

//       {results.length > 0 ? (
//         results.map((page, index) => (
//           <div key={index} className="search-page">
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
//       ) : query ? (
//         <div className="no-results">No matching page found!</div>
//       ) : null}
//     </div>
//   );
// };

// export default Search;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { searchData } from "../SearchData/data";
// import "./index.css";

// const Search = () => {
//   const [query, setQuery] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setQuery(e.target.value.toLowerCase());
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       const value = query.trim();
//       if (value === "") return;

//       // find the first matching page
//       const matchedPage = searchData.find((page) =>
//         page.entries.some((entry) =>
//           entry.keyword.toLowerCase().includes(value)
//         )
//       );

//       if (matchedPage) {
//         navigate(matchedPage.page);
//         setQuery("");
//       } else {
//         alert("No matching page found!");
//       }
//     }
//   };

//   const handleClear = () => {
//     setQuery("");
//   };

//   return (
//     <div className="search-container">
//       <input
//         type="text"
//         placeholder="Search..."
//         value={query}
//         onChange={handleChange}
//         onKeyDown={handleKeyPress}
//         className="search-input"
//       />
//       {query && (
//         <span className="clear-btn" onClick={handleClear}>
//           ×
//         </span>
//       )}
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
  const navigate = useNavigate();

  const handleChange = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const value = query.trim();
      if (value === "") return;

      // Find first matching entry
      let matchedPage = null;
      let matchedSnippet = "";

      for (const page of searchData) {
        const entry = page.entries.find((entry) =>
          entry.keyword.toLowerCase().includes(value)
        );
        if (entry) {
          matchedPage = page.page;
          matchedSnippet = entry.snippet;
          break;
        }
      }

      if (matchedPage) {
        navigate(matchedPage, { state: { snippet: matchedSnippet } });
        setQuery("");
      } else {
        alert("No matching page found!");
      }
    }
  };

  const handleClear = () => {
    setQuery("");
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        className="search-input"
      />
      {query && (
        <span className="clear-btn" onClick={handleClear}>
          ×
        </span>
      )}
    </div>
  );
};

export default Search;

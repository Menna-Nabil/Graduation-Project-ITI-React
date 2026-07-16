import { useState } from "react";

 function Filter({ Filterr }) {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  const Filterhandler = () => {
     Filterr({ category, sort });
  };

  return (
    <div
      style={{display: "flex",justifyContent: "center",gap: "15px", marginBottom: "20px",flexWrap: "wrap",}} >
      
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{padding: "8px 12px", borderRadius: "8px",border: "1px solid #e91e63",outline: "none",color:"#d64064"
        }}>
        <option value="All" style={{ color: "#d64064" }}>All Categories</option>
        <option value="Clothes" style={{ color: "#d64064" }}>Clothes</option>
        <option value="Shoes" style={{ color: "#d64064" }}>Shoes</option>
        <option value="Makeup" style={{ color: "#d64064" }}>Makeup</option>
        <option value="Bags" style={{ color: "#d64064" }}>Bags</option>
        <option value="Jewelry" style={{ color: "#d64064" }}>Jewelry</option>

      </select>

     
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        style={{padding: "8px 12px", borderRadius: "8px",border: "1px solid #e91e63",outline: "none",color:"#d64064"
        }}>

        <option value="" style={{ color: "#d64064" }}>Sort by</option>
        <option value="low-high" style={{ color: "#d64064" }}>Price: Low to High</option>
        <option value="high-low" style={{ color: "#d64064" }}>Price: High to Low</option>

      </select>

      <button
        onClick={Filterhandler}
        style={{padding: "8px 16px",borderRadius: "8px",border: "none",background: "#d64064",color: "white",}}>
        Apply
      </button>
    </div>
  );
}

export default Filter;
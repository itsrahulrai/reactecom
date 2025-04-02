const ColorFilter = () => {
    const colors = ["#ff0000", "#008000", "#0000ff", "#000000", "#ffffff", "#ff9900"];
    return (
      <div className="mb-5">
        <h3 className="text-lg font-semibold mb-3 font-playfair">Colors</h3>
        <div className="flex flex-wrap gap-2">
          {colors.map((color, index) => (
            <div key={index} className="w-7 h-7 rounded-full border cursor-pointer hover:scale-110 transition-all" style={{ backgroundColor: color, borderColor: "#ddd" }}></div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ColorFilter;
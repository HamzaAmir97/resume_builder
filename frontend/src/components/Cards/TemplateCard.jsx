import React from "react";

const TemplateCard = ({ thumbnailImg, isSelected, onSelect }) => {
  
  
  return (
    <div
      className={`h-auto md:h-fit  flex flex-col items-center sm:grid-cols-1   bg-white rounded-lg border border-gray-200 hover:border-purple-300 overflow-hidden cursor-pointer${isSelected ? "border-purple-500 border-2" : ""}`}
      onClick={onSelect}
    >
      {thumbnailImg ? (
        <img src={thumbnailImg} alt="" className="w-[100%] rounded" />
      ) : (


        <div>



        </div>


      )}

    </div>



  );
};

export default TemplateCard;
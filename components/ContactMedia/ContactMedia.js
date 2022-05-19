import React, { useState } from "react";

const ContactMedia = () => {
  const images = [
    "/images/image-1.png",
    "/images/image-2.png",
    "/images/image-3.png",
    "/images/image-4.png",
    "/images/image-5.png",
    "/images/image-6.png",
    "/images/image-7.png",
    "/images/image-5.png",
    "/images/image-6.png",
    "/images/image-7.png",
  ];
  const [loadMore, setLoadMore] = useState(false);
  const loadMoreHandle = () => {
    setLoadMore(true);
  };

  return (
    <div className="mt-2 mr-2 flex flex-col items-center">
      <span className="text-[#6588DE] text-[18px] font-semibold">Media</span>
      <div className="m-2 grid grid-rows-3 gap-5	grid-cols-3">
        {images.map(
          (image, i) =>
            i <= 7 && (
              <img
                src={image}
                key={i}
                alt="image"
                className="col-span-1 row-span-1"
              />
            )
        )}

        {!loadMore ? (
          <div className="flex justify-center items-center">
            <span className="cursor-pointer underline" onClick={loadMoreHandle}>
              See more
            </span>
          </div>
        ) : (
          <>
            {images.map(
              (image, i) =>
                i > 7 && (
                  <img
                    src={image}
                    key={i}
                    alt="image"
                    className="col-span-1 row-span-1"
                  />
                )
            )}
          </>
        )}
      </div>

      <div className="py-1">
        <div className="w-80  max-w-full border-t border-[#D0D9DF] mt-4"></div>
      </div>
    </div>
  );
};

export default ContactMedia;

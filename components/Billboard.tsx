import useBillboard from "@/hooks/useBillboard";
import React from "react";

const Billboard = () => {
  const { data } = useBillboard();

  return (
    <div>
      <video
        poster={data?.thumbnailUrl}
        className="w-full h-[56.25vw] object-cover brightness-[60%] transition duration-500"
        autoPlay
        muted
        loop
        src={data?.videoUrl}
      ></video>
    </div>
  );
};

export default Billboard;

import React from "react";
import Iframe from "react-iframe";

export const Sample = () => {
  return (
    <div>
      <Iframe
        url="http://www.youtube.com/embed/xDMP3i36naA"
        position="absolute"
        id="myId"
        className="w-50 aspect-video"
      />
    </div>
  );
};

/**
<button class="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
  Save changes
</button> */

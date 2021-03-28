import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const AboutChild = () => {
  const [state, setstate] = useState(true);
  const router = useRouter();

  if (state)
    return (
      <button
        className="btn btn-sm btn-primary m-3"
        onClick={() => router.push("posts")}
      >
        Follow
      </button>
    );
};

export default AboutChild;

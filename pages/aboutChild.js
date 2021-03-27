import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const AboutChild = () => {
  const [state, setstate] = useState(true);
  const router = useRouter();

  if (state)
    return <button onClick={() => router.push("posts")}>Follow</button>;
};

export default AboutChild;

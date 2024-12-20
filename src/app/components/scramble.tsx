"use client";
import { useScramble } from "use-scramble";

const Scramble = () => {

  // hook returns a ref and replay function
  const { ref, replay } = useScramble({ 
    speed: 0.25,
    overdrive: false,
    seed: 0.5,
    tick: 1,
    text: "i seek the courage to discover and the willingness to affirm those discoveries. i have elected to perceive the World through a lens of radical acceptance and conscious serenity. i have decided to embody my pleasures in craft and creation." 
  });

  // apply the ref to a node and call replay manually
  return (
    <a 
      ref={ref} 
      onMouseOver={replay} 
      onFocus={replay}
    >
      consistently inconsistent
    </a>
  );
}

export default Scramble;

import React, { useEffect } from "react";
import { useStore } from "../zustandStore";

export const Skills = () => {
 const { setIsShow } = useStore();

 useEffect(() => {
  setIsShow("skills");
 }, []);
 return <div>sa</div>;
};

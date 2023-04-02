import React from "react";
import ArrowDown from "../../../assets/icons/ArrowDown";
interface Props {
    title: string;
}

const TitleBoxV1 = ({title}: Props) => {
  return (
    <div>
      <div className="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400">
        <ArrowDown />
        {title}
      </div>
    </div>
  );
};

export default TitleBoxV1;

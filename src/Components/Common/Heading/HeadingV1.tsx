import React from "react";

interface Props {
    title: string;
}

const HeadingV1 = ({title}: Props) => {
  return (
    <div>
      <div className="flex items-center mt-8 intro-y">
        <h2 className="mr-auto text-lg font-medium">{title}</h2>
      </div>
    </div>
  );
};

export default HeadingV1;

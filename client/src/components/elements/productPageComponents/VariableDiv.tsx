import Radio, { RadioGroup } from "../../ui/Radio";
import React from "react";

function Plan({ Content }: { Content: string }) {
  return (
    <div className="flex gap-4 items-center">
      <span className="ml-auto font-medium">{Content}</span>
    </div>
  );
}
export function toPersianDigits(input: string | number): React.ReactElement {
  return (
    <span className="farhang-medium  ">{input.toLocaleString("fa-IR")}</span>
  );
}


interface PropsTypes {
  icon: React.ElementType;
  items: any[]; 
  title: string;
  state: string;
  setstate: (value: string) => void;
}

const VariableDiv = ({ icon: Icon, items, title, state, setstate }: PropsTypes) => {
  return (
    <div className="border m-2 rounded-xl p-2">
      <h2 className="text-gray-700   mb-1 flex gap-1">
        <Icon />
        {title}
      </h2>
      <RadioGroup
        value={state}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setstate(e.target.value)}
      >
        <div className="flex gap-2 flex-wrap">
            {items.map((item) => (
          <Radio value={item.value}>
            <Plan Content={item.Content} />
          </Radio>

            ))}
          
        </div>
      </RadioGroup>
    </div>
  );
};

export default VariableDiv
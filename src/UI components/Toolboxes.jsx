import { useId } from "react";

const Toolboxes = ({ toolboxItems, toolboxItemsStyles }) => {
  const prefixId = useId(); // single call

  return (
    <div className="mt-6 -mx-4 overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="inline-flex gap-6" style={toolboxItemsStyles}>
        {toolboxItems.map((item, index) => (
          <div
            key={`${prefixId}-${index}`}
            className="flex items-center gap-4 p-2 px-3 border border-gray-500 rounded-lg"
          >
            <span>{item.icon}</span>
            <span className="text-base">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toolboxes;

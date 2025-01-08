import React from 'react';

const PathItem = ({
  title = "First Blood",
  patchInfo = "Patch 1.0 •",
  description = "Initial release, core zombie AI (Wretches), and basic player movement/combat.",
  dateStatus = "text",
  dateText = "Release Date: October 11, 2024"
}) => {
  const renderDate = () => {
    switch (dateStatus) {
      case "done":
        return "Done!";
      case "progress":
        return (
          <span className="relative">
            In progress
            <span className="absolute inline-flex">
              <span className="animate-[blink_1.4s_infinite]">.</span>
              <span className="animate-[blink_1.4s_infinite_0.2s]">.</span>
              <span className="animate-[blink_1.4s_infinite_0.4s]">.</span>
            </span>
          </span>
        );
      default:
        return dateText;
    }
  };

  return (
    <div className="path-item">
      <h3 className="title-h4 title-color pb-2">{title}</h3>
      <span className="inline text-zinc-500 paragraph-primary pb-2">
        {patchInfo} <span className="date">{renderDate()}</span>
      </span>
      <p className="paragraph-primary paragraph-color">
        {description}
      </p>
    </div>
  );
};

// Definición de la animación de los puntos
const style = document.createElement('style');
style.textContent = `
  @keyframes blink {
    0%, 100% { opacity: 0; }
    50% { opacity: 1; }
  }
`;
document.head.appendChild(style);

export default PathItem;
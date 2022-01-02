import React from "react";

const Results = ({ translations }) => {
  return translations.length ? ( //аналог ифа
    <div className="Results" style={{ marginTop: "20px" }}>
      <h3>Translations</h3>
      <div>
        {translations.map((translation, index) => (
          <p key={index}> 
            {translation[0]}: {translation[1]}
          </p>
        ))}
      </div>
    </div>
    // key должен быть при большом количестве одинаковых элементов
  ) : null; //продолжение?
};

export default Results;

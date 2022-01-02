import React from "react";
//git add .
//git commit -m "react-create-app on Heroku8"
//git push heroku master

const Results = ({ translations }) => {
  return translations.length ? ( //аналог ифа
    <div className="Results" style={{ marginTop: "20px" }}>
      <h3>Translations</h3>
      <div>
        {translations.map((translation, index) => (
          <div class="word" key={index}>
            <div class="translation">
              <spun>
                {translation[1]}
              </spun>
            </div >
            <div class="original">
              <spun>
                {translation[0]}
              </spun>
            </div>
          </div>
        ))}
      </div>
    </div>
    // выше оборацивание в р
    // key должен быть при большом количестве одинаковых элементов
  ) : null; //продолжение?
};

export default Results;

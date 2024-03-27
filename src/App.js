import api from "./services/api.js";
import { handleSubmit } from "./postRenderJs.js";

const nobelArray = await api("/nobelPrizes").then(
  ({ nobelPrizes }) => nobelPrizes
);

const App = `
<header class="debbug__red">header</header>
    <main class="debbug__red">
      <div class="debbug__blue main_division__left">
        <div class="division_left__input_area">
          <label for="nobelSerchField">Pesquisar ano</label>
          <input id="searchArea" type="search" name="nobelSerchField" id="nobelSerchTextArea" placeholder="Insira o Ano AAAA" />
          <input id="submitSearch" onclick="handleSubmit()" type="submit" value="&#128269;" />
        </div>
        <p id="error">
        </p>
        <p id="info">
          A base de dados aceita apenas dados a partir de 1901
        </p>
      </div>
      <ul id="nobelList" class="debbug__blue main_division__right">
      ${
        nobelArray &&
        nobelArray
          .map(
            (item) =>
              `<li class="nobel_list__card_item">
                <p>${item?.awardYear}</p>
                <p>${item?.dateAwarded || "Sem data"}</p>
                <p>${item?.category.en}</p>
                <p>${
                  item?.laureates?.lenght > 1
                    ? Object.values(item?.laureates[0]?.fullName)[0] +
                      " +" +
                      item?.laureates?.lenght
                    : item?.laureates[0]?.fullName
                    ? Object.values(item?.laureates[0]?.fullName)[0]
                    : ""
                }</p>
              </li>`
          )
          .join("")
      }
      </ul>
    </main>
    <footer class="debbug__red">footer</footer>
`;

export default App;

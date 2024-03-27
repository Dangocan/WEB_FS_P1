async function handleSubmit() {
  const searchValueText = document.getElementById("searchArea");
  const errorTextAreaElement = document.getElementById("error");
  console.log("asdsa", searchValueText?.value.length);

  if (isNaN(searchValueText.value) || searchValueText?.value?.length !== 4) {
    errorTextAreaElement.innerHTML =
      "O valor precisa ser o numero de um ano válido maior que 1901 no formato AAAA";
    return;
  } else {
    errorTextAreaElement.innerHTML = "";

    const api = async (url) =>
      await fetch(`https://api.nobelprize.org/2.1${url}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          return data;
        })
        .catch((error) => {
          console.error("Erro:", error);
          return data;
        });

    const handleApiCall = async (param) =>
      await api(`/nobelPrizes?nobelPrizeYear=${+param}`).then(
        ({ nobelPrizes }) => nobelPrizes
      );

    console.log(
      !isNaN(searchValueText.value) || searchValueText.value.length === 4
    );

    const nobelArray = await handleApiCall(searchValueText.value || "");

    const newNobelListHTML =
      nobelArray &&
      nobelArray
        .map(
          (item) =>
            `<li class="nobel_list__card_item">
                <p>${item?.awardYear}</p>
                <p>${item?.dateAwarded || "Sem data"}</p>
                <p>${item?.category.en}</p>
                <p>${
                  item?.laureates?.length > 1
                    ? Object.values(item?.laureates[0]?.fullName)[0] +
                      " +" +
                      item?.laureates?.length
                    : item?.laureates[0]?.fullName
                    ? Object.values(item?.laureates[0]?.fullName)[0]
                    : ""
                }</p>
              </li>`
        )
        .join("");

    const nobelListElement = document.getElementById("nobelList");

    nobelListElement.innerHTML = newNobelListHTML;
    console.log({ asdsaa: searchValueText.value });
  }
}

export { handleSubmit };

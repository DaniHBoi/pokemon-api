document.querySelector("button").addEventListener("click", apiRequest);

async function apiRequest() {
  const pokemonName = document.querySelector("input").value;
  try {
    const response = await fetch(`localhost:8000/api/${pokemonName}`);
    const data = await response.json();

    console.log(data);
    document.querySelector("h2").innerText = data.type;
  } catch (error) {
    console.log(error);
  }
}

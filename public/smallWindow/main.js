const infoContainer = document.querySelector(".info-container");
const attributes = document.querySelector(".attributes");

window.onload = function () {
  window.pokemon.getPokemonDetails((event, val) => {
    let data = JSON.parse(val);
    infoContainer.textContent = "";
    let keys = ["name", "height", "weight", "abilities", "stats"];

    keys.forEach((key) => {
      if (key === "stats") {
      } else {
        let item = document.createElement("p");
        item.classList.add("item");
        let title = document.createElement("span");
        title.classList.add("title");
        console.log(item);
        console.log(title);
        title.textContent = key.toUpperCase();
        let attr = document.createElement("span");
        console.log(key, data[key]);
        console.log(title, attr);
        if (key === "abilities") {
          attr.textContent = data[key]
            .map((ability) => ability.ability.name)
            .join(", ");
        } else {
          attr.textContent = data[key];
        }

        item.appendChild(title);
        item.appendChild(attr);
        infoContainer.appendChild(item);
      }
    });
    {
      /* <span className="title">Name</span>
                <span>{data?.name}</span>
            </ItemStyle>
            <ItemStyle>
                <span className="title">Height</span>
                <span>{data && (data.height / 10)}m</span>
            </ItemStyle>
            <ItemStyle>
                <span className="title">Weight</span>
                <span>{data && (data.weight * 0.1)}kg</span>
            </ItemStyle>

            <ItemStyle>
                <span className="title">Abilities</span>
                <span>{data?.abilities.map((ability) => ability.ability.name).join(", ")}</span>
            </ItemStyle>
            <h3>Stats</h3> */
    }
    // {data.stats.map((stat, i) => <StatStyle key={i} stat={stat.base_stat}>
    //     <span className="stat">{stat.stat.name}</span>
    //     <span className="rating"></span>
    // </StatStyle>)}
  });
};

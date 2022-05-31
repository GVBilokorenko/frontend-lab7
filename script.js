let item = 0;

async function setData() {
	fetch("https://randomuser.me/api")
		.then(response => {
			return response.json();
		})
		.then(data => {
			let card = document.createElement("div");
			card.id = `card${item}`;
			card.className = "card";
			card.style.opacity = 0;

			let image = document.createElement("img");
			image.src = `${data.results[0].picture.large}`;
			card.appendChild(image);

			let name = document.createElement("div");
			name.innerHTML = `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`;
			card.appendChild(name);

			let city = document.createElement("div");
			city.innerHTML = `${data.results[0].location.city}`;
			card.appendChild(city);

			let country = document.createElement("div");
			country.innerHTML = `${data.results[0].location.country}`;
			card.appendChild(country);

			let postcode = document.createElement("div");
			postcode.innerHTML = `${data.results[0].location.postcode}`;
			card.appendChild(postcode);

			document.querySelector(".grid").appendChild(card);

			setTimeout(() => {
				document.getElementById(`card${item}`).style.opacity = 1;
				item++;
			}, 10);
		});
}

const avgPrice = (Freelancer1, Freelancer2, Freelancer3) => {
  const startingPrices = [Freelancer1, Freelancer2, Freelancer3].map(
    (freelancer) => {
      return parseInt(freelancer.startingPrice.slice(1));
    }
  );

  const totalPrices = startingPrices.reduce((total, price) => total + price, 0);
  const averagePrice = totalPrices / startingPrices.length;
  return Math.floor(averagePrice);
};
const possibleNames = [
  "Brad",
  "Joe",
  "Bob",
  "Alice",
  "Carol",
  "Kai",
  "Sofia",
  "Liam",
  "Eva",
  "Mateo",
  "Audrey",
  "Nolan",
  "Zara",
  "Ezra",
  "Mila",
  "Luca",
  "Stella",
  "Axel",
  "Nova",
  "Dante",
];
const possibleOccupations = [
  "sales",
  "writer",
  "driver",
  "teacher",
  "programmer",
];

const randomNames = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

const randomOccupations = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

const randomStartingPrice = () => {
  const random = Math.floor(Math.random() * (100 - 25 + 1)) + 25;
  return random;
};
let payMeThis = randomStartingPrice();
// create th elements
const title = document.createElement("div");
const root = document.getElementById("root");
const freeLanceerInfo = document.createElement("div");
const header = document.createElement("h1");
const headerInfo = document.createElement("h3");
const availablePeople = document.createElement("h2");
const infoRow = document.createElement("h4");
const Freelancer1 = document.createElement("h3");
const Freelancer2 = document.createElement("h3");
const Freelancer3 = document.createElement("h3");
const freelancerContainer = document.createElement("div");

// object for info about people
infoRowInfo = {
  row1: "Name",
  row2: "Occupation",
  row3: "Starting Price",
};

//objects for people
let Freelancer1Info = {
  name: randomNames(possibleNames),
  occupation: randomOccupations(possibleOccupations),
  startingPrice: `$${payMeThis}`,
};
let Freelancer2Info = {
  name: randomNames(possibleNames),
  occupation: randomOccupations(possibleOccupations),
  startingPrice: "$50",
};
let Freelancer3Info = {
  name: randomNames(possibleNames),
  occupation: randomNames(possibleOccupations),
  startingPrice: "$70",
};

let theAvgPrice = avgPrice(Freelancer1Info, Freelancer2Info, Freelancer3Info);

// set text value to said elements
header.innerHTML = "Freelancer Forum";
headerInfo.innerHTML = `the average starting price is $${theAvgPrice}.`;
availablePeople.innerHTML = "Available Freelancers";
infoRow.innerHTML = `${infoRowInfo.row1}, ${infoRowInfo.row2}, ${infoRowInfo.row3}`;
Freelancer1.innerHTML = `${Freelancer1Info.name} ${Freelancer1Info.occupation} ${Freelancer1Info.startingPrice}`;
Freelancer2.innerHTML = `${Freelancer2Info.name} ${Freelancer2Info.occupation} ${Freelancer2Info.startingPrice}`;
Freelancer3.innerHTML = `${Freelancer3Info.name} ${Freelancer3Info.occupation} ${Freelancer3Info.startingPrice}`;

// append elements to root(id in html)
root.appendChild(header);
root.appendChild(headerInfo);
root.appendChild(availablePeople);
root.appendChild(freelancerContainer);
freelancerContainer.appendChild(infoRow);
freelancerContainer.appendChild(Freelancer1);
freelancerContainer.appendChild(Freelancer2);
freelancerContainer.appendChild(Freelancer3);

// adding classes for styling

// this is where im going to attempt to style my inputs
// the first one will be an example if using a queryselector
document.querySelector("body").style.backgroundColor = "lightblue";
root.style.border = "10px solid black";
root.style.textAlign = "center";
freelancerContainer.style.display = "table";
freelancerContainer.style.margin = "auto";

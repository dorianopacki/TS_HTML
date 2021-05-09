const data = [
  {
    _id: "5e9df382fc302216f08b46b1",
    name: "Ivy Mitchell",
    age: 40,
    gender: "female",
    company: "TALAE",
    email: "ivymitchell@talae.com",
    phone: "+1 (838) 597-2008",
    tags: ["cupidatat", "et", "ad", "incididunt", "velit", "sint", "non"],
  },
  {
    _id: "5e9df38220c8ca67ea7903ae",
    name: "Francine Fleming",
    age: 31,
    gender: "female",
    company: "ZEDALIS",
    email: "francinefleming@zedalis.com",
    phone: "+1 (857) 548-3417",
    tags: [
      "culpa",
      "elit",
      "aute",
      "officia",
      "reprehenderit",
      "nulla",
      "aute",
    ],
  },
  {
    _id: "5e9df38249740035c46a0e8e",
    name: "Buckley Harper",
    age: 33,
    gender: "male",
    company: "MARKETOID",
    email: "buckleyharper@marketoid.com",
    phone: "+1 (931) 478-3483",
    tags: ["Lorem", "commodo", "quis", "eu", "labore", "exercitation", "in"],
  },
  {
    _id: "5e9df382b76d365bb162751c",
    name: "Pollard Farley",
    age: 23,
    gender: "male",
    company: "UNCORP",
    email: "pollardfarley@uncorp.com",
    phone: "+1 (969) 592-2232",
    tags: [
      "commodo",
      "culpa",
      "eiusmod",
      "minim",
      "ipsum",
      "minim",
      "proident",
    ],
  },
  {
    _id: "5e9df3820b489f341a421aa7",
    name: "Esperanza Gates",
    age: 32,
    gender: "female",
    company: "OVERFORK",
    email: "esperanzagates@overfork.com",
    phone: "+1 (928) 540-3318",
    tags: ["sit", "qui", "labore", "ea", "veniam", "non", "dolor"],
  },
  {
    _id: "5e9df3826ce9a9c66e5fbece",
    name: "Mccarthy Brooks",
    age: 23,
    gender: "male",
    company: "CODAX",
    email: "mccarthybrooks@codax.com",
    phone: "+1 (886) 592-3578",
    tags: [
      "eiusmod",
      "aliqua",
      "tempor",
      "nostrud",
      "anim",
      "tempor",
      "occaecat",
    ],
  },
  {
    _id: "5e9df382ec22953b82005d4b",
    name: "Beverley Kramer",
    age: 40,
    gender: "female",
    company: "ZYPLE",
    email: "beverleykramer@zyple.com",
    phone: "+1 (873) 440-2676",
    tags: ["aliquip", "ipsum", "sint", "enim", "adipisicing", "et", "nostrud"],
  },
  {
    _id: "5e9df38208f097558c905bff",
    name: "Wyatt Pace",
    age: 25,
    gender: "male",
    company: "RUBADUB",
    email: "wyattpace@rubadub.com",
    phone: "+1 (932) 592-2306",
    tags: ["minim", "elit", "magna", "aliquip", "qui", "voluptate", "aute"],
  },
  {
    _id: "5e9df3820a02091cc1a39663",
    name: "Hood Browning",
    age: 22,
    gender: "male",
    company: "BIOSPAN",
    email: "hoodbrowning@biospan.com",
    phone: "+1 (835) 565-2597",
    tags: ["voluptate", "dolore", "qui", "sunt", "ea", "aute", "veniam"],
  },
  {
    _id: "5e9df3823dc9e1a5ba14a100",
    name: "Jaime Alvarez",
    age: 34,
    gender: "female",
    company: "ISOLOGICA",
    email: "jaimealvarez@isologica.com",
    phone: "+1 (974) 498-3471",
    tags: ["laboris", "ut", "et", "excepteur", "aliqua", "consequat", "labore"],
  },
];

type dataType = {
  _id: string;
  name: string;
  age: number;
  gender: string;
  company: string;
  email: string;
  phone: string;
  tags: Array<string>;
};

const areAllHeadersTheSame = (headers: Array<Array<string>>): boolean => {
  const sample = Object.keys(headers[0]);
  if (
    headers.some((header) => JSON.stringify(header) == JSON.stringify(sample))
  )
    return false;
  else return true;
};

const headerConstructor = (data: Array<dataType>, coreElement: HTMLElement) => {
  const headers = data.map((element) => Object.keys(element));
  const areAllHeadersNamesTheSame = areAllHeadersTheSame(headers);

  if (areAllHeadersNamesTheSame) {
    const sampleHeader = headers[0];
    sampleHeader.forEach((header) => {
      const headerElement = document.createElement("th");
      const headerTextContent = document.createTextNode(header);
      headerElement.appendChild(headerTextContent);
      coreElement.appendChild(headerElement);
    });
  } else {
    //do something else
  }
};

const bodyConstructor = (data: Array<dataType>, parentElement: HTMLElement) => {
  const bodyElements = data.map((value) => (<any>Object).values(value));

  bodyElements.forEach((element) => {
    const tableRow = document.createElement("tr");
    element.forEach((drawer: string) => {
      const drawerCell = document.createElement("td");
      const drawerCellContent = document.createTextNode(drawer);
      drawerCell.appendChild(drawerCellContent);
      tableRow.appendChild(drawerCell);
    });
    parentElement.appendChild(tableRow);
  });
};

const tableConstructor = (
  tableHeader: HTMLElement,
  tableBody: HTMLElement,
  tableCoreElement: HTMLElement,
  placingElement: string
) => {
  const destination = document.querySelector(placingElement);
  tableCoreElement.appendChild(tableHeader);
  tableCoreElement.appendChild(tableBody);
  destination.appendChild(tableCoreElement);
};

const dynamicTableGenerator = (
  placingElement: string,
  data: Array<dataType>
) => {
  const tableCoreElement = document.createElement("table");
  const tableHeaderElement = document.createElement("thead");
  const tableBodyElement = document.createElement("tbody");

  headerConstructor(data, tableHeaderElement);

  bodyConstructor(data, tableBodyElement);

  tableConstructor(
    tableHeaderElement,
    tableBodyElement,
    tableCoreElement,
    placingElement
  );
};

dynamicTableGenerator("body", data);

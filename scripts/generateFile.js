import fs from "fs";
import path from "path";

const FILE_NAME = "file_data.csv";
const FILE_PATH = path.join("./files/", FILE_NAME);
const LINE_NUMBER = 1000;

const COMA = ",";
const DEFAULT_VALUES = {
  NAMES: [
    "Priscila",
    "Ann",
    "Lois",
    "Katheryn",
    "Jules",
    "Nicole",
    "Aileen",
    "Bruno",
    "Camilla",
    "Anastasia",
    "Beau",
    "In",
    "Kassandra",
    "Abraham",
    "Alyson",
    "Deirdre",
    "Major",
    "Mora",
    "Venita",
    "Terri",
    "Reid",
    "Halina",
    "Asha",
    "Glynda",
    "Ross",
    "Noma",
    "Juanita",
    "Shin",
    "Debora",
    "Etta",
  ],
  SURNAMES: [
    "Toto",
    "Bartolo",
    "Tighe",
    "Mcdonnell",
    "Falconer",
    "Turlington",
    "Bowling",
    "Clover",
    "Veloz",
    "Stamps",
    "Hora",
    "Buttner",
    "Deere",
    "Tookes",
    "Beckler",
    "Drucker",
    "Basquez",
    "Mynatt",
    "Bumgardner",
    "Hardee",
    "Aho",
    "Bonenfant",
    "Schnur",
    "Tiffany",
    "Twedt",
    "Vanduzer",
    "Holts",
    "Russo",
    "Engelbrec",
    "Wycoff",
  ],
  EMAILS: [
    "staffelb@yahoo.ca",
    "boein@msn.com",
    "miyop@comcast.net",
    "pkplex@comcast.net",
    "ninenine@hotmail.com",
    "janneh@gmail.com",
    "murty@optonline.net",
    "lamky@att.net",
    "gommix@msn.com",
    "ozawa@icloud.com",
    "dhwon@att.net",
    "drolsky@outlook.com",
    "north@outlook.com",
    "smallpaul@msn.com",
    "esbeck@yahoo.ca",
    "parksh@me.com",
    "shawnce@gmail.com",
    "retoh@yahoo.com",
    "steveli@yahoo.com",
    "ivoibs@icloud.com",
    "sakusha@icloud.com",
    "chronos@att.net",
    "fangorn@mac.com",
    "guialbu@me.com",
    "jonathan@mac.com",
    "formis@verizon.net",
    "geeber@comcast.net",
    "subir@sbcglobal.net",
    "rgarcia@yahoo.ca",
    "martink@me.com",
  ],
};

const getItemFromArray = (array, index) => array[index % array.length];

const data = [];
for (let i = 0; i < LINE_NUMBER; i++) {
  const line =
    getItemFromArray(DEFAULT_VALUES.NAMES, i) +
    COMA +
    getItemFromArray(DEFAULT_VALUES.SURNAMES, i) + 
    COMA +
    getItemFromArray(DEFAULT_VALUES.EMAILS, i);

  data.push(line);
}

fs.writeFile(FILE_PATH, data.join("\n"), (err) => {
  if (err) throw err;

  console.log("File was created successfully.");
  console.log(`Path to file is: ${FILE_PATH}`);
});

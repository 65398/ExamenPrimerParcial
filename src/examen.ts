import { Isoftware, Irequirement } from './Interfaces'; 

const softwareArray: (Isoftware | Irequirement)[] = [
  {
    id: 1,
    name: "software1",
    price: 100,
    detail: "pgadmi",
    requirements: [
      {
        id: 123,
        description: "version10",
        cost: 50,
        effort: 20,
        softwareId: 1,
      },
      {
        id: 101,
        description: "version11",
        cost: 70,
        effort: 15,
        softwareId: 1,
      },
    ],
  },
  {
    id: 2,
    name: "Software2",
    price: 150,
    detail: "sqlserver",
    requirements: [
      {
        id: 201,
        description: "version1",
        cost: 40,
        effort: 25,
        softwareId: 2,
      },
    ],
  },
  {
    id: 3,
    name: "Software3",
    price: 150,
    detail: "oracle",
    requirements: [
      {
        id: 301,
        description: "version1",
        cost: 35,
        effort: 30,
        softwareId: 3,
  },
],
  },
];


function filterSoftwareByPrice(software: ISoftware[], referencePrice: number, callback: (software: ISoftware) => boolean) {
  const filteredSoftware = software.filter(callback);
  return filteredSoftware;
}

const referencePrice = 150; // Precio referencial


const filteredSoftware = filterSoftwareByPrice(softwareArray, referencePrice, (software) => software.price > referencePrice);

console.log("Software con precio mayor al precio referencial:");
console.log(filteredSoftware);



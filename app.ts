const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


async function createElementsInDatabase() {

  const software = await prisma.software.create({
    data: {
      name: "Software C",
      price: 200,
      detail: "This is software C",
    },
  });


  const requirement = await prisma.requirement.create({
    data: {
      description: "Requirement E",
      cost: 70,
      effort: 1,
      softwareId: software.id, 
    },
  });



createElementsInDatabase();
  


async function getRequirementsWithEffortOne() {
    const requirements = await prisma.requirement.findMany({
      where: {
        effort: 1,
      },
    });
  
    console.log("Requerimientos con effort = 1:");
    console.log(requirements);
  }


  getRequirementsWithEffortOne();
}
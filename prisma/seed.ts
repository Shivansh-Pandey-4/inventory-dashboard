import { prisma } from "@/lib/db";

async function main(){

    const demoUserId = "oQMbXRfwlPrzW9cKHo95ABnMANeYDpQg";

     await prisma.product.createMany({
    data: Array.from({ length: 25 }).map((_, i) => ({
      userId: demoUserId,
      name: `Product ${i + 1}`,
      price: (Math.random() * 90 + 10).toFixed(2),
      quantity: Math.floor(Math.random() * 20),
      lowStockAt: 5,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * (i * 5)),
    })),
  });
  
  console.log("Seed data created successfully!");
  console.log(`Created 25 products for user ID: ${demoUserId}`);
}

main()
.catch((error)=>{
     console.log("error: ",error);
     process.exit(1);
})
.finally(async () => {
    await prisma.$disconnect();
});
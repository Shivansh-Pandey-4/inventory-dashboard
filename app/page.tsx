import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Brain, Mail, } from "lucide-react";
import Link from "next/link";
import { inventoryFeatures } from "@/lib/constant";


export default function Home() {

  return (
    <div className="min-h-screen py-16 px-4 bg-linear-to-b from-purple-50 to-purple-200">
      <main className="container max-w-5xl mx-auto">
        <section className="text-center">
          <h1 className="font-bold text-5xl mb-6 text-gray-900">Inventory Management.</h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">Streamline your inventory tracking with our powerful, easy-to-use management system. Track products, monitor stock levels, and gain valuable insights.</p>
          <div className="flex items-center justify-center mt-8 pt-5 gap-4">
            <Link href={"#page"} >
              <Button variant={"outline"}>
                <Brain /> Learn More
              </Button>
            </Link>
            <Link href={"/signin"} >
              <Button>
                <Mail className="mr-2" /> Sign-in
              </Button>
            </Link>
          </div>
        </section>
        <section className="mt-8 py-12">
          <h1 className="text-3xl font-bold mb-10 text-center">Features</h1>
          <div className="flex  gap-4 justify-center items-center flex-wrap">
            {
              inventoryFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return <div className="max-w-xs" key={index}>

                  <Card className="flex items-center hover:bg-accent transition-colors" >
                    <CardTitle className="flex items-center gap-4">
                      <Icon /> <h1>{feature.title}</h1>
                    </CardTitle>
                    <CardContent>
                      <p>{feature.content}</p>
                    </CardContent>
                  </Card>
                </div>
              })
            }
          </div>
        </section>
      </main>
    </div>
  );
}

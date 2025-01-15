import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { CirclePlus } from "lucide-react";
import Link from "next/link";
  

export default function Home() {
  return (
    <main className="flex flex-col justify-center h-full text-center gap-5 max-w-5xl mx-auto">
       <div className=" flex justify-between">
        <h1 className="text-3xl font-semibold">
            Invoices
        </h1>
        <p>
            <Button className="inline-flex gap-2" variant="ghost" asChild>
                <Link href="/invoices/new">
                <CirclePlus className="mr-2 w-4"/>
                Create Invoice
                </Link>
            </Button>
        </p>
       </div>

      <Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px] p-4">Date</TableHead>
      <TableHead className="p-4">Customer</TableHead>
      <TableHead className="p-4">Email</TableHead>
      <TableHead className="p-4">Staus</TableHead>
      <TableHead className="text-right p-4">Value</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">10/12/2024</TableCell>
      <TableCell className="text-left">Marco Reus</TableCell>
      <TableCell className="text-left">marco@reus.com</TableCell>
      <TableCell className="text-left">
        <Badge className="rounded-full">
            Open
        </Badge>
        </TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>

    </main>
  );
}

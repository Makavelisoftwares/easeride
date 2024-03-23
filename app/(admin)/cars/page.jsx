import React from "react";
import { AdminHeader } from "../_comonents/header-admin";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CarsTable } from "./_components/cars-table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Upload } from "lucide-react";

function CarsPage() {
  return (
    <div>
      <Card className="border-none shadow-none">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div>Uploaded Cars</div>

            <Button size="sm" variant='destructive' asChild>
              <Link href="/cars/create" className="flex items-center space-x-3">
                <Upload/>
                <div>
                  Upload Car
                </div>
              </Link>
            </Button>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <CarsTable />
        </CardContent>
      </Card>
    </div>
  );
}

export default CarsPage;

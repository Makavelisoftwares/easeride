import React from "react";
import { AdminHeader } from "../_comonents/header-admin";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrandsTable } from "./_components/brands-table";
import { BrandsDialog } from "./_components/brand-dialog";

function BrandsPage() {
  return (
    <div>
      <Card className="border-none shadow-none">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div>Brands</div>

            <div>
              <BrandsDialog />
            </div>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <BrandsTable />
        </CardContent>
      </Card>
    </div>
  );
}

export default BrandsPage;

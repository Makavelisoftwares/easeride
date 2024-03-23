import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const AdminHeader = ({title, description}) => {
  return (
    <Card className="shadow-none border-none">
      <CardHeader>
        <CardTitle className='text-3xl font-extrabold'>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

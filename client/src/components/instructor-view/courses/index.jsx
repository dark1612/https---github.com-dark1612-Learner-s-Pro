import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit } from "lucide-react";
import { Delete } from "lucide-react";
import { useNavigate } from "react-router-dom";


function AdminCourses() {
    const navigate=useNavigate();
  return (
    <Card>
      <CardHeader className="flex justify-between flex-row items-center">
        <CardTitle className="text-3xl font-extrabold">All Courses</CardTitle>
        <Button onClick={()=>navigate("/instructor/create-new-course")} className="px-4 py-2">Create New Course</Button>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            
            <TableHeader>
              <TableRow>
                <TableHead>Course</TableHead>
                <TableHead>Students</TableHead>
                
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">React JS Full Course 2025</TableCell>
                <TableCell>100 Students</TableCell>
                
                <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                        <Edit className="h-6 w-6" />
                    </Button>
                    <Button variant="ghost" size="sm" >
                        <Delete className="h-6 w-6" />
                    </Button>
                </TableCell>
              </TableRow>
              {/* Add more rows as needed */}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}

export default AdminCourses;

import CourseCurriculum from "@/components/instructor-view/courses/add-new-course/course-curriculu";
import CourseSetting from "@/components/instructor-view/courses/add-new-course/course-setting";
import CourseLanding from "@/components/instructor-view/courses/add-new-course/course-landing";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";

function AddNewCoursesPage() {
    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-5">
                <h1 className="text-3xl font-extrabold">Create a new Course</h1>
                <Button className="text-sm tracking-wider font-bold px-6">SUBMIT</Button>
           </div>
            <Card>
                <CardContent>
                    <div className="container mx-auto p-4">
                        <Tabs defaultValue="curriculum" className="space-y-4">
                         <TabsList>
                                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                                <TabsTrigger value="course-landing-page">Course-Landing-Page</TabsTrigger>
                                <TabsTrigger value="settings">Settings</TabsTrigger>
                            </TabsList>
                            <TabsContent value="curriculum">
                                <CourseCurriculum />
                            </TabsContent>
                            <TabsContent value="course-landing-page">
                                <CourseLanding />

                            </TabsContent>
                            <TabsContent value="settings">
                                <CourseSetting />

                            </TabsContent>
                        </Tabs>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default AddNewCoursesPage;

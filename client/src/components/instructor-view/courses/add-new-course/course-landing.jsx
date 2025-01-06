import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { FormControl } from "@/components/ui/form";
import { courseLandingPageFormControls } from "@/config";
import { useContext } from "react";
import { InstructorContext } from "@/context/instructor-context";
import FormControls from "@/components/common-form/form-control";


function CourseLanding() {
    const { courseLandingFormData, setCourseLandingFormData } = useContext(InstructorContext);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Course Landing Page</CardTitle>
            </CardHeader>
            <CardContent>
                <FormControls
                    formControls={courseLandingPageFormControls}
                    formData={courseLandingFormData}
                    setFormData={setCourseLandingFormData}
                />
            </CardContent>
        </Card>
    );
}

export default CourseLanding;

import MediaProgressbar from "@/components/media-progress-ba";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { courseCurriculumIntialFormData } from "@/config";
import { InstructorContext } from "@/context/instructor-context";
import { mediaUploadService } from "@/services";

import { useContext } from "react";

function CourseCurriculum() {
    const { courseCurriculumFormData,
         setCourseCurriculumFormData ,
         mediaUploadProgress,
         setMediaUploadProgress,
         mediaUploadProgressPercentage,
         setMediaUploadProgressPercentage,
        
        } = useContext(InstructorContext);
    useContext(InstructorContext);

    function handleNewLecture(){
        setCourseCurriculumFormData([
            ...courseCurriculumFormData,
            {
                ...courseCurriculumIntialFormData[0],
            },

        ]);
    }
    function handleCourseTitleChange(event,currentIndex){
        let cpyCourseCurriculumFormData=[...courseCurriculumFormData];
        cpyCourseCurriculumFormData[currentIndex]={
        ...cpyCourseCurriculumFormData[currentIndex],
        title:event.target.value,
    };
    setCourseCurriculumFormData(cpyCourseCurriculumFormData);


    }

    async function handleSingleLectureUpload(event,currentIndex){
        const selectedFile=event.target.files[0];
        if(selectedFile){
            const videoFormData=new FormData();
            videoFormData.append("file",selectedFile);
            try{
                setMediaUploadProgress(true);
                const response= await mediaUploadService(videoFormData,setMediaUploadProgressPercentage);
                if(response.success){
                    let cpyCourseCurriculumFormData=[...courseCurriculumFormData];
                    cpyCourseCurriculumFormData[currentIndex]={
                        ...courseCurriculumFormData[currentIndex],
                        videoUrl:response?.data.url,
                        public_id:response?.data.public_id
                    }
                    setCourseCurriculumFormData(cpyCourseCurriculumFormData);
                    setMediaUploadProgress(false);
                }

            }
            catch(error){
                console.log(error);

            }

        }
    }
    return (
        <Card>
            <CardHeader>
                <CardTitle>Create Course Curriculum</CardTitle>
            </CardHeader>
            <CardContent>
                <Button onClick={handleNewLecture}>Add Lecture</Button>
                {
                    mediaUploadProgress?
                    <MediaProgressbar
                    isMediaUploading={mediaUploadProgress}
                    progress={mediaUploadProgressPercentage}
                    />:null
                }
                <div className="mt-4 space-y-4">
                    {
                        courseCurriculumFormData.map((curriculumItem, index) => (
                            <div key={index} className="border p-5 rounded-md">
                                <div className="flex gap-5 items-center">
                                    <h3 className="font-semibold">Lecture {index + 1}</h3>
                                    <Input
                                        name={`title-${index+1}`}
                                        placeholder="Enter lecture title"
                                        className="max-w-96"
                                        onChange={(event)=>handleCourseTitleChange(event,index)}
                                        value={courseCurriculumFormData[index]?.title}

                                    />
                                </div>
                                <div className="mt-6">
                                    <Input
                                        type="file"
                                        accept="video/*,application/pdf"
                                        onChange={(event)=>handleSingleLectureUpload(event,index)}
                                        className="mb-4"
                                    />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </CardContent>
        </Card>
    );
}

export default CourseCurriculum;

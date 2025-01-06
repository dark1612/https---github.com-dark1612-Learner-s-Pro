export const courseLandingPageFormControls=[
    {
      name:"title",
      label:"Title",
      componentType:"input",
      type:"text",
      placeholder:"Enter course title",
    },
    {
      name:"category",
      label:"Category",
      componentType:"select",
      type:"text",
      placeholder:"",
      options:"courseCategories",
    },
    {
      name:"level",
      label:"Level",
      componentType:"select",
      type:"text",
      placeholder:"",
      options:"courseLevelOptions",
      
    }, 
    {
      name:"primayLanguae",
      label:"Primary Language",
      componentType:"select",
      type:"text",
      placeholder:"",
      options:"languageOptions",
    },
   {
      name:"subtitle",
      label:"Subtitle",
      componentType:"input",
      type:"text",
      placeholder:"Enter your subtitle",
      
    },
     {
      name:"description",
      label:"Description",
      componentType:"textarea",
      type:"text",
      placeholder:"Enter your description",
      
    },
  
     {
      name:"objectives",
      label:"Objectives",
      componentType:"textarea",
      type:"text",
      placeholder:"Enter your objectives",
      
    },
  
  ];
    
  export const courseLandingInititalFormData={
    category : "",
    level :"",
    primaryLanguage:"",
    subtitle:"",
    description:"",
    objectives:"",
    welcomeMessage:"",
    image:"",


  };

 export const courseCurriculumIntialFormData=[
  {
    title:"",
    videoUrl:"",
    public_id:"",
    

  },
 ]; 
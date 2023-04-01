import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
       name: "jobTitle",
       title: "Jobtitle",
       type: "string",
    },
    {
       name: "companyImage",
       title: "CompanyImage",
       type: "image",
         options: {
            hotspot: true,
         },
   },
   {
       name: "company",
       title: "Company",
       type: "text",
   },
   {
      name: "dateStarted",
      title: "DateStarted",
      type: "date",
   },
   {
      name: "dateEnded",
      title: "DateEnded",
      type: "date",
   },
   {
      name: "phoneNumber",
      title: "PhoneNumber",
      type: "string",
   },
   {
      name: "isCurrentlyWorkingHere",
      title: "IsCurrentlyWorkingHere",
      type: "boolean",
   },
   {
      name: "address",
      title: "Address",
      type: "string",
   },
   {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
   },
   {
    name: "points",
    title: "Points",
    type: "array",
    of: [{ type: "string" }],
   },
  ],
})

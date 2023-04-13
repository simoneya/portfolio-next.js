//our front-end //
import { Skill } from "@/typings";

export const fetchSkills = async () => {
    // making a call to back-end code line bellow -> //
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);

    const data = await res.json();
    const skills: Skill[] = data.skills;

    //console.log("fetching", skills);

    return skills;
};
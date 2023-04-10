import { Skill } from "@/typings";
import { RestoreIcon } from "@sanity/icons";

export const fetchSkills = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api.getSkills`);

    const data = await res.json();
    const skills: Skill[] = data.skills;
}
import React from "react";
import SkillCard from "./SkillCard";
import { skillset } from "../data/skillSet";

export default function Skills() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        width: "80%",
        paddingLeft: "10%",
      }}>
      {skillset.map((skill) => {
        return (
          <SkillCard key={skill.id} skill={skill.skill} icon={skill.icon} />
        );
      })}
    </div>
  );
}

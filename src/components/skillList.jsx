import { Skill } from "./skill";

export function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML" emoji="🔥" color="blue" />
      <Skill skill="CSS" emoji="👌" color="green" />
      <Skill skill="JavaScript" emoji="👍" color="yellow" />
      <Skill skill="React" emoji="😉" color="purple" />
    </div>
  );
}

import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 90 },
  { name: "HTML 5", level: 95 },
  { name: "CSS", level: 95 },
  { name: "JavaScript", level: 80 },
  { name: "Python", level: 80 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Node JS", level: 90 },
  { name: "Express", level: 85 },
  { name: "MySQL", level: 85 },
  { name: "MongoDB", level: 85 },
];

const Skill = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full p-2"
    >
      <div className="py-12 font-titleFont">
        <p className="text-sm text-designColor tracking-[4px]">Features</p>
        <h2 className="md:text-4xl text-3xl font-bold">Development Skills</h2>
      </div>

      <div className="w-full flex flex-col gap-8">
        {skills.map((skill) => (
          <div key={skill.name} className="w-full">
            <p className="text-sm uppercase font-medium">{skill.name}</p>
            <div className="w-3/4 h-2 bgOpacity inline-flex rounded-md mt-2 relative">
              <div
                className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-sm relative"
                style={{ width: `${skill.level}%` }}
              >
                <span className="absolute -top-7 right-0">{skill.level}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skill;

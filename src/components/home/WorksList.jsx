import worklist from "../../worklist/worklistData";
import MenuItem from "./MenuItem";

const WorksList = () => {
  return (
    <div className="menu">
      {worklist.map((project, index) => (
        <MenuItem key={project.id} project={project} index={index} />
      ))}
    </div>
  );
};

export default WorksList;

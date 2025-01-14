import Button from "./Button.jsx";

export default function ProjectSidebar({
    onStartAddProject,
    projects,
    onSelect,
    selectedProject,
}) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-e-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
                Your Projects
            </h2>
            <div>
                <Button onClick={onStartAddProject}>+ Add Project</Button>
            </div>
            <ul>
                {projects.map((project) => {
                    let cssClasses =
                        "w-full text-left px-2 py-1 rounded-sm  hover:text-stone-200 hover:bg-stone-800";

                    if (project.id === selectedProject) {
                        cssClasses += " bg-stone-800 text-stone-200";
                    } else {
                        cssClasses += " text-stone-400";
                    }
                    return (
                        <li className="mt-8" key={project.id}>
                            <button
                                onClick={() => onSelect(project.id)}
                                className={cssClasses}
                            >
                                {project.title}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
}

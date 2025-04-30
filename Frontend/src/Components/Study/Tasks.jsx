import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Check } from "lucide-react";

const Tasks = () => {

    const tasks = [
        { id: 1, text: "Read Chapter 7: Linear Equations", completed: true },
        { id: 2, text: "Complete Problem Set #3", completed: false },
        { id: 3, text: "Review notes for quiz", completed: false },
    ];

    return (
        <>
            <div className="rounded-xl bg-card p-6 mt-[24px] shadow-md animate-fade-in">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">Study Tasks</h3>
                    <button className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex items-center gap-1">
                        <FontAwesomeIcon icon={faPlus} /> Add Task
                    </button>
                </div>
                <div className="space-y-2 mt-6">
                    {tasks.map((task) => (
                        <div
                            key={task.id}
                            className={`flex items-center p-3 rounded-md ${task.completed ? "bg-gray-100" : "hover:bg-gray-100"
                                }`}
                        >
                            <div
                                className={`h-5 w-5 rounded border mr-3 flex items-center justify-center ${task.completed ? "bg-white" : ""
                                    }`}
                            >
                                {task.completed && <Check className="h-3 w-3 text-gray-500" />}
                            </div>
                            <span className="text-sm">{task.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Tasks;

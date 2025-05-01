import { Bot, Brain, Calendar, Clock, Smile, BookOpen } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const LeftPart = () => {
    const chips = [
        {
            label: "Study tips for focus",
            icon: <Brain className="h-3 w-3" />,
        },
        {
            label: "Help me plan my day",
            icon: <Calendar className="h-3 w-3" />,
        },
        {
            label: "5-minute break ideas",
            icon: <Clock className="h-3 w-3" />,
        },
        {
            label: "I'm feeling stressed",
            icon: <Smile className="h-3 w-3" />,
        },
        {
            label: "Read something inspiring",
            icon: <BookOpen className="h-3 w-3" />,
        }
    ]
    return (
        <div className="rounded-lg text-black shadow-md w-[70%] h-[600px] flex flex-col">
            {/* Header with image and title */}
            <div className="flex items-center gap-4">
                <img
                    src="/image.png"
                    alt="FocusFuel Assistant"
                    className="w-[60px] h-[60px] rounded-md p-1"
                />
                <h3 className="text-2xl font-semibold tracking-tight">FocusFuel Assistant</h3>
            </div>

            {/* Chat area */}
            <div className="p-6 flex-1 overflow-y-auto bg-gray-50">
                <div className="flex flex-col gap-4">
                    {/* Message bubble */}
                    <div className="flex w-full gap-3 py-2 justify-start">
                        {/* Avatar with icon */}
                        <span className="flex items-center justify-center rounded-full h-8 w-8 bg-blue-900">
                            <Bot className="h-5 w-5 text-white" />
                        </span>

                        {/* Message content */}
                        <div className="rounded-lg px-4 py-2 max-w-[80%] break-words bg-gray-200 text-gray-800">
                            <p>Hi there! I'm your FocusFuel AI assistant. How can I help you with your studying today?</p>
                            <div className="text-xs mt-1 text-gray-500">01:19 PM</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='items-center p-6 flex flex-col gap-4 pt-6'>
                <div className="flex flex-wrap gap-2">
                    {chips.map((chip, index) => (
                        <button
                            key={index}
                            className="justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 rounded-full flex items-center gap-1.5 text-sm"
                        >
                            {chip.icon}
                            {chip.label}
                        </button>
                    ))}
                </div>
                <div className="flex w-full items-center gap-2">
                    <input
                        type="text"
                        placeholder="Type your message..."
                        className="flex-1 h-10 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="bg-blue-600 text-white hover:bg-blue-700 h-10 w-10 rounded-md flex items-center justify-center">
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LeftPart;
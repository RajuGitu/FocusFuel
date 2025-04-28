import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCheckCircle, faBullseye } from '@fortawesome/free-solid-svg-icons';

const Grid = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-xl shadow-lg">
                <FontAwesomeIcon icon={faBook} className="text-3xl text-blue-600" />
                <h3 className='text-lg font-medium mt-2'>Subject</h3>
                <span className='text-sm text-gray-500'>MatheMatics</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-xl shadow-lg">
                <FontAwesomeIcon icon={faCheckCircle} className="text-3xl text-green-600" />
                <h3 className='text-lg font-medium mt-2'>Tasks</h3>
                <span className='text-sm text-gray-500'>3 Remaining</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-xl shadow-lg">
                <FontAwesomeIcon icon={faBullseye} className="text-3xl text-yellow-600" />
                <h3 className='text-lg font-medium mt-2'>Goals</h3>
                <span className='text-sm text-gray-500'>2 Hours</span>
            </div>
        </div>
    );
};

export default Grid;

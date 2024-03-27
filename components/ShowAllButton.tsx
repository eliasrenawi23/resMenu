import React from 'react'


type ShowAllButtonProps = {
    showAll: boolean;
    setShowAll: React.Dispatch<React.SetStateAction<boolean>>;
};
const ShowAllButton: React.FC<ShowAllButtonProps> = ({ showAll, setShowAll }) => {

    return (
        <button onClick={() => setShowAll(!showAll)}
            className={`bg-black text-white dark:bg-white dark:text-black px-2 py-1 rounded-md shadow-md text-sm focus:outline-none focus:ring focus:ring-gray-800 dark:focus:ring-gray-800`}
        >
            {showAll ? 'Hide' : 'Show All'}
        </button>
    );
}

export default ShowAllButton
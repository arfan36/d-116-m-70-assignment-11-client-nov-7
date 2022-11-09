import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title}Foodie`;
    }, [title]);
};

export default useTitle;
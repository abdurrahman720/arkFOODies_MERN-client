import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title}- ARK FOODies`
    }, [title])
};

export default useTitle;
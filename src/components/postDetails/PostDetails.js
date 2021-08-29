import { useLocation } from "react-router";

export const PostDetails = () => {
    const { state } = useLocation();

    return (
        <div>
            {JSON.stringify(state)}
        </div>
    );
}

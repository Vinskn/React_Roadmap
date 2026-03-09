// HOC adalah function yang menerima component dan mengembalikan component

import getUser from "./getUser";


export default function myHoc(Component: React.ComponentType) {
    return function WrappedComponent() {
        const user: string | null = getUser();
        if (!user) return <p>Must Login First</p>;
        return <Component />;
    };
}
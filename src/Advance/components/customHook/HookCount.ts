import { useEffect, useState } from "react";

export const useCount = (num: number[], trigger: boolean) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(0);

    useEffect(() => {
        const calc = num.reduce((a, b) => a + b, 0);

        const timer = setTimeout(() => {
            setData(calc);
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, [trigger]);

    return { data, loading, setLoading };
};

import React, { useEffect, useState } from "react";

interface objType{
    id: number
    make_id: number
    make: string
    name: string
}

const NoTan = () => {
    const [ loading, setLoading ] = useState<boolean>(true);
    const [ error, setError ] = useState<boolean>(false);
    const [ data, setData ] = useState<objType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch("/api/models/v2");
                const data = await response.json();
                setData(data.data);
            } catch (e) {
                setError(true);
                console.log(e);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if(loading) return <div>Loading...</div>;
    if(error) return <div>Error</div>;

    return (
        <div>
            <h2 className="text-xl font-bold">No Tanstack</h2>
            {data.slice(0, 10).map((item) => (
                <div key={item.id}>
                    <p>{item.make} - {item.name}</p>
                </div>
            ))}
        </div>
    );
};

export default NoTan;

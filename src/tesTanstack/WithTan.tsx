import { useQuery } from "@tanstack/react-query";
import React from "react";


interface objType{
    id: number
    make_id: number
    make: string
    name: string
}


const WithTan = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["repoData"],
        queryFn: async () => {
            const response = await fetch("/api/models/v2");
            const data = await response.json();
            return data.data;
        },
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;

    return (
        <div>
            <h2 className="text-xl font-bold">With Tanstack</h2>
            <div>
                {data.slice(0, 10).map((item: objType) => (
                    <div key={item.id}>
                        <p>
                            {item.make} - {item.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WithTan;

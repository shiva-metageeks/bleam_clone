"use client";

export default function CompetitionPage({params}: {params: {id: string}}) {
    const {id} = params;

    return (
        <div>
            <h1>Competition Page</h1>
            <h2>{id}</h2>
        </div>
    )
}
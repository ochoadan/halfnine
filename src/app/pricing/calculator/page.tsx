'use client'

import { useState } from 'react';

export default function Home() {
    const [numDevelopers, setNumDevelopers] = useState(0);
    const [avgHourlyRate, setAvgHourlyRate] = useState(0);
    const [numHours, setNumHours] = useState(0);
    const [totalCost, setTotalCost] = useState<number | null>(null);

    const calculateCost = () => {
        if (numDevelopers && avgHourlyRate && numHours) {
            setTotalCost(numDevelopers * avgHourlyRate * numHours);
        }
    };

    const handleExperienceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        switch (e.target.value) {
            case 'junior':
                setAvgHourlyRate(25);
                break;
            case 'mid':
                setAvgHourlyRate(50);
                break;
            case 'senior':
                setAvgHourlyRate(100);
                break;
            default:
                setAvgHourlyRate(0);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <div className="flex flex-col w-1/2 p-6 m-2 bg-white rounded shadow-md">
                <label className="m-2">Number of developers</label>
                <input type="number" className="p-2 border rounded" onChange={(e) => setNumDevelopers(Number(e.target.value))} />

                <label className="m-2">Developer experience level</label>
                <select className="p-2 border rounded" onChange={handleExperienceChange}>
                    <option value="">Select experience level</option>
                    <option value="junior">Junior ($25/hr)</option>
                    <option value="mid">Mid-Level ($50/hr)</option>
                    <option value="senior">Senior ($100/hr)</option>
                </select>

                <label className="m-2">Estimated number of hours</label>
                <input type="number" className="p-2 border rounded" onChange={(e) => setNumHours(Number(e.target.value))} />

                <button className="p-2 my-4 bg-sky-600 text-white rounded" onClick={calculateCost}>Calculate Cost</button>

                {totalCost !== null && <div className="m-2">Estimated cost: ${totalCost}</div>}
            </div>
        </div>
    );
}

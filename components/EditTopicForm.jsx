"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm({ id, title, description, image }) {
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);
    const [newImage, setNewImage] = useState(image);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ newTitle, newDescription, newImage }),
            });

            if (!res.ok) {
                throw new Error("Failed to update topic");
            }

            router.push("/");
            router.refresh();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
                onChange={(e) => setNewTitle(e.target.value)}
                value={newTitle}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Topic Title"
            />

            <input
                onChange={(e) => setNewDescription(e.target.value)}
                value={newDescription}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Topic Description"
            />

            <input
                onChange={(e) => setNewImage(e.target.value)}
                value={newImage}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Image URL"
            />

            <button className="bg-sky-500 font-bold rounded-md text-white py-3 px-6 w-fit">
                Update Topic
            </button>
        </form>
    );
}
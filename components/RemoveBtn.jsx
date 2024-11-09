"use client"

import { HiOutlineTrash } from "react-icons/hi"
import {useRouter} from "next/navigation";

export default function Removebtn({ id }) {
    const router=useRouter();
    const removeTopic = async () => {

        const confirmed = confirm('Are you sure?')
        if (confirmed) {
            const res = await fetch(`http://localhost:3000/api/topics?_id=${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                alert("Topic removed successfully.");
                router.refresh();
            } else {
                alert("Failed to remove the topic.");
            }



        }
    };

    return (
        <button onClick={removeTopic} className="text-red-400" >
            <HiOutlineTrash size={24} />
        </button>
    );
}

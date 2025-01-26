"use client";

import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export default function DeleteBtn({ id }) {
  const handleDelete = async () => {
    const confirmed = confirm("Are your sure?");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/posts?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        window.location.reload();
      }
    }
  };

  return (
    <a
      onClick={handleDelete}
      className="bg-red-600 text-white border py-2 rounded-md text-lg my-2 px-3 ml-1"
    >
      {/* Delete */}
      <DeleteIcon />
    </a>
  );
}

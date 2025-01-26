"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import DeleteBtn from "@/components/DeleteBtn";
import EditIcon from "@mui/icons-material/Edit";

export default function Product() {
  const [postData, setPostData] = useState([]);

  console.log(postData);

  const getPosts = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/posts", {
        method: "GET",
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch posts");
      }

      const data = await res.json();
      setPostData(data.posts);
    } catch (error) {
      console.log("Error loading posts:", error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <main className="container mx-auto my-3">
      <h1>การขับเคลื่อนยุทธศาสตร์ชาติ 20 ปี</h1>
      <hr className="my-3" />
      <button className="bg-green-600 p-3 text-white rounded">
        <Link href="/create">Create Post</Link>
      </button>
      <div className="grid grid-cols-4 mt-3 gap-5">
        {postData && postData.length > 0 ? (
          postData.map((val) => (
            <div key={val._id} className="shadow-xl my-10 p-10 rounded-xl">
              <h4>{val.title}</h4>
              <Image src={val.img} width={200} height={200} alt={val.title} />
              <p>{val.content}</p>
              <div className="mt-5">
                <Link
                  className="bg-green-600 text-white border py-2 rounded-md text-lg my-2 px-3"
                  href={`/edit/${val._id}`}
                >
                  {/* Edit */}
                  <EditIcon />
                </Link>
                <a className="cursor-pointer">
                  <DeleteBtn id={val._id} />
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="bg-gray-300 p-3 my-3">You do not have any posts yet.</p>
        )}
      </div>
    </main>
  );
}

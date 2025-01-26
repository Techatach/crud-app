import React from "react";
import Link from "next/link";

export default async function ProductList() {
  return (
    <div className="px-72 mt-10">
      {/* // <section className="mx-60"> */}
      <div className="overflow-x-auto">
        <div className="flex justify-center items-center">
          <h1 className="font-bold py-10 text-2xl">
            การประเมินยุทธศาสตร์ชาติ 20 ปี
          </h1>
        </div>
        <div className="text-right">
          <Link href="/addProduct" className="btn btn-primary">
            Add Product
          </Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Edit & Delete</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}

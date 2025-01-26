import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-lg p-3 mb-5 bg-body rounded">
      <div className="navbar-start flex justify-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link
          // href="/products"
          href="/"
          className="btn btn-ghost text-xl hover:text-green-600"
        >
          หลักสูตรรัฐประศาสนศาสตร์
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>
            <details>
              <summary>เกี่ยวกับ</summary>
              <ul className="p-2">
                <li>
                  <a>การเรียนการสอน</a>
                </li>
                <li>
                  <a>การวิจัย</a>
                </li>
                <li>
                  <a>การบริการวิชาการ</a>
                </li>
                <li>
                  <a>การทำนุบำรุงศิลปวัฒนธรรม</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>อาจารย์ผู้รับผิดชอบหลักสูตร</a>
          </li>
          <li>
            <details>
              <summary>AI ตรวจวินิจฉัยโรค</summary>
              <ul className="p-2">
                <li>
                  <a>AI ตรวจมะเร็งผิวหนัง</a>
                </li>
                <li>
                  <a>AI ตรวจมะเร็งปอดและลำไส้</a>
                </li>
                <li>
                  <a>AI ตรวจมะเร็งทรวงอก</a>
                </li>
                <li>
                  <a>AI ตรวจเบาหวานในสตรีมีครรภ์</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>องค์กรเสมือนจริง</a>
          </li>
          <li>
            <details>
              <summary>การจัดอันดับในกลุ่มประเทศ AEC</summary>
              <ul className="p-2">
                <li>
                  <a>ดัชนีคอรัปชัน</a>
                </li>
                <li>
                  <a>ดัชนีความสุข</a>
                </li>
                <li>
                  <a>GDP ต่อหัว</a>
                </li>
                <li>
                  <a>ความเหลื่อมล้ำ</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>ChatGPT รัฐธรรมนูญไทย</a>
          </li>
          <li>
            <details>
              <summary>การประเมินนโยบายสาธารณะ</summary>
              <ul className="p-2">
                <li>
                  <a href="/productData">การประเมินแผนแม่บท</a>
                </li>
                <li>
                  <a>การประเมินดัชนีความสุข</a>
                </li>
                <li>
                  <a>การประเมิน</a>
                </li>
                <li>
                  <a>การประเมิน</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>ติดต่อ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-success m-2 text-white">Sign In</a>
        <a className="btn btn-primary">Sign Up</a>
      </div>
    </div>
  );
}

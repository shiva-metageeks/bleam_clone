"use client"
import {nextImports,icons} from "@/utils/imports/config";
const {Link} = nextImports;
const {FaHome,IoMdSettings,FaUserCircle,RiArrowRightSLine,FaUserEdit} = icons;

const Breadcrumbs = ({ BreadcrumbsArray }: { BreadcrumbsArray: string[] }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        {BreadcrumbsArray.map((item, index) => (
          <li className="inline-flex items-center" key={index}>
            <Link
              href={(item==="Home" && "/") || (item==="Brand" && "/brand/profile") || (item==="Settings" && "/settings") || (item==="Profile" && "/profile") || (item==="Edit Profile" && "/edit-profile") || "#"}
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600"
            >
            {
              (item==="Home" && <FaHome/>) ||
              (item==="Brand" && <FaHome/>) ||
              (item==="Settings" && <IoMdSettings/>) ||
              (item==="Profile" && <FaUserCircle/>) ||
              (item==="Edit Profile" && <FaUserEdit/>)
            }
              <span className="mx-2">{item}</span>
            </Link>
            {
              index !== BreadcrumbsArray.length - 1 ? <RiArrowRightSLine/> : null
            }
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;

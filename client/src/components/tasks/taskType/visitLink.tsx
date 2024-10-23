import { ExpandForm } from "@/types/task/task";
import { icons } from "@/utils/imports/config";
const {IoIosArrowDown,IoIosArrowForward}=icons;

const VisitLink = ({expand,setExpand}:{
    expand:ExpandForm,
    setExpand:React.Dispatch<React.SetStateAction<ExpandForm>>
}) => {
    return (
         <div className="flex flex-col gap-2 shadow-md rounded-md mb-4">
                    <div
                      className="flex justify-between items-center bg-orange-500 text-white rounded-t-md px-4 py-2 cursor-pointer"
                      onClick={() =>
                        setExpand({ ...expand, visitLink: !expand.visitLink })
                      }
                    >
                      <div className="text-md font-bold">Visit link</div>
                      <div className="flex justify-center items-center font-bold">
                        {expand.visitLink ? (
                          <IoIosArrowDown />
                        ) : (
                          <IoIosArrowForward />
                        )}
                      </div>
                    </div>
                    <div
                      className={`flex flex-col gap-2 p-4 ${
                        expand.visitLink ? "block" : "hidden"
                      }`}
                    >
                      <div className="flex flex-col gap-2">
                        <label htmlFor="title" className="text-sm font-bold">
                          Title
                        </label>
                        <input
                          type="text"
                          id="title"
                          placeholder="Visit This Page to Enter"
                          className="border border-gray-500 rounded-md p-2"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="link" className="text-sm font-bold">
                          Link
                        </label>
                        <input
                          type="text"
                          id="link"
                          placeholder="https://example.com"
                          className="border border-gray-500 rounded-md p-2"
                        />
                      </div>
                    </div>
                  </div>
    )
}

export default VisitLink;

import Preview from "./Preview";
import ResumePDF from "./ResumePDF";

const Header = () => {

  return (
    <>
      <div className="fixed w-full z-10 top-0 py-2 bg-white border-b border-blue-500">
        <div className="flex justify-end gap-2 mx-auto md:w-2/3 lg:w-1/2">
          <Preview />
          <ResumePDF />
        </div>
      </div>
    </>
  )
}

export default Header;
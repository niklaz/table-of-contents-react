import ChapterList from "../components/ChapterList";

/*
*  Sidebar panel that displays ToC tree
*
* @returns {JSX.Element} - Sidebar layout component
*
* */
export default function Sidebar() {


  return (
      <div className="sidebar">
            <ChapterList/>
      </div>
  );
}
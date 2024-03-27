import ChapterContent from "../components/ChapterContent";

/*
* Display the main content of the active Table of Content's chapter and its children via the ChapterContent component.
* */
export default function Main() {
  return (
      <>
        <div className="main">
            <ChapterContent/>
        </div>
      </>
  );
}
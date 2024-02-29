const ExportJSON = () => {

  const handleExport = () => {
    const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(JSON.parse(localStorage.getItem('resumeData')), null, 2)
    )}`;
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "resume.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return <button className="btn border-none hover:bg-gray-200 w-[120px]" type="button" onClick={handleExport}>匯出JSON</button>
}

export default ExportJSON;


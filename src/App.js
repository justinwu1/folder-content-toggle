import { render } from "@testing-library/react";
import Folder from './Folder';
const App = () => {
  return (
    <div>
      <Folder folderName = "home" file1 = "file1" file2 = "file2" file3 = "file3"/>
    </div>
  );
}

export default App;

// import axios from "axios";
import { useEffect, useState } from "react";
// import { Tree } from 'react-arborist';
// import Node from './node.jsx';

// const FetchData = () => {
//   const [post, setPost] = useState(null);
//   const [data, setData] = useState([]);

//   const baseURL = "https://mocki.io/v1/07d8560b-95ee-4a05-b3bb-b860f387780c";

//   useEffect(() => {
//     axios.get(baseURL).then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   useEffect(() => {
//     if (post) {
//       setData([post]);
//     }

//   }, [post]);
// console.log(data)
//   const idAccessor = (post) => (post ? post.name : null);

//   return (
//     <Tree
//       initialData={data}
//       idAccessor={idAccessor}
//       openByDefault={false}
//       >
//         {Node}
//       </Tree>
    
//   );
// };

// export default FetchData;




import { data } from "./data";
import { AiFillFolder, AiFillFile } from "react-icons/ai";
import { MdArrowRight, MdArrowDropDown } from "react-icons/md";

const TreeNode = ({ node }) => {
  const { name, type, children } = node;
  const [isOpen, setIsOpen] = useState(false);

  const FolderIcon = () => (isOpen ? <MdArrowDropDown /> : <MdArrowRight />);
  const FileIcon = () => <AiFillFile />;
  const FolderFillIcon = () => <AiFillFolder />;

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ marginLeft: '20px' }}>
      <span onClick={type === 'folder' ? handleToggle : null} // style={{ cursor: type === 'folder' ? 'pointer' : 'default' }}
      >
        <span>{type==='folder' ?  <FolderIcon /> :null } </span>
        <span>{type === 'file' ? <FileIcon /> :<FolderFillIcon/> } {name} </span>
      </span>
      {isOpen && children && (
        <div style={{ marginLeft: '20px' }}>
          {children.map((child) => (
            <TreeNode key={child.name} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};


const FetchData = () => {
  return (
    <div>
      {data.map((node) => (
        <TreeNode key={node.name} node={node} />
      ))}
    </div>
  );
};

export default FetchData;
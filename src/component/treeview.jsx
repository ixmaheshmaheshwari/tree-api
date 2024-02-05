import axios from "axios";
import { useEffect, useState } from "react";
import { Tree } from 'react-arborist';
import Node from './node.jsx';

const FetchData = () => {
  const [post, setPost] = useState(null);
  const [data, setData] = useState([]);

  const baseURL = "https://mocki.io/v1/07d8560b-95ee-4a05-b3bb-b860f387780c";

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  useEffect(() => {
    if (post) {
      setData([post]);
    }

  }, [post]);
console.log(data)
  const idAccessor = (post) => (post ? post.name : null);

  return (
    <Tree
      initialData={data}
      idAccessor={idAccessor}
      openByDefault={false}
      >
        {Node}
      </Tree>
    
  );
};

export default FetchData;
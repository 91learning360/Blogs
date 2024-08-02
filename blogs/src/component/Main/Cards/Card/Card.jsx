import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaPencilRuler } from "react-icons/fa";


const Card = ({ title, paragraph, img, isVerified, id, handleDeleteProp, updateBlog }) => {

  const handleDelete = () => {
    handleDeleteProp(id);

  }

  const handleUpdate = () => {
    updateBlog(id)
  }

  return (
    <div style={{ border: "2px solid black", display: 'flex', width: "300px", margin: "5px" }}>
      <img style={{ width: "100px" }} src={img} alt="" />
      <div style={{ padding: '10px' }}>
        <h1>{title}</h1>
        <p>{paragraph}</p>
        <p>verified: {isVerified ? "✅" : "❌"}</p>
        {/* {isVerified && '✅'} */}
        <button onClick={handleDelete} style={{width: "50px",color: 'red', margin: "0 10px",  fontSize: "20px"}}>
          <MdDelete />
        </button>
        <button onClick={handleUpdate} style={{width: "50px",color: "green", margin: "0 10px",  fontSize: "20px"}}>
        <FaPencilRuler/>
        </button>
      </div>
    </div>
  )
}

export default Card
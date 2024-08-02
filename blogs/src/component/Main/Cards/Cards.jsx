import React, { useState } from 'react'
import Card from './Card/Card'
import FileBlog from '../../../assets/blogs.js'
import CreateBlog from '../CreateBlog/CreateBlog.jsx'

const Cards = () => {
  const [blogs, setBlogs] = useState(FileBlog);
  const [updateData, setUpdateData] = useState(null);


  const updateBlog = (index) => {

    setUpdateData(blogs[index]);

  }

  const addBlogs = (blog) => {
    if (updateData == null) {
      setBlogs((prev) => {
        return [...prev, blog];
      })
    } else {
     
      setBlogs((prev) => {
        return prev.filter((value, index) => {
          return value.id != updateData.id;
        })
      })

      setBlogs((prev) => {
        return [...prev, blog]
      })

    }
  }

  const handleDelete = (id) => {
    setBlogs((prev) => {
      return prev.filter((value, index) => {
        console.log(index, id);
        return index != id;
      })
    })
  }



  return (
    <div>
      <CreateBlog updateData={updateData} add_Func={addBlogs} />

      <div style={{ display: "flex", flexWrap: 'wrap' }}>

        {
          blogs.map((value, index) => {
            return (
              <Card updateBlog={updateBlog} handleDeleteProp={handleDelete} isVerified={value.isVerified} id={index} key={index} title={value.title} paragraph={value.paragraph} img={value.img} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Cards
import React, { useEffect, useState } from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const BlogReport = () => {
  const [blogsArray, setBlogsArray] = useState([]);

  useEffect(() => {
    getAllBlogs();
  }, []);

  //get all blogs
  const getAllBlogs = async () => {
    console.log('view blogs');
    try {
      const fetchData = await fetch('http://localhost:8080/blogs/getAllBlogs'); //fetch data
      console.log(fetchData);

      const jsonData = await fetchData.json();
      console.log(jsonData);
      if (jsonData) {
        let blogsArray = [];
        for (let i = 0; i < jsonData.length; i++) {
          let temp = {
            id: jsonData[i]._id,
            image: jsonData[i].img,
            title: jsonData[i].title,
            subDescription: jsonData[i].subDescription,
          };
          blogsArray.push(temp);
        }
        setBlogsArray(blogsArray);
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <>
      <ReactHTMLTableToExcel
        id="test-table-xls-button"
        className="download-table-xls-button btn btn-dark"
        table="table-to-xls"
        filename="Full User Details"
        sheet="tablexls"
        buttonText="Download To Excel"
      />

      <table id="table-to-xls">
        <tr>
          <th>Blog Title</th>
          <th>Blog Image Url</th>
          <th>Blog Sub description</th>
        </tr>
        {blogsArray.map((blogs) => {
          return (
            <tr>
              <td>{blogs?.title}</td>
              <td>{blogs?.img}</td>
              <td>{blogs?.subDescription}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default BlogReport;

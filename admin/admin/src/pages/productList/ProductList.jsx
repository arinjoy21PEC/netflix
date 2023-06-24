import "./productList.css";
import { DataGrid } from '@mui/x-data-grid';
import {  Link, useNavigate } from "react-router-dom";
import { DeleteOutlineOutlined } from "@mui/icons-material";
import { useContext } from "react";
import {MovieContext} from "../../context/movieContext/MovieContext";
import { useEffect } from "react";
import { deleteMovie, getMovies } from "../../context/movieContext/apiCalls";



export default function ProductList() {
  const {movies,dispatch} = useContext(MovieContext)

  useEffect(()=>{
    getMovies(dispatch)
  },[dispatch])

  //console.log(movies)

  const handleDelete = (id) => {
    deleteMovie(id, dispatch)
  };


  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "movie",
      headerName: "Movie",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "genre", headerName: "Genre", width: 120 },
    { field: "year", headerName: "Year", width: 120 },
    { field: "limit", headerName: "Limit", width: 120 },
    { field: "isSeries", headerName: "isSeries", width: 120 },
    
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        //console.log(params.row)
        const data=params.row;
        
        return (
          <>
            <Link to={`/movies/find/${params.row._id}`}
            state={{movie:params.row}}>
            {/* <Link
            to={{ pathname: "/movies/find/" + params.row._id, movie: data}} 
            > */}
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutlineOutlined
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
              />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      < DataGrid
        rows={movies}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(r)=>r._id}
      />
    </div>
  );
}
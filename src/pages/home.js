import React, { useEffect, useState } from "react";
import Pagination from "../components/pagination";
import Table from "../components/table";
import axios from "axios";
import "../styles/home.css";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [perPage, setPerPage] = useState(5);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setPosts(res.data);
    });
  }, []);

  const handleSelect = (e) => {
    setPerPage(e.target.value);
  };

  const handleActivePage = (num) => {
    setPage(num);
  };

  const lastPage = page * perPage;
  const firstPage = lastPage - perPage;
  const curentPage = posts.slice(firstPage, lastPage);

  return (
    <>
      <div className="home">
        <div className="container">
          <div className="home__wrapper">
            <div className="header_table">
              <div className="search">
                <input
                  type="text"
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Поиск..."
                />
              </div>
            </div>
            <div className="table_list">
              <Table
                items={curentPage}
                page={page}
                perPage={perPage}
                search={search}
              />
            </div>
            <div className="paginate_wrapper">
              <div className="select_wrapper">
                <h4>Кол-во пост на странице: </h4>
                <select className="form-select" onChange={handleSelect}>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                </select>
              </div>
              <Pagination
                perPage={perPage}
                totalItems={posts.length - 1}
                handleActivePage={handleActivePage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

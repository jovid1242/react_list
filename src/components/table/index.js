import React, { useState } from "react";
import Modal from "../modal";
import "../../styles/table.css";

export default function Index({ items, page, perPage, search }) {
  const [modalShow, setModalShow] = useState(false);
  const [modalInfo, setModalInfo] = useState([]);

  const posts = items.filter((val) => {
    if (!search === "") {
      return val;
    } else if (
      val.title?.toLowerCase().includes(search.toLowerCase()) ||
      val.body?.toLowerCase().includes(search.toLowerCase())
    ) {
      return val;
    }
  });

  const show = (el) => {
    setModalShow(true);
    setModalInfo(el);
  };

  return (
    <>
      <table>
        <tbody>
          <tr className="head_tbl">
            <th>#</th>
            <th>Заголовок</th>
            <th>Описание</th>
            <th>Username</th>
          </tr>
          {posts?.map((el, index) => {
            return (
              <tr key={el.id} onClick={() => show(el)}>
                <td>{(page - 1) * perPage + (index + 1)}</td>
                <td>{el.title}</td>
                <td>{el.body.substr(0, 150) + "..."}</td>
                <td>Jovid ;)</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Modal
        show={modalShow}
        modalInfo={modalInfo}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

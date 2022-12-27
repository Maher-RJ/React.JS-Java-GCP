import React, { useEffect, useState } from "react";
import {
  TableBody,
  TableRow,
  TableCell,
  CircularProgress,
} from "@material-ui/core";
import search from "../../assets/search.svg";
import { getGcsData } from "../../redux/actions/gcsDataActions";
import useTable from "./components/useTable";
import { useDispatch, useSelector } from "react-redux";
import "./gcsData.css";

const Home = () => {
  const dispatch = useDispatch();
  const _gcsData = useSelector((state) => state.gcsData);
  // eslint-disable-next-line no-unused-vars
  const [records, setRecords] = useState([]);

  let headCells = [];
  headCells = [
    { id: "id", label: "Id" },
    { id: "name", label: "Name" },
    { id: "status", label: "status" },
    { id: "description", label: "Description" },
    { id: "delta", label: "Delta" },
    { id: "createdOn", label: "CreatedOn" },
  ];

  // eslint-disable-next-line no-unused-vars
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });

  useEffect(() => {
    for (let i = 0; i < 25; i++) {
      dispatch(getGcsData(i));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (_gcsData.data?.length > 0) {
      setRecords(_gcsData.data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_gcsData.data]);

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(records, headCells, filterFn);

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        // eslint-disable-next-line eqeqeq
        if (target.value == "") return items;
        else
          return items.filter((x) =>
            x.name.toLowerCase().includes(target.value.toLowerCase())
          );
      },
    });
  };

  const handleStatusFilter = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        // eslint-disable-next-line eqeqeq
        if (target.value == "") return items;
        else
          return items.filter((x) =>
            x.status.toLowerCase().includes(target.value.toLowerCase())
          );
      },
    });
  };

  return (
    <div className="adminside-pages-wrapper">
      <>
        <div className="searchs-wrapper">
          <div className="leftSearch">
            <div className="srch-wrapper">
              <img src={search} alt="search" />
              <input
                type="text"
                onChange={handleSearch}
                placeholder="Filter by name"
              />
            </div>
          </div>
          <div className="leftSearch">
            <div className="srch-wrapper">
              <img src={search} alt="search" />
              <input
                type="text"
                onChange={handleStatusFilter}
                placeholder="Filter by Status"
              />
            </div>
          </div>
        </div>
        <div className="table-wrapper">
          <TblContainer>
            <TblHead />
            <TableBody>
              {recordsAfterPagingAndSorting().map((item, i) => (
                <TableRow key={i}>
                  <TableCell
                    style={{
                      color: "#000",
                      fontFamily: "Rajdhani",
                      fontWeight: "500",
                      fontSize: "22px",
                      lineHeight: "20px",
                    }}
                  >
                    {item.id}
                  </TableCell>
                  <TableCell
                    style={{
                      color: "#000",
                      fontFamily: "Rajdhani",
                      fontWeight: "500",
                      fontSize: "22px",
                      lineHeight: "20px",
                    }}
                  >
                    {item.name}
                  </TableCell>
                  <TableCell
                    style={{
                      color: "#000",
                      fontFamily: "Rajdhani",
                      fontWeight: "500",
                      fontSize: "22px",
                      lineHeight: "20px",
                    }}
                  >
                    {item.status}
                  </TableCell>
                  <TableCell
                    style={{
                      color: "#000",
                      fontFamily: "Rajdhani",
                      fontWeight: "500",
                      fontSize: "22px",
                      lineHeight: "20px",
                    }}
                  >
                    {item.description}
                  </TableCell>
                  <TableCell
                    style={{
                      color: "#000",
                      fontFamily: "Rajdhani",
                      fontWeight: "500",
                      fontSize: "22px",
                      lineHeight: "20px",
                    }}
                  >
                    {item.delta}
                  </TableCell>
                  <TableCell
                    style={{
                      color: "#000",
                      fontFamily: "Rajdhani",
                      fontWeight: "500",
                      fontSize: "22px",
                      lineHeight: "20px",
                    }}
                  >
                    {item.createdOn}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </TblContainer>
        </div>
        <>
          {_gcsData.getComunityLoading ? (
            <div style={{ textAlign: "center", padding: "20px" }}>
              <CircularProgress />
            </div>
          ) : null}
        </>
        <TblPagination />
      </>
      {/* </Paper> */}
    </div>
  );
};
export default Home;

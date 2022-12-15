import React from "react";
import { BackBtn } from "components/BackButton/BackBtn";
import { ListCard } from "components/ListCard/ListCard";

export const ReactTable = () => {
  const topics = [
    { title: "Basic Table", link: "/react-table/basic-table" },
    { title: "Filtering Table", link: "/react-table/filtering-table" },
    { title: "Pagination Table", link: "/react-table/pagination-table" },
    { title: "Sorting Table", link: "/react-table/sorting-table" },
  ];
  return (
    <>
      <BackBtn />
      <ListCard title="React Table" data={topics} />
    </>
  );
};

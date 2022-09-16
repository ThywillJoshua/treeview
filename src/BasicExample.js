import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import data from "./Data";
import "./BasicExample.css";
import { v4 as uuidv4 } from "uuid";

function renderSubcat(subCategories) {
  const menuLists = [];

  subCategories?.forEach((subCat) => {
    if (subCat?.subCategories?.length < 1)
      menuLists.push(
        <Dropdown.Item key={uuidv4()} href={`#/action`}>
          {subCat.name}
        </Dropdown.Item>
      );

    if (subCat?.subCategories?.length > 0)
      menuLists.push(renderDropdown(subCat.name, subCat.subCategories));
  });

  return menuLists;
}

function renderListItem(categoryName) {
  return (
    <Button key={uuidv4()} variant="success">
      {categoryName}
    </Button>
  );
}

function renderDropdown(categoryName, subCategories) {
  return (
    <Dropdown key={uuidv4()} className="d-inline">
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        {categoryName}
      </Dropdown.Toggle>

      <Dropdown.Menu className="ms-4">
        {renderSubcat(subCategories)}
      </Dropdown.Menu>
    </Dropdown>
  );
}

function BasicExample() {
  const [categories, setCategories] = useState(data);

  function renderComponents() {
    if (categories?.length < 1) return <p>No categories</p>; //Guard Clause

    const menuLists = [];

    categories?.forEach((cat) => {
      if (cat.subCategories?.length < 1)
        menuLists.push(renderListItem(cat.name));

      if (cat.subCategories?.length > 0)
        return menuLists.push(renderDropdown(cat.name, cat.subCategories));
    });

    return menuLists;
  }

  return (
    <>
      <div className="container">{renderComponents()}</div>
    </>
  );
}

export default BasicExample;

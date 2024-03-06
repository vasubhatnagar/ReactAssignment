import { useEffect, useState } from "react";
import EmployeeCard from "./EmployeeCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [dataList, setDataList] = useState([]);
  const [AdmList, setAdmList] = useState([]);
  const [memList, setmemList] = useState([]);

  const handleClick = (e) => {
    setSearchText(e.target.value);
    let filterList = dataList.filter((item) => {
      return (
        item.first_name.toLowerCase().indexOf(e.target.value.toLowerCase()) !==
        -1
      );
    });
    let adminList = filterList.filter((el) => el.role == "admin");
    setAdmList(adminList);

    let memList = filterList.filter((el) => el.role == "member");
    setmemList(memList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let data = await fetch(
      "https://mocki.io/v1/ddb7e0a8-e218-4e36-b1be-b902cdb1c098"
    );
    let dataJson = await data.json();
    setDataList(dataJson);

    let adminList = dataJson.filter((el) => el.role == "admin");
    setAdmList(adminList);

    let memList = dataJson.filter((el) => el.role == "member");
    setmemList(memList);
  };

  return (
    <div>
      <div>
        <div className="parentHeaderDiv">
          <div className="heading1">Team</div>
          <div className="HeaderDiv">
            <div className="SearchDiv">
              <input
                className="searchInput"
                type="text"
                placeholder="Search"
                value={searchText}
                onChange={(e) => {
                  handleClick(e);
                }}
              ></input>
            </div>
          </div>
        </div>
      </div>
      <div className="bodyContainer">
        <h3>*Note, Filter is working for first name on event of (On Change), Also please notice I have created a dummy UI also known as Shimmer UI which is rendered until actual API does not gives the data to applcation.</h3>
        <h2>Administrators</h2>
        {dataList.length > 0 ? (
          <div className="AdminCardParent">
            {AdmList.length > 0 ? (
              AdmList.map((card) => (
                <EmployeeCard
                  key={card.first_name + "_" + card.last_name}
                  info={card}
                />
              ))
            ) : (
              <h1>NO DATA FOUND</h1>
            )}
          </div>
        ) : (
          <Shimmer />
        )}

        <h2>Member</h2>
        {dataList.length > 0 ? (
          <div className="AdminCardParent">
            {memList.length > 0 ? (
              memList.map((card) => (
                <EmployeeCard
                  key={card.first_name + "_" + card.last_name}
                  info={card}
                />
              ))
            ) : (
              <h1>NO DATA FOUND</h1>
            )}
          </div>
        ) : (
          <Shimmer />
        )}
      </div>
    </div>
  );
};

export default Body;

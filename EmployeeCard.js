const EmployeeCard = (props) => {
  const { info } = props;
  return (
    <div>
      <div className="cardParent">
        <div className="leftDiv">
          <img className="empImage" src={info.img}></img>
        </div>
        <div className="rightDiv">
            <h2>{info.first_name + " "+ info.last_name}</h2>
            <div>{info.email}</div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;

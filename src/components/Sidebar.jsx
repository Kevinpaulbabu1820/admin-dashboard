import admin from "../assets/Logo.svg";
const user = {
  name: "Sidebar",
  imageSize: 90,
};

const list = [
  { title: "Home", id: 1 },
  { title: "AddOrganization", id: 2 },
  { title: "AddCollege", id: 3 },
  { title: "AddCompany", id: 4 },
  { title: "CollegeInfo", id: 5 },
  { title: "CompnayInfo", id: 6 },
  { title: "OrganizationInfo", id: 7 },
];
const listItems = list.map((list) => <li key={list.id}>{list.title}</li>);
export default function Sidebar() {
  return (
    <div className="navbar">
      <img
        className="avatar"
        src={admin}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
      <h1>{user.name}</h1>
      <ul>{listItems}</ul>
    </div>
  );
}

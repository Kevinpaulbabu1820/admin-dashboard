import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [university, setUniversity] = useState("");
  const [country, setCountry] = useState("India");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [zone, setZone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submission logic here
    console.log("Form submitted:", {
      name,
      code,
      university,
      country,
      state,
      district,
      zone,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Code:
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </label>
      <br />
      <label>
        Affiliated University:
        <select
          value={university}
          onChange={(e) => setUniversity(e.target.value)}
        >
          <option value="">Select University</option>
          <option value="Kerala Technology University">
            Kerala Technology University
          </option>
          <option value="Calicut University ">Calicut University</option>
          <option value="University C">University C</option>
        </select>
      </label>
      <br />
      <label>
        Country:
        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Australia">Australia</option>
        </select>
      </label>
      <br />
      <label>
        State:
        <select value={state} onChange={(e) => setState(e.target.value)}>
          <option value="">Select State</option>
          {/* Add options for states based on selected country */}
          {country === "India" && (
            <>
              <option value="Kerala">Kerala</option>
              <option value="Thiruvanthapuram">Thiruvanthapuram</option>
              <option value="Kannur">Kannur</option>
            </>
          )}
          {country === "USA" && (
            <>
              <option value="State X">State X</option>
              <option value="State Y">State Y</option>
              <option value="State Z">State Z</option>
            </>
          )}
          {/* Add options for other countries */}
        </select>
      </label>
      <br />
      <label>
        District:
        <select value={district} onChange={(e) => setDistrict(e.target.value)}>
          <option value="">Select District</option>
          <option value="Kerala">Kerala</option>
          <option value="Thiruvanthapuram">Thiruvanthapuram</option>
          <option value="Kannur">Kannur</option>
        </select>
      </label>
      <br />
      <label>
        Zone:
        <select value={zone} onChange={(e) => setZone(e.target.value)}>
          <option value="">Select Zone</option>
          <option value="Upper">Upper</option>
          <option value="Central">Central</option>
          <option value="Lower">Lower</option>
        </select>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;

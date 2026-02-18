import styled from "styled-components";
import Light from "../Light";

const StyledLights = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

export default function Lights() {
  const rooms = [
    "Lieving Room",
    "Kitchen",
    "Bedroom",
    "Bathroom",
    "Garage",
    "Porch",
    "Garden",
    "Office",
  ];
  return (
    <StyledLights>
      <li>
        <Light name={rooms[0]} />
      </li>
      <li>
        <Light name={rooms[1]} />
      </li>
      <li>
        <Light name={rooms[2]} />
      </li>
      <li>
        <Light name={rooms[3]} />
      </li>
      <li>
        <Light name={rooms[4]} />
      </li>
      <li>
        <Light name={rooms[5]} />
      </li>
      <li>
        <Light name={rooms[6]} />
      </li>
      <li>
        <Light name={rooms[7]} />
      </li>
    </StyledLights>
  );
}

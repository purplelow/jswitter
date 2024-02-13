import { Link, Outlet, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { auth } from "@/src/firebase";
import { UserIcon, HomeIcon, ArrowLeftIcon } from "@/src/assets/iconComponents";

const Wrapper = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 4fr;
  padding: 50px 0px;
  width: 100%;
  height: 100%;
  max-width: 860px;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const MenuItem = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  svg {
    width: 30px;
    fill: white;
  }
  &.log-out {
    border-color: tomato;
    svg {
      fill: tomato;
    }
  }
`;

export default function Layout() {
  const navigate = useNavigate();
  const onLogOut = async () => {
    const ok = confirm("Are you sure you want to log out?");
    if (ok) {
      await auth.signOut();
      navigate("/login");
    }
  };

  return (
    <Wrapper>
      <Menu>
        <Link to="/">
          <MenuItem>
            <HomeIcon />
          </MenuItem>
        </Link>
        <Link to="/profile">
          <MenuItem>
            <UserIcon />
          </MenuItem>
        </Link>
        <MenuItem onClick={onLogOut} className="log-out">
          <ArrowLeftIcon />
        </MenuItem>
      </Menu>
      <Outlet />
    </Wrapper>
  );
}

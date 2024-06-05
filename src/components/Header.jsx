import Button from "./Button";

const Header = ({ user, onClick }) => {
  return (
    <div className="navbar bg-neutral text-white">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Welcome, {user.name}</a>
      </div>
      {user && (
        <div className="flex-none">
          <Button modelBtn="btn-ghost" type="button" onClick={onClick}>
            LogOut
          </Button>
        </div>
      )}
    </div>
  );
};

export default Header;

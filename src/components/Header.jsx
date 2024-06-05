const Header = ({ user }) => {
  return (
    <div className="navbar bg-neutral text-white">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">To Do List App</a>
      </div>
      {user && (
        <div className="flex-none">
          <button className="btn btn-ghost">LogOut</button>
        </div>
      )}
    </div>
  );
};

export default Header;

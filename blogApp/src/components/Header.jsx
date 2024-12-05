import LoggedInUser from "./LoggedUser";

const Header = () => {
    return (
      <header className="bg-blue-600 text-white shadow-md font-sans font-bold">
        <div className="container mx-auto flex justify-between items-center px-4 py-4">
          <h1 className="text-2xl font-bold">My Blog</h1>
          <LoggedInUser />
        </div>
      </header>
    );
  };
  
  export default Header;
  
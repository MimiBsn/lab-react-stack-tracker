import { Link } from "react-router-dom";

function HomePage({ companies }) {
  console.log(companies);
  return (
    <div id="homePage">
      <h2>Discover Tech Stacks Used by Top Companies</h2>
      <div className="companyList">
        {companies.map((company) => {
          return (
            <Link
              to={`/company/${company.slug}`}
              key={company.id}
              className="companyCard"
            >
              <h2>{company.name}</h2>
              <img src={company.logo} alt="" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;

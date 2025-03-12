import { Link, useParams } from "react-router-dom";

function CompanyPage({ companies }) {
  const { companySlug } = useParams();
  const matchCompany = companies.find((company) => {
    return company.slug === companySlug;
  });
  console.log(matchCompany);
  return (
    <div id="companyProfile">
      <h2>Company Profile</h2>
      {matchCompany && (
        <>
          <div className="companyDetails">
            <div className="companyLogo">
              <Link to={matchCompany.website}>
                <img src={matchCompany.logo} />
              </Link>
            </div>
            <div className="companyInfo">
              <h2>{matchCompany.name}</h2>
              <h4>About</h4>
              <p>{matchCompany.description}</p>
            </div>
          </div>
          <div className="companyTechStack">
            {matchCompany.techStack.map((tech) => {
              return (
                <div className="techCard" key={tech.slug}>
                  <div>
                    <Link to={`/tech/${tech.slug}`}>
                      <img src={tech.image} alt="" />
                    </Link>
                  </div>
                  <p>{tech.name}</p>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default CompanyPage;

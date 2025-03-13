import { Link, useParams, useSearchParams } from "react-router-dom";

function TechnologyPage({ technologies }) {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const fromCompany = searchParams.get("fromCompany");

  const matchTechnology = technologies.find((technology) => {
    return technology.slug === slug;
  });
  return (
    <div>
      <h2>Technology Details</h2>
      {matchTechnology && (
        <>
          <div className="companyDetails">
            <div className="companyLogo">
              <img src={matchTechnology.image} />
            </div>
            <div className="companyInfo">
              <h2>{matchTechnology.name}</h2>
              <h4>About</h4>
              <p>{matchTechnology.description}</p>
            </div>
          </div>
          {fromCompany && (
            <Link to={`/company/${fromCompany}`} className="back-button">
              <button>← Back to {fromCompany} profile</button>
            </Link>
          )}
        </>
      )}
    </div>
  );
}

export default TechnologyPage;

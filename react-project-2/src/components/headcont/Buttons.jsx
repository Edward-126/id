import "boxicons";

export default function Button() {
  return (
    <>
      <div className="row">
        <div className="col">
          <a
            href="https://thili-126.github.io/"
            className="btn btn-primary card-button1"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxs-user-rectangle"></i>&nbsp; Portfolio
          </a>
        </div>
        <div className="col">
          <a
            href="https://www.linkedin.com/in/thilina-rathnayaka-6886b8289/"
            className="btn btn-primary card-button2"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-linkedin-square"></i>&nbsp; LinkedIn
          </a>
        </div>
      </div>
    </>
  );
}

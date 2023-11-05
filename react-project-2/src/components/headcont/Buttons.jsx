import "boxicons";

export default function Button() {
  return (
    <>
      <div className="row">
        <div className="col">
          <a
            href="https://thili-126.github.io/"
            className="btn btn-primary card-button1"
          >
            <i class="bx bxs-user-rectangle"></i>&nbsp; Portfolio
          </a>
        </div>
        <div className="col">
          <a
            href="https://www.linkedin.com/in/thilina-rathnayaka-6886b8289/"
            className="btn btn-primary card-button2"
          >
            <i class="bx bxl-linkedin-square"></i>&nbsp; LinkedIn
          </a>
        </div>
      </div>
    </>
  );
}

import { Team } from "@/types/team";
import Image from "next/image";

const SingleTeam = ({ team }: { team: Team }) => {
  const { name, designation, image, linkedinLink, twitterLink, githubLink } = team;

  return (
    <div className="wow fadeInUp group text-center">
      <div className="team-img-gradient group-hover:before:gradient-3 relative mx-auto mb-7.5 h-50 w-full max-w-50 rounded-full">
        <Image
          src={image}
          alt={name}
          fill
          className="rounded-full object-cover object-center"
        />
      </div>
      <h3 className="mb-2.5 text-heading-6 font-semibold text-white">{name}</h3>
      <p className="mb-6 font-medium">{designation}</p>

      <div className="flex items-center justify-center gap-5">
        <a
          aria-label="social icon"
          href={linkedinLink}
          className="duration-300 ease-in hover:text-white"
        >
          <svg
            className="fill-current"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.762 24 24 21.761 24 19V5C24 2.239 21.762 0 19 0ZM8 19H5V8H8V19ZM6.5 6.732C5.534 6.732 4.75 5.942 4.75 4.968C4.75 3.994 5.534 3.204 6.5 3.204C7.466 3.204 8.25 3.994 8.25 4.968C8.25 5.942 7.467 6.732 6.5 6.732ZM20 19H17V13.396C17 10.028 13 10.283 13 13.396V19H10V8H13V9.765C14.396 7.179 20 6.988 20 12.241V19Z"
              fill=""
            />
          </svg>
        </a>

        <a
          aria-label="social icon"
          href={twitterLink}
          className="duration-300 ease-in hover:text-white"
        >
          <svg
            className="fill-current"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.97812 19.7311C15.0906 19.7311 19.4906 13.0279 19.4906 7.21855C19.4906 7.08105 19.4906 6.84043 19.4562 6.63418C20.3156 6.01543 21.0719 5.2248 21.6562 4.36543C20.8312 4.74355 20.0063 4.9498 19.1469 5.05293C20.075 4.50293 20.7625 3.64355 21.0719 2.6123C20.2125 3.09355 19.3188 3.47168 18.2531 3.67793C17.4281 2.81855 16.3281 2.26855 15.0562 2.26855C12.6156 2.26855 10.6219 4.2623 10.6219 6.70293C10.6219 7.04668 10.6562 7.39043 10.725 7.73418C7.18438 7.49355 3.95312 5.74043 1.75312 3.09355C1.375 3.78105 1.16875 4.50293 1.16875 5.29355C1.16875 6.84043 1.95937 8.14668 3.1625 8.9373C2.44062 8.90293 1.75313 8.69668 1.16875 8.3873C1.16875 8.42168 1.16875 8.42168 1.16875 8.42168C1.16875 10.5186 2.68125 12.3404 4.675 12.7529C4.29688 12.8561 3.88437 12.8904 3.575 12.8904C3.3 12.8904 2.99062 12.8561 2.75 12.7873C3.33437 14.5404 4.95 15.8123 6.875 15.8467C5.3625 17.0154 3.47187 17.7373 1.44375 17.7373C1.03125 17.8061 0.6875 17.7373 0.34375 17.7029C2.2 19.0092 4.50312 19.7311 6.97812 19.7311Z"
              fill=""
            />
          </svg>
        </a>
        <a
          aria-label="social icon"
          href={githubLink}
          className="duration-300 ease-in hover:text-white"
        >
          <svg
            className="fill-current"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_117_13418)">
              <path
                d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974c0 4.406 2.857 8.145 6.821 9.465c.499.09.679-.217.679-.481c0-.237-.008-.865-.011-1.696c-2.775.602-3.361-1.338-3.361-1.338c-.452-1.152-1.107-1.459-1.107-1.459c-.905-.619.069-.605.069-.605c1.002.07 1.527 1.028 1.527 1.028c.89 1.524 2.336 1.084 2.902.829c.091-.645.351-1.085.635-1.334c-2.214-.251-4.542-1.107-4.542-4.93c0-1.087.389-1.979 1.024-2.675c-.101-.253-.446-1.268.099-2.64c0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336a9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021c.545 1.372.203 2.387.099 2.64c.64.696 1.024 1.587 1.024 2.675c0 3.833-2.33 4.675-4.552 4.922c.355.308.675.916.675 1.846c0 1.334-.012 2.41-.012 2.737c0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974C22 6.465 17.535 2 12.026 2z"
                fill=""
              />
            </g>
            <defs>
              <clipPath id="clip0_117_13418">
                <rect width="22" height="22" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default SingleTeam;

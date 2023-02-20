import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "An error Occured!";
  let message = "Soething went wrong!!";

  if (error.status === 500) {
    // message = JSON.parse(error.data).message;

    // if using json utility.. no need to parse data
    message = error.data.message;

  }

  if (error.status === 404) {
    title = "Not Found";
    message = "Page Not Found";
  }

  return (
    <PageContent title={title}>
      <p>{message}</p>
    </PageContent>
  );
};

export default ErrorPage;

import { useRouteError } from 'react-router-dom';
const ErrorPage = () => {
  const routeError = useRouteError();
  console.log('sss', routeError);
  return (
    <>
      {routeError.status}
      <div>{routeError.error}</div>
    </>
  );
};
export default ErrorPage;

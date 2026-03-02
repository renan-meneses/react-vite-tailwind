import { useAppSelector } from "../app/hooks";

export default function PrivateRoute() {
  const { token } = useAppSelector((s) => s.auth);
  return token ? <Outlet /> : <Navigate to="/login" replace />;
}

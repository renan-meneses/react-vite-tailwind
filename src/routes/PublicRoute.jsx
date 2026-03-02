import { useAppSelector } from "../app/hooks";

export default function PublicRoute() {
  const { token } = useAppSelector((s) => s.auth);
  return token ? <Navigate to="/" replace /> : <Outlet />;
}

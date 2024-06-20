import { AppState, Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const AuthProviderWithNavigate = ({ children }: Props) => {
  const navigate = useNavigate();
  const domain = import.meta.env.VITE_DOMAIN_AUTH0;
  const clientId = import.meta.env.VITE_CLIENTID_AUTH0;
  const redirectUri = import.meta.env.VITE_REDIRECTURI_AUTH0;
  const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

  if (!domain || !clientId || !redirectUri || !audience) {
    throw new Error("Error");
  }

  const onRedirectCallback = (appState?: AppState) => {
    //penjelasan sedikit ketika useLoaction itu di masukan ke appState yang ada di dalam object loginWithReDirect, dan ketika ada maka saat ada permintaan login dan saat login akan di redirect ke halaman sebelumnya atau halaman sebelum kita login.
    navigate(appState?.returnTo || "/auth-callback");
  };

  return (
    <Auth0Provider domain={domain} clientId={clientId} authorizationParams={{ redirect_uri: redirectUri, audience }} onRedirectCallback={onRedirectCallback}>
      {children}
    </Auth0Provider>
  );
};

export default AuthProviderWithNavigate;

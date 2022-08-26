interface ImportMetaEnv {
  readonly VITE_APP_API_DEBITO_BASE_URL: string;
  readonly VITE_APP_API_GERABOLETO_BASE_URL: string;
  readonly VITE_APP_API_GERABOLETO_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

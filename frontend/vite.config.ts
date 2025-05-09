import { defineConfig, loadEnv } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  const resolvedHost = '0.0.0.0';
  const viteHost = env.VITE_HOST?.toLowerCase() || 'localhost';
  const { VITE_GOOGLE_MAPS_API_KEY = ''} = loadEnv(mode, process.cwd(), '');
  console.log(`Resolved host: ${resolvedHost}`);
  console.log(`VITE_HOST (lowercase): ${viteHost}`);

  return defineConfig({
    plugins: [tailwindcss(), tsconfigPaths()],
    server: {
      host: resolvedHost,
      port: parseInt(env.VITE_PORT) || 3000,
      allowedHosts: [viteHost, '127.0.0.1', 'localhost', '0.0.0.0'],
    },
    preview: {
      host: resolvedHost,
      port: parseInt(env.VITE_PORT) || 3000,
      allowedHosts: [viteHost, '127.0.0.1', 'localhost', '0.0.0.0']
    },
    define: {
      'process.env.VITE_GOOGLE_MAPS_API_KEY': JSON.stringify(VITE_GOOGLE_MAPS_API_KEY)
    }
  })
}
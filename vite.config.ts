import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  console.log('\n=== [Vite Build] Environment Variables Debug ===')
  console.log('Mode:', mode)
  console.log('VITE_SUPABASE_URL:', env.VITE_SUPABASE_URL ? '✓ SET' : '✗ MISSING')
  console.log('VITE_SUPABASE_ANON_KEY:', env.VITE_SUPABASE_ANON_KEY ? '✓ SET' : '✗ MISSING')
  console.log('All VITE_* keys:', Object.keys(env).filter(k => k.startsWith('VITE_')))
  console.log('CWD:', process.cwd())
  console.log('=================================================\n')

  return {
    plugins: [react()],
    base: './',
  }
})
// src/testConnection.ts
import 'dotenv/config'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE!
)

async function test() {
  console.log('🔗 Tentative de connexion à Supabase...')

  // essaie de lire les données de la table test_table
  const { data, error } = await supabase
    .from('test_table')
    .select('*')

  if (error) {
    console.error('❌ Erreur :', error)
  } else {
    console.log('✅ Connexion réussie ! Données :', data)
  }
}

test()

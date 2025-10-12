import { Hono } from 'hono';
import { supabase } from '../db/supabaseClient';

const menuApp = new Hono();

menuApp.get('/', async (c) => {
  try {
    const { data, error } = await supabase.from('test_table').select('*');

    if (error) {
      throw error;
    }

    return c.json(data);
  } catch (err: any) {
    console.error('Erreur menu:', err);
    return c.json({ error: err.message }, 500);
  }
});

export default menuApp;

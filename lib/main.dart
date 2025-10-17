import 'package:flutter/material.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'pages/welcome_page.dart';
import 'pages/home_page.dart';

Future<void> main() async {
  // 1. Ensure Flutter bindings are initialized before any native code or async calls
  WidgetsFlutterBinding.ensureInitialized();

  try {
    // 2. Load the .env file. Ensure this file is in your project's root directory.
    await dotenv.load(fileName: ".env");

    // 3. Initialize Supabase using environment variables
    await Supabase.initialize(
      url: dotenv.env['SUPABASE_URL']!,
      anonKey: dotenv.env['SUPABASE_ANON_KEY']!,
    );
  } catch (e) {
    // If anything fails here (like missing .env or bad keys), log it clearly.
    // This is the most common cause of a white/blank screen.
    print('🚨 Initialization Error: $e');
    // You might want to run a simple placeholder app here if initialization fails.
  }

  // 4. Run the main application
  runApp(const TawaOrderApp());
}

class TawaOrderApp extends StatelessWidget {
  const TawaOrderApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Tawa Order',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        // Using ColorScheme.fromSeed is the modern approach
        colorScheme: ColorScheme.fromSeed(seedColor: const Color(0xFFe67e22)),
        useMaterial3: true,
        // Set primary color in the theme for general use
        primaryColor: const Color(0xFFe67e22),
      ),
      // Define the routes for navigation
      initialRoute: '/',
      routes: {
        '/': (context) => const WelcomePage(),
        '/home': (context) => const HomePage(),
      },
    );
  }
}

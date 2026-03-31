<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>RAGNAR REDEEM · LEGENDARY CODE VAULT</title>
    <!-- Google Fonts: Monospace + Bold uppercase vibe -->
    <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        /* Quick global reset + base — Tailwind will layer, but this ensures no flash */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            background: #020205;
            overflow-x: hidden;
        }
    </style>
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Custom override for Tailwind config simulation (colors, etc) - ensures consistent theme even if config not fully applied -->
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'cyber-dark': '#020205',
                        'legendary-blue': '#1A73E8',
                        'legendary-red': '#E81A1A',
                        'neon-blue': '#1A73E8',
                        'neon-red': '#E81A1A',
                    },
                    fontFamily: {
                        mono: ['Space Mono', 'monospace'],
                        'sans': ['Inter', 'sans-serif'],
                    },
                    animation: {
                        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        'glow-pulse': 'glow 2s ease-in-out infinite alternate',
                    },
                    keyframes: {
                        glow: {
                            '0%': { boxShadow: '0 0 5px rgba(26,115,232,0.3), 0 0 10px rgba(26,115,232,0.2)' },
                            '100%': { boxShadow: '0 0 20px rgba(232,26,26,0.5), 0 0 30px rgba(26,115,232,0.4)' },
                        }
                    }
                }
            }
        }
    </script>
    <style>
        /* custom glass + neon border + radial gradients + particles */
        .glass-card {
            background: rgba(2, 2, 5, 0.65);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(26, 115, 232, 0.4);
            box-shadow: 0 0 30px rgba(26, 115, 232, 0.2), inset 0 0 20px rgba(26,115,232,0.05);
            transition: all 0.2s ease;
        }
        .glowing-border-gradient {
            position: relative;
            border-radius: 2rem;
            background: rgba(2, 2, 5, 0.7);
        }
        .glowing-border-gradient::before {
            content: "";
            position: absolute;
            inset: -2px;
            border-radius: 2rem;
            padding: 2px;
            background: linear-gradient(135deg, #1A73E8, #E81A1A, #1A73E8);
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            pointer-events: none;
            opacity: 0.7;
            animation: borderPulse 3s infinite alternate;
        }
        @keyframes borderPulse {
            0% { opacity: 0.4; filter: blur(0px);}
            100% { opacity: 1; filter: blur(0.5px);}
        }
        .code-box {
            background: #00000066;
            border: 1px solid #1A73E8;
            text-shadow: 0 0 5px #1A73E8;
            box-shadow: 0 0 12px rgba(26,115,232,0.3);
            letter-spacing: 2px;
        }
        .copy-btn {
            background: linear-gradient(90deg, rgba(26,115,232,0.2), rgba(232,26,26,0.2));
            border: 1px solid rgba(26,115,232,0.6);
            transition: all 0.25s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }
        .copy-btn:hover {
            background: linear-gradient(90deg, #1A73E8, #E81A1A);
            border-color: white;
            box-shadow: 0 0 18px rgba(26,115,232,0.7);
            transform: scale(1.02);
        }
        .progress-bar-fill {
            background: linear-gradient(90deg, #1A73E8, #E81A1A);
            box-shadow: 0 0 8px #1A73E8;
        }
        .particle {
            position: absolute;
            background: radial-gradient(circle, rgba(26,115,232,0.6) 0%, rgba(232,26,26,0) 80%);
            border-radius: 50%;
            filter: blur(8px);
            pointer-events: none;
            z-index: 0;
        }
        .radial-glow-left {
            position: fixed;
            width: 60vw;
            height: 60vw;
            background: radial-gradient(circle, rgba(26,115,232,0.25) 0%, rgba(2,2,5,0) 70%);
            top: -20%;
            left: -20%;
            pointer-events: none;
            z-index: 0;
        }
        .radial-glow-right {
            position: fixed;
            width: 60vw;
            height: 60vw;
            background: radial-gradient(circle, rgba(232,26,26,0.2) 0%, rgba(2,2,5,0) 70%);
            bottom: -20%;
            right: -20%;
            pointer-events: none;
            z-index: 0;
        }
        .checkmark-svg {
            filter: drop-shadow(0 0 12px #1A73E8);
        }
    </style>
</head>
<body class="bg-cyber-dark font-mono text-white antialiased overflow-hidden">
    <div id="root"></div>
    <!-- We'll inject React via Next.js style but due to direct embed, we manually simulate? NO — This is the final answer structure.
         But the requirement: Provide code files for Next.js (App Router). The final output must be the content of each file.
         I will output the exact files as requested: package.json, next.config.js, tailwind.config.js, app/layout.tsx, app/page.tsx.
         To avoid confusion, I'm producing a full set of files. The UI is implemented in page.tsx with Framer Motion, Tailwind, lucide-react.
    -->
    <script type="module">
        // This is a placeholder to ensure all libraries are loaded, but actual React code will be replaced by Next.js build.
        // For the final answer I will provide the text files, not run them in this sandbox.
        console.log("RAGNAR READY — Deploy to Vercel with provided files");
    </script>
</body>
</html>
import { defineConfig } from "vitest/config";

export default defineConfig({
  esbuild: {
    jsx: "automatic",
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      include: ["app/**/*.{ts,tsx}", "src/**/*.{ts,tsx}"],
      exclude: ["**/*.test.{ts,tsx}", "**/index.ts", "src/test/**"],
      thresholds: {
        lines: 75,
        functions: 50,
        statements: 75,
        branches: 50,
        "src/features/**/*.{ts,tsx}": {
          lines: 90,
          functions: 80,
          statements: 90,
          branches: 70,
        },
        "src/components/**/*.{ts,tsx}": {
          lines: 70,
          functions: 50,
          statements: 70,
          branches: 50,
        },
      },
    },
  },
});

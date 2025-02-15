/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:it2NTy5gGIDH@ep-falling-lab-a8132su9.eastus2.azure.neon.tech/ai-mock-interview?sslmode=require',
    }
  };
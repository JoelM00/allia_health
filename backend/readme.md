# Development guide to config prisma

# Initiate prisma
npx prisma init

# Create migrations
npx prisma migrate dev --name this_is_a_name

# For prod migrate production
npx prisma migrate deploy

# Generate models
npx prisma generate

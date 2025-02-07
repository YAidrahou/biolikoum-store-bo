# Use official Node.js image
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and lock file
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy rest of the application
COPY . .

# Build the Next.js application
RUN yarn build

# Use a lightweight image for production
FROM node:18-alpine AS runner

WORKDIR /app

# Copy built app from builder
COPY --from=builder /app ./

# Set environment variable for production
ENV NODE_ENV=production

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]

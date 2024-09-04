# Start by pulling the official Node.js 18 image with the Alpine Linux distribution as the base image.
# base state
FROM node:18-alpine as base

# Install the necessary packages for Alpine Linux to build native Node.js modules:
# - g++: a C++ compiler
# - make: a build automation tool
# - py3-pip: Python 3 package installer (required for some Node.js packages)
# - libc6-compat: Compatibility libraries for C, ensuring binary compatibility
RUN apk add --no-cache g++ make py3-pip libc6-compat

# Set the working directory inside the container to /app.
WORKDIR /app

# Copy only the package.json and package-lock.json files to the working directory.
# This step is done early to leverage Docker's layer caching for npm install.
COPY package*.json ./

# Expose port 3000 to the host, so the app can be accessed from outside the container.
EXPOSE 3000
#  Builder state
# Create a new stage called 'builder' from the base image.
FROM base as builder

# Set the working directory inside the container to /app.
WORKDIR /app

# Copy all the files from the current directory on the host machine to the /app directory in the container.
COPY . .

# Run the build process (typically for Next.js, this would be generating the optimized production build).
RUN npm run build

# Create a new stage called 'production' from the base image for the production environment.
FROM base as production

# Set the working directory inside the container to /app.
WORKDIR /app

# Set the environment variable NODE_ENV to production, which ensures that only production dependencies are installed.
ENV NODE_ENV=production

# Install only the production dependencies using npm ci.
RUN npm ci

# Add a new group with the ID 1001 named 'nodejs'.
RUN addgroup -g 1001 -S nodejs

# Add a new user 'nextjs' with the ID 1001 and associate it with the nodejs group.
RUN adduser -S nextjs -u 1001

# Switch to using the newly created 'nextjs' user for running the application.
USER nextjs

# Copy the built Next.js files from the builder stage and set the ownership to nextjs:nodejs.
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next

# Copy the node_modules directory from the builder stage.
COPY --from=builder /app/node_modules ./node_modules

# Copy the package.json file from the builder stage.
COPY --from=builder /app/package.json ./package.json

# Copy the public assets from the builder stage.
COPY --from=builder /app/public ./public

# Command to start the application in production mode.
CMD npm start

# Create a new stage called 'dev' for the development environment.
FROM base as dev

# Set the environment variable NODE_ENV to development, enabling features like hot-reloading.
ENV NODE_ENV=development

# Install all dependencies, including devDependencies, for development purposes.
RUN npm install 

# Copy all files from the current directory on the host machine to the /app directory in the container.
COPY . .

# Command to start the application in development mode.
CMD npm run dev

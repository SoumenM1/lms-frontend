#!/bin/bash

# Create Next.js application
# npx create-next-app my-next-app

# Navigate into the project directory
# cd my-next-app

# Install Redux and React-Redux
# npm install @reduxjs/toolkit react-redux

# Create necessary directories
mkdir -p public/assets
mkdir -p src/components
mkdir -p src/pages/api/auth
mkdir -p src/pages/api/questions
mkdir -p src/pages/api/tests/[testId]/questions
mkdir -p src/pages/api/tests
mkdir -p src/pages/admin
mkdir -p src/pages/test
mkdir -p src/store
mkdir -p src/utils

# Create example files
touch src/components/Header.js
touch src/components/Footer.js
touch src/components/QuestionList.js
touch src/components/TestPage.js

touch src/pages/api/auth/login.js
touch src/pages/api/auth/register.js
touch src/pages/api/questions/[id].js
touch src/pages/api/questions/index.js
touch src/pages/api/tests/[testId]/start.js
touch src/pages/api/tests/[testId]/questions/[questionId].js
touch src/pages/api/tests/[uniqueURL].js

touch src/pages/admin/questions.js
touch src/pages/test/[uniqueURL].js

touch src/pages/index.js
touch src/pages/login.js
touch src/pages/register.js
touch src/pages/_app.js

touch src/store/index.js
touch src/store/userSlice.js
touch src/store/questionSlice.js

touch src/utils/fetch.js

# Print a message indicating setup is complete
echo "Next.js application setup complete with necessary files and directories."

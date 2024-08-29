const baseUrl = 'http://localhost:5000';

const fetch = async (url, options = {}) => {
  const response = await window.fetch(`${baseUrl}${url}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'An error occurred');
  }

  return response;
};

export default fetch;

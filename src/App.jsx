import React, { useState } from 'react';
    import './index.css';

    function App() {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);

      const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 2000));
          // Handle successful login
          console.log('Login successful!');
        } catch (error) {
          setError('Invalid email or password');
        } finally {
          setLoading(false);
        }
      };

      return (
        <div className="h-screen flex justify-center items-center bg-gray-100">
          <div className="max-w-md w-full mx-auto bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-bold mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              {error && (
                <div className="mb-4 text-red-500">{error}</div>
              )}
              <button
                type="submit"
                className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
              >
                {loading ? (
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357 2m15.357 2H15" />
                  </svg>
                ) : (
                  'Login'
                )}
              </button>
            </form>
          </div>
        </div>
      );
    }

    export default App;

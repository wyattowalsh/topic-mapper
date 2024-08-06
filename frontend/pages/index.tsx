import { useState } from 'react';

const Home = () => {
  const [topics, setTopics] = useState('');
  const [topicMaps, setTopicMaps] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/generate_topic_map', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ topics: topics.split(',') }),
    });
    const data = await response.json();
    setTopicMaps(data.topic_maps);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">TopicMapper</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <label htmlFor="topics" className="block text-sm font-medium text-gray-700">
          Enter topics (comma separated):
        </label>
        <input
          type="text"
          id="topics"
          value={topics}
          onChange={(e) => setTopics(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Generate Topic Maps
        </button>
      </form>
      {Object.keys(topicMaps).length > 0 && (
        <div>
          <h2 className="text-xl font-bold mb-2">Generated Topic Maps:</h2>
          {Object.entries(topicMaps).map(([topic, maps]) => (
            <div key={topic} className="mb-4">
              <h3 className="text-lg font-semibold">{topic}</h3>
              <ul className="list-disc list-inside">
                {maps.map((map, index) => (
                  <li key={index}>{map}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;

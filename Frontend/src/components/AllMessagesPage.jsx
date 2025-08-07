import { useEffect, useState } from 'react';
import { Card, CardContent } from './ui/Card';
import { motion } from 'framer-motion';

export default function AllMessagesPage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  useEffect(() => {
    fetch('https://well-kati-koyebdeployacc1-2eef9d50.koyeb.app/api/messages')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch messages');
        return res.json();
      })
      .then((data) => {
        setMessages(data.reverse()); // show latest first
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (

    //bg-gradient-to-b from-[#1F1B3A] to-[#2C2555]
<div className="min-h-screen relative py-10 px-4 flex justify-center z-10 bg-transparent">
      <motion.div
        className="w-full max-w-4xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-white text-center mb-8">Anonymous Messages</h1>

        {loading ? (
          <p className="text-center text-violet-300">Loading messages...</p>
        ) : error ? (
          <p className="text-center text-red-400">{error}</p>
        ) : messages.length === 0 ? (
          <p className="text-center text-violet-300">No messages found.</p>
        ) : (
          <div className="grid md:grid-cols-1 gap-6">
            {messages.map((msg) => (
              <Card key={msg.id} className="bg-[#2C2555] border border-violet-800 shadow-lg rounded-2xl">
                <CardContent className="p-6">
                  <p className="text-white text-lg mb-4">💬 {msg.message}</p>
                  <p className="text-sm text-violet-300">📅 {formatDate(msg.timestamp)}</p>
                  <p className="text-sm text-violet-400 mt-1 truncate">🖥️ {msg.userAgent}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}

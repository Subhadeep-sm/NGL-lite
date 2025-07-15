import { useState } from 'react';
import { Button } from './Button';
import { Input } from './Input';
import { Textarea } from './Textarea';
import { Card, CardContent } from './Card';
import { motion } from 'framer-motion';

export default function AnonymousMessagePage() {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (message.trim()) {
      alert(`Anonymous message sent to @${username || 'someone'}!`);
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-transparent mt-[-100vh]   flex items-center justify-center px-4 py-10">
      <motion.div
        className="w-full max-w-xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="bg-[#1F1B3A] border-none shadow-2xl rounded-2xl">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold text-white text-center mb-4">Send an Anonymous Message</h1>
            <p className="text-sm text-violet-300 text-center mb-6">
              Write your heart out. The recipient will never know it's you.
            </p>
            <div className="mb-4">
              <label className="text-violet-200 text-sm">Username (Optional)</label>
              <Input
                type="text"
                placeholder="e.g. john_doe"
                // className="bg-[#2C2555] text-white placeholder-violet-400 mt-1"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="text-violet-200 text-sm">Your Message</label>
              <Textarea
                placeholder="Type something anonymously..."
                // className="bg-[#2C2555] text-white placeholder-violet-400 mt-1"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <Button
              className="w-full bg-gradient-to-r from-[#9B5DE5] to-[#F15BB5] hover:from-[#F15BB5] hover:to-[#9B5DE5] text-white font-semibold text-lg py-2"
              onClick={handleSubmit}
            >
              Send Message
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
// #F15BB5
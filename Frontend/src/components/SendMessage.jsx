import { useState } from 'react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Textarea } from './ui/Textarea';
import { Card, CardContent } from './ui/Card';
import { motion } from 'framer-motion';

export default function AnonymousMessagePage() {
  // const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
  if (message.trim()) {
    try {
      const response = await fetch('https://well-kati-koyebdeployacc1-2eef9d50.koyeb.app/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: message.trim()
        })
      });

      if (response.ok) {
        alert(`Anonymous message sent successfully!`);
        setMessage('');
      } else {
        const errorData = await response.text();
        alert('Failed to send message: ' + errorData);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred while sending the message.');
    }
  }
};

//mt-[-100vh]  min-h-screen 

  return (
    <div className=" bg-transparent fixed z-9999 lg:top-[15vh] top-10 justify-self-center flex items-center justify-center px-4 py-10">
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
            {/* <div className="mb-4">
              <label className="text-violet-200 text-sm">Username (Optional)</label>
              <Input
                type="text"
                placeholder="e.g. john_doe"
                // className="bg-[#2C2555] text-white placeholder-violet-400 mt-1"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div> */}
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
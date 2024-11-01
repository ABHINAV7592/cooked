import React, { useState, useCallback } from 'react';
import { Sparkles, Download, RefreshCw, Share2 } from 'lucide-react';
import { MemeCard } from './components/MemeCard';
import { Button } from './components/Button';
import { backgrounds } from './data/backgrounds';

function App() {
  const [prompt, setPrompt] = useState('');
  const [currentBg, setCurrentBg] = useState(backgrounds[0]);
  const [quote, setQuote] = useState('Your motivation quote will appear here');

  const generateQuote = useCallback(() => {
    if (!prompt.trim()) return;
    
    const templates = [
      "Success is not final, failure is not fatal: it's the courage to continue that counts.",
      "The only way to do great work is to love what you do.",
      "Believe you can and you're halfway there.",
      "Your time is limited, don't waste it living someone else's life.",
      "The future belongs to those who believe in the beauty of their dreams."
    ];
    setQuote(templates[Math.floor(Math.random() * templates.length)]);
  }, [prompt]);

  const changeBg = useCallback(() => {
    const nextIndex = (backgrounds.indexOf(currentBg) + 1) % backgrounds.length;
    setCurrentBg(backgrounds[nextIndex]);
  }, [currentBg]);

  const handleShare = useCallback(async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Motivation Meme',
          text: quote,
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    }
  }, [quote]);

  const handleDownload = useCallback(() => {
    // Placeholder for download functionality
    console.log('Download functionality to be implemented');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-4">
      <div className="container mx-auto max-w-7xl">
        <header className="text-center py-8 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
            Motivation Meme Generator
          </h1>
          <p className="text-gray-600 text-lg">Transform your thoughts into inspiring memes</p>
        </header>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="text-purple-500" size={24} />
                <h2 className="text-xl font-semibold">Create Your Meme</h2>
              </div>
              
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Enter your inspiration prompt..."
                className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all mb-4 h-32 resize-none"
              />
              
              <Button
                onClick={generateQuote}
                icon={Sparkles}
                fullWidth
              >
                Generate Meme
              </Button>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-6">
              <h3 className="font-semibold mb-4">Customization</h3>
              <Button
                onClick={changeBg}
                icon={RefreshCw}
                variant="secondary"
                fullWidth
                className="mb-4"
              >
                Change Background
              </Button>
              
              <div className="grid grid-cols-2 gap-4">
                <Button
                  onClick={handleShare}
                  icon={Share2}
                  variant="info"
                  fullWidth
                >
                  Share
                </Button>
                <Button
                  onClick={handleDownload}
                  icon={Download}
                  variant="success"
                  fullWidth
                >
                  Download
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-8">
            <MemeCard quote={quote} background={currentBg} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
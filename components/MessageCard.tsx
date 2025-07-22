import VideoThumbnail from './VideoThumbnail';

interface MessageCardProps {
  message: string;
  author: string;
  type?: 'text' | 'video' | 'audio';
  mediaUrl?: string;
}

export default function MessageCard({ message, author, type = 'text', mediaUrl }: MessageCardProps) {
  if (type === 'text') {
    return (
      <div className="message-card">
        <p className="font-serif text-base lg:text-lg text-gray-700 italic leading-relaxed mb-4">
          "{message}"
        </p>
        <p className="font-serif text-sm text-gray-600 text-right">
          - {author}
        </p>
      </div>
    );
  }

  if (type === 'video') {
    return (
      <div className="message-card">
        <div className="aspect-video bg-gray-100 rounded-md mb-4 overflow-hidden relative group">
          {mediaUrl ? (
            <VideoThumbnail videoUrl={mediaUrl} />
          ) : (
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">▶️</span>
              </div>
              <p className="text-gray-500 font-serif">Video Message</p>
            </div>
          )}
        </div>
        <p className="font-serif text-sm text-gray-600">
          From: {author}
        </p>
      </div>
    );
  }

  if (type === 'audio') {
    return (
      <div className="message-card">
        <div className="bg-gray-100 rounded-md p-6 mb-4 flex items-center justify-center">
          {mediaUrl ? (
            <audio controls className="w-full">
              <source src={mediaUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          ) : (
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">🎙️</span>
              </div>
              <p className="text-gray-500 font-serif">Audio Message</p>
            </div>
          )}
        </div>
        <p className="font-serif text-sm text-gray-600">
          From: {author}
        </p>
      </div>
    );
  }

  return null;
}
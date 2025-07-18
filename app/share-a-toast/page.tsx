'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import ToastFeed from '@/components/ToastFeed';
import { Progress } from '@/components/ui/progress';
import { Pencil, Video, Mic, Upload, CheckCircle } from 'lucide-react';
import { addDocument, uploadFile } from '@/lib/firebase/firebaseUtils';

type SubmissionType = 'text' | 'video' | 'audio' | null;

interface FormData {
  name: string;
  message: string;
  isPrivate: boolean;
  file: File | null;
  audioBlob: Blob | null;
}

export default function ShareToastPage() {
  const [selectedType, setSelectedType] = useState<SubmissionType>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  
  // Upload progress states
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStage, setUploadStage] = useState<'idle' | 'uploading' | 'processing' | 'complete'>('idle');
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    message: '',
    isPrivate: false,
    file: null,
    audioBlob: null,
  });

  const resetForm = () => {
    setFormData({
      name: '',
      message: '',
      isPrivate: false,
      file: null,
      audioBlob: null,
    });
    setSelectedType(null);
    setAudioUrl(null);
    setAudioChunks([]);
    setUploadProgress(0);
    setUploadStage('idle');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setUploadProgress(0);
    setUploadStage('idle');

    try {
      let mediaUrl = null;
      console.log('Starting submission process...', { selectedType, formData });
      
      // Upload media if present
      if (selectedType === 'video' && formData.file) {
        setUploadStage('uploading');
        console.log('Uploading video file via API route...');
        
        // Simulate upload progress
        const progressInterval = setInterval(() => {
          setUploadProgress(prev => {
            if (prev >= 90) {
              clearInterval(progressInterval);
              return 90;
            }
            return prev + Math.random() * 15;
          });
        }, 200);

        const apiFormData = new FormData();
        apiFormData.append('file', formData.file);
        apiFormData.append('filePath', `toasts/videos/${Date.now()}_${formData.file.name}`);

        const response = await fetch('/api/upload', {
          method: 'POST',
          body: apiFormData,
        });

        clearInterval(progressInterval);
        setUploadProgress(100);
        setUploadStage('processing');

        const result = await response.json();
        if (!response.ok) {
          throw new Error(result.error || 'Failed to upload video.');
        }
        mediaUrl = result.mediaUrl;
        console.log('Video upload successful:', mediaUrl);
        
      } else if (selectedType === 'audio' && formData.audioBlob) {
        setUploadStage('uploading');
        console.log('Uploading audio file via API route...');
        
        // Simulate upload progress
        const progressInterval = setInterval(() => {
          setUploadProgress(prev => {
            if (prev >= 90) {
              clearInterval(progressInterval);
              return 90;
            }
            return prev + Math.random() * 15;
          });
        }, 200);

        const audioFile = new File([formData.audioBlob], 'audio.webm', { type: 'audio/webm' });
        const apiFormData = new FormData();
        apiFormData.append('file', audioFile);
        apiFormData.append('filePath', `toasts/audio/${Date.now()}_audio.webm`);

        const response = await fetch('/api/upload', {
          method: 'POST',
          body: apiFormData,
        });

        clearInterval(progressInterval);
        setUploadProgress(100);
        setUploadStage('processing');

        const result = await response.json();
        if (!response.ok) {
          throw new Error(result.error || 'Failed to upload audio.');
        }
        mediaUrl = result.mediaUrl;
        console.log('Audio upload successful:', mediaUrl);
      }

      // Prepare document data
      const documentData = {
        name: formData.name,
        message: formData.message || '',
        type: selectedType,
        mediaUrl,
        isPrivate: formData.isPrivate,
        createdAt: new Date().toISOString(),
      };
      
      console.log('Saving to Firestore:', documentData);

      // Save to Firestore
      try {
        const docRef = await addDocument('toasts', documentData);
        console.log('Document saved successfully with ID:', docRef);
        setUploadStage('complete');
      } catch (firestoreError) {
        console.error('Firestore save failed:', firestoreError);
        throw new Error('Failed to save your message. Please try again.');
      }

      console.log('Submission completed successfully');
      setShowSuccess(true);
      resetForm();
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting toast:', error);
      setError(error instanceof Error ? error.message : 'Oops! Something went wrong. Please try again.');
      setUploadStage('idle');
      setUploadProgress(0);
    } finally {
      setIsSubmitting(false);
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      const chunks: Blob[] = [];
      
      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.push(event.data);
        }
      };
      
      recorder.onstop = () => {
        const audioBlob = new Blob(chunks, { type: 'audio/webm' });
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
        setFormData(prev => ({ ...prev, audioBlob }));
        stream.getTracks().forEach(track => track.stop());
      };
      
      setMediaRecorder(recorder);
      recorder.start();
      setIsRecording(true);
      setAudioChunks([]);
    } catch (error) {
      console.error('Error accessing microphone:', error);
      setError('Unable to access microphone. Please check your permissions.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorder && isRecording) {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };

  const reRecord = () => {
    setAudioUrl(null);
    setAudioChunks([]);
    setFormData({ ...formData, audioBlob: null });
  };

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen py-12">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto px-6 lg:px-16 py-12">
          <h1 className="font-serif text-4xl lg:text-5xl text-gray-800 text-center mb-8">
            Share a Toast
          </h1>
          
          <p className="font-serif text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto text-center">
            We're eloping in one of our favorite spots in the Western North Carolina mountains on August 21st – the anniversary of our first kiss and that amazing solar eclipse day you can read about on the Our Story page. Making this date our wedding anniversary felt perfect.
          </p>
          
          <p className="font-serif text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mt-6">
            After we say our vows and set intentions for our lives together and the family we're creating, we'll head to a nearby cabin for our wedding dinner. There we'll discuss what we want our marriage to look like and the type of family we want to be, writing it all down as a living document of our intentions.
          </p>
          
          <p className="font-serif text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mt-6">
            We want to include all our family and friends who want to contribute – absolutely no pressure. Your voices will be part of our ceremony through this virtual asynchronous toast. Share your advice or well wishes as we set our intentions for our future together.
          </p>
          
          <p className="font-serif text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mt-6">
            Feel free to keep it simple! Write a short message or share a quick video – doesn't have to be more than a few minutes and you don't need to spend an hour crafting it. We just appreciate you thinking of us and helping you feel like part of our wedding.
          </p>
        </div>

        {/* Submission Options Section */}
        <div className="max-w-3xl mx-auto px-6 lg:px-16 my-12 lg:my-16">
          <div className="bg-white rounded-lg shadow-md p-8 lg:p-12">
            <h2 className="font-serif text-2xl text-gray-800 text-center mb-8">
              How would you like to share?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Text Option */}
              <button
                onClick={() => setSelectedType('text')}
                className={`p-6 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                  selectedType === 'text'
                    ? 'border-gray-800 bg-gray-50'
                    : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
                }`}
              >
                <Pencil className="w-8 h-8 mx-auto mb-4 text-gray-700" />
                <h3 className="font-serif text-lg font-medium text-gray-800">
                  Write a Message
                </h3>
                <p className="font-serif text-sm text-gray-500 mt-2">
                  Share your thoughts in writing
                </p>
              </button>

              {/* Video Option */}
              <button
                onClick={() => setSelectedType('video')}
                className={`p-6 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                  selectedType === 'video'
                    ? 'border-gray-800 bg-gray-50'
                    : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
                }`}
              >
                <Video className="w-8 h-8 mx-auto mb-4 text-gray-700" />
                <h3 className="font-serif text-lg font-medium text-gray-800">
                  Upload a Video
                </h3>
                <p className="font-serif text-sm text-gray-500 mt-2">
                  Record a video message
                </p>
              </button>

              {/* Audio Option */}
              <button
                onClick={() => setSelectedType('audio')}
                className={`p-6 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                  selectedType === 'audio'
                    ? 'border-gray-800 bg-gray-50'
                    : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
                }`}
              >
                <Mic className="w-8 h-8 mx-auto mb-4 text-gray-700" />
                <h3 className="font-serif text-lg font-medium text-gray-800">
                  Record Audio
                </h3>
                <p className="font-serif text-sm text-gray-500 mt-2">
                  Share your voice
                </p>
              </button>
            </div>

            {/* Dynamic Form Based on Selection */}
            {selectedType && (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6 animate-fadeIn">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block font-serif text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors"
                  />
                </div>

                {/* Text Message Form */}
                {selectedType === 'text' && (
                  <div>
                    <label htmlFor="message" className="block font-serif text-sm font-medium text-gray-700 mb-2">
                      Your Message
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Write your message here... Feel free to share memories, advice, or well wishes for our new chapter together."
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors min-h-[200px] resize-y"
                      />
                    </div>
                  </div>
                )}

                {/* Video Upload Form */}
                {selectedType === 'video' && (
                  <div>
                    <label className="block font-serif text-sm font-medium text-gray-700 mb-2">
                      Upload Your Video
                    </label>
                    <div 
                      className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors"
                      onDragOver={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      onDrop={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        const file = e.dataTransfer.files[0];
                        if (file && file.type.startsWith('video/')) {
                          if (file.size > 100 * 1024 * 1024) {
                            setError('Video must be less than 100MB');
                            return;
                          }
                          setFormData({ ...formData, file });
                        }
                      }}
                    >
                      <input
                        type="file"
                        accept="video/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file && file.size > 100 * 1024 * 1024) {
                            setError('Video must be less than 100MB');
                            return;
                          }
                          setFormData({ ...formData, file: file || null });
                        }}
                        className="hidden"
                        id="video-upload"
                      />
                      <label htmlFor="video-upload" className="cursor-pointer">
                        <Video className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                        <p className="font-serif text-gray-600">
                          {formData.file ? formData.file.name : 'Click to browse or drag and drop'}
                        </p>
                        <p className="font-serif text-sm text-gray-500 mt-2">
                          MP4, MOV, AVI (max 100MB)
                        </p>
                      </label>
                    </div>
                  </div>
                )}

                {/* Audio Recording Form */}
                {selectedType === 'audio' && (
                  <div>
                    <label className="block font-serif text-sm font-medium text-gray-700 mb-2">
                      Record Your Audio Message
                    </label>
                    <div className="bg-gray-50 rounded-lg p-6 text-center">
                      {!audioUrl ? (
                        <button
                          type="button"
                          onClick={isRecording ? stopRecording : startRecording}
                          className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors ${
                            isRecording
                              ? 'bg-red-500 hover:bg-red-600 animate-pulse'
                              : 'bg-gray-700 hover:bg-gray-800'
                          }`}
                        >
                          <Mic className="w-8 h-8 text-white" />
                        </button>
                      ) : (
                        <div className="space-y-4">
                          <audio controls src={audioUrl} className="w-full" />
                          <button
                            type="button"
                            onClick={reRecord}
                            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md font-serif text-sm transition-colors"
                          >
                            Re-record
                          </button>
                        </div>
                      )}
                      <p className="font-serif text-sm text-gray-600">
                        {isRecording ? 'Recording... Click to stop' : 'Click to start recording'}
                      </p>
                      <p className="font-serif text-xs text-gray-500 mt-2">
                        Max duration: 5 minutes
                      </p>
                    </div>
                  </div>
                )}

                {/* Privacy Option */}
                <div className="mt-6 bg-gray-50 rounded-lg p-4">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.isPrivate}
                      onChange={(e) => setFormData({ ...formData, isPrivate: e.target.checked })}
                      className="mr-3 h-4 w-4 text-gray-700 focus:ring-gray-500 border-gray-300 rounded"
                    />
                    <span className="font-serif text-gray-700">Keep this private (just for us)</span>
                  </label>
                  <p className="font-serif text-sm text-gray-600 italic mt-2">
                    Your message will only be read by us
                  </p>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="font-serif text-red-600">{error}</p>
                  </div>
                )}

                {/* Upload Progress */}
                {isSubmitting && (selectedType === 'video' || selectedType === 'audio') && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      {uploadStage === 'uploading' && (
                        <>
                          <Upload className="w-5 h-5 text-blue-600 animate-spin" />
                          <span className="font-serif text-blue-800">
                            Uploading your {selectedType}...
                          </span>
                        </>
                      )}
                      {uploadStage === 'processing' && (
                        <>
                          <div className="w-5 h-5 flex items-center justify-center">
                            <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                          </div>
                          <span className="font-serif text-blue-800">
                            Processing your {selectedType}...
                          </span>
                        </>
                      )}
                      {uploadStage === 'complete' && (
                        <>
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <span className="font-serif text-green-800">
                            Upload complete! Saving your message...
                          </span>
                        </>
                      )}
                    </div>
                    <Progress 
                      value={uploadProgress} 
                      className="h-3 bg-blue-100"
                    />
                    <p className="font-serif text-sm text-blue-600 mt-2">
                      {Math.round(uploadProgress)}% complete
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting || (selectedType === 'audio' && !audioUrl)}
                    className="px-6 py-3 bg-gray-800 text-white font-serif rounded-md hover:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                  >
                    {isSubmitting && (selectedType === 'video' || selectedType === 'audio') ? (
                      uploadStage === 'uploading' ? 'Uploading...' :
                      uploadStage === 'processing' ? 'Processing...' :
                      uploadStage === 'complete' ? 'Saving...' : 'Sending...'
                    ) : isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-50 border border-green-200 rounded-lg p-6 shadow-lg z-50 animate-fadeIn">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-serif text-green-800 font-medium">
                  Thank you! Your toast has been received.
                </p>
                <p className="font-serif text-green-600 text-sm mt-1">
                  We'll read your message on our wedding night.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Public Messages Feed */}
        <div className="max-w-4xl mx-auto mt-24 px-6 lg:px-16">
          <div className="border-t border-gray-200 pt-12">
            <ToastFeed
              title="Toasts from Family & Friends"
              subtitle="Shared with permission"
              showEmptyState={false}
              showHeader={true}
              maxHeight=""
            />
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
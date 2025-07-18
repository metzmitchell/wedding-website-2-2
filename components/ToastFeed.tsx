'use client';

import { useState, useEffect } from 'react';
import MessageCard from './MessageCard';
import { collection, query, where, orderBy, onSnapshot, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase/firebase';

interface Toast {
  id: string;
  name: string;
  message: string;
  type: 'text' | 'video' | 'audio';
  mediaUrl?: string;
  isPrivate: boolean;
  createdAt: string;
}

interface ToastFeedProps {
  title?: string;
  subtitle?: string;
  maxHeight?: string;
  showEmptyState?: boolean;
}

export default function ToastFeed({ 
  title = "Your Toasts to Us",
  subtitle = "We'll read every single one on August 21st. Thank you for being part of our ceremony.",
  maxHeight = "600px",
  showEmptyState = true
}: ToastFeedProps) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('Setting up ToastFeed listener...');
    
    const fetchInitialToasts = async () => {
      try {
        const q = query(
          collection(db, 'toasts'),
          where('isPrivate', '==', false),
          orderBy('createdAt', 'desc')
        );
        
        const querySnapshot = await getDocs(q);
        const initialToasts: Toast[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          console.log('Initial toast:', { id: doc.id, ...data });
          initialToasts.push({
            id: doc.id,
            ...data
          } as Toast);
        });
        
        console.log('Setting initial toasts:', initialToasts.length);
        setToasts(initialToasts);
      } catch (err) {
        console.error('Error fetching initial toasts:', err);
        setError('Failed to load messages. Please refresh the page.');
      } finally {
        setIsLoading(false);
      }
    };

    // Fetch initial data
    fetchInitialToasts();
    
    // Set up real-time listener
    const q = query(
      collection(db, 'toasts'),
      where('isPrivate', '==', false),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, 
      (snapshot) => {
        console.log('Received Firestore update:', snapshot.size, 'documents');
        const newToasts: Toast[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          console.log('Processing document:', { id: doc.id, ...data });
          newToasts.push({
            id: doc.id,
            ...data
          } as Toast);
        });
        console.log('Updating toasts:', newToasts.length);
        setToasts(newToasts);
      },
      (err) => {
        console.error('Error in Firestore listener:', err);
        setError('Error loading new messages. Please refresh the page.');
      }
    );

    return () => {
      console.log('Cleaning up ToastFeed listener');
      unsubscribe();
    };
  }, []);

  if (isLoading) {
    return (
      <div className="section-container">
        <div className="page-container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-h2 text-gray-800 mb-4">{title}</h2>
            <p className="font-serif text-body text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
          </div>
          
          <div className="bg-gray-50/50 rounded-lg p-6 scrollbar-thin" style={{ maxHeight }}>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-200 animate-pulse rounded-lg h-32"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="section-container">
        <div className="page-container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-h2 text-gray-800 mb-4">{title}</h2>
            <p className="font-serif text-body text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
          </div>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <p className="text-red-600 text-center">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section-container">
      <div className="page-container">
        <div className="text-center mb-12">
          <h2 className="font-serif text-h2 text-gray-800 mb-4">{title}</h2>
          <p className="font-serif text-body text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>
        
        <div 
          className="bg-gray-50/50 rounded-lg p-6 overflow-y-auto scrollbar-thin" 
          style={{ maxHeight }}
        >
          {toasts.length > 0 ? (
            <div className="space-y-4">
              {toasts.map((toast) => (
                <MessageCard
                  key={toast.id}
                  message={toast.message}
                  author={toast.name}
                  type={toast.type}
                  mediaUrl={toast.mediaUrl}
                />
              ))}
            </div>
          ) : showEmptyState ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💝</span>
              </div>
              <p className="font-serif text-lg text-gray-500 mb-2">No toasts yet</p>
              <p className="font-serif text-base text-gray-400">
                Be the first to share your well-wishes!
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}